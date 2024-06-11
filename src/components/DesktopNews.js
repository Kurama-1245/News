import React, { useEffect, useState } from 'react'
import DesktopNewsItem from '../components/DesktopNewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import logo from "../components/logo192.png"


function DesktopNews(propD) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    
    const updateDesktopNews = async () => {
        propD.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${propD.category}&apiKey=${propD.apiKey}&page=${page}&pageSize=${propD.pageSize}`;
        propD.setProgress(30)
        let totalData = await fetch(url);
        propD.setProgress(70)
        let data = await totalData.json();
        propD.setProgress(90)
        console.log(data)
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoading(false)
        propD.setProgress(100)

    }

    useEffect(() => {
        updateDesktopNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        propD.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${propD.category}&apiKey=${propD.apiKey}&page=${page + 1}&pageSize=${propD.pageSize}`;
        setPage(page + 1)
        propD.setProgress(30)
        let totalData = await fetch(url);
        propD.setProgress(70)
        let data = await totalData.json();
        propD.setProgress(90)
        console.log(data)
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
        propD.setProgress(100)
    }
    return (
        <>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<div className="text-center">{<Spinner />}</div>}
                endMessage={<br />}>
                <div className="container" style={{ marginTop: '130px' }}>
                    <div>
                        <h1>Latest Briefing: </h1>
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

export default DesktopNews

DesktopNews.defaultProps = {
    pageSize: 10,
    apiKey: '813b62e2b3394673aa74162d7c28bcab',
    category: 'general'
}