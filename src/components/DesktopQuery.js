import React, { useEffect, useState } from 'react'
import DesktopNewsItem from '../components/DesktopNewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import logo from "../components/logo192.png"

function DesktopQuery(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const updateDesktopSearch = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=+${props.desktopSearch}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    props.setProgress(30);
    let totalData = await fetch(url);
    props.setProgress(70);
    let data = await totalData.json()
    props.setProgress(90);
    setArticles(data.articles)
    setTotalResults(data.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateDesktopSearch()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=+${props.desktopSearch}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    props.setProgress(30);
    let totalData = await fetch(url);
    props.setProgress(70);
    let data = await totalData.json()
    props.setProgress(90);
    setArticles(articles.concat(data.articles))
    setTotalResults(data.totalResults)
    props.setProgress(100)
  }

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className="text-center">{<Spinner />}</div>}
        endMessage={<br />}>
        <div className='container' style={{ marginTop: '130px' }}>
          <div style={{ marginBottom: '15px' }}>
            <h1>
              Search : {props.desktopSearch}
            </h1>
          </div>
          {loading && <Spinner />}
          {articles.map((ele) => {
            return (
              <div key={ele.url}>
                <DesktopNewsItem key={ele.url} name={ele.source.name} author={ele.author} title={ele.title} description={ele.description ? ele.description : ele.content} url={ele.url} urlToImage={ele.urlToImage ? ele.urlToImage : logo} publishedAt={ele.publishedAt} />
              </div>
            )
          })}
        </div>
      </InfiniteScroll>
    </>
  )
}

export default DesktopQuery

DesktopQuery.defaultProps = {
  pageSize: 10,
  apiKey: '813b62e2b3394673aa74162d7c28bcab',
}