import React, { useEffect, useState } from 'react'
import MobileNewsItem from '../components/MobileNewsItem'
import logo from "../components/logo192.png"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

function MobileNews(propM) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);


    const updateMobileNews = async () => {
        propM.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${propM.category}&apiKey=${propM.apiKey}&page=${page}&pageSize=${propM.pageSize}`;
        propM.setProgress(30)
        let totalData = await fetch(url);
        propM.setProgress(70)
        let data = await totalData.json();
        console.log(data)
        propM.setProgress(90)
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoading(false)
        propM.setProgress(100)
    }

    useEffect(() => {
        updateMobileNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        propM.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${propM.category}&apiKey=${propM.apiKey}&page=${page + 1}&pageSize=${propM.pageSize}`;
        setPage(page + 1)
        propM.setProgress(30)
        let totalData = await fetch(url);
        propM.setProgress(70)
        let data = await totalData.json();
        propM.setProgress(90)
        console.log(data)
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
        propM.setProgress(100)

    }
    return (
        <>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<div className="text-center">{<Spinner />}</div>}
                endMessage={<br/>}>
                <div className="container" style={{ marginTop: '110px' }}>
                    <div>
                        <h3>Latest Briefing: </h3>
                    </div>
                    {loading&&<Spinner/>}
                    {articles.map((ele) => {
                        return (
                            <div key={ele.url}>
                                <MobileNewsItem name={ele.source.name} author={ele.author} title={ele.title} description={ele.description? ele.description : ele.content} url={ele.url} urlToImage={ele.urlToImage? ele.urlToImage : logo} publishedAt={ele.publishedAt} />
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>

        </>
    )
}

export default MobileNews

MobileNews.defaultProps = {
    pageSize: 10,
    apiKey: '813b62e2b3394673aa74162d7c28bcab',
    category: 'general'

}