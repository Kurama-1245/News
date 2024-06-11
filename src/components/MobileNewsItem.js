import React from 'react'
import ReactTimeAgo from 'react-time-ago'

function MobileNewsItem(props2) {
    return (
        <>
            <div className="card my-4">
                <img src={props2.urlToImage} className="card-img-top" alt="..." style={{ maxWidth: '800px', margin: 'auto' }} />
                <span className="badge rounded-pill bg-danger" style={{ position: 'absolute', right: '0px', top: '0px', zIndex: "10" }}>{props2.name} </span>

                <div className="card-body">
                    <h5 className="card-title">{props2.title}</h5>
                    <p className="card-text">{props2.description}</p>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                            By {props2.author ? props2.author : "Unknown"} - {<ReactTimeAgo date={props2.publishedAt} locale="en-US" timeStyle="twitter"/>}
                        </small>
                        <a href={props2.url} target="blank" className="btn btn-dark">Full Coverage</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNewsItem