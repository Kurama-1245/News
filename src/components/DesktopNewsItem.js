import React from 'react'
import ReactTimeAgo from 'react-time-ago'
function DesktopNewsItem(propD1) {

    return (
        <>
            <div className="container">
                <div className="card mb-4" >
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <span className="badge rounded-pill bg-danger" style={{ position: 'absolute', right: '0%' }}>{propD1.name} </span>
                            <img src={propD1.urlToImage} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <br />
                            <div className="card-body ">
                                <h5 className="card-title">{propD1.title}</h5>
                                <p className="card-text">{propD1.description}</p>
                                <p className="card-text" style={{ position: 'absolute', bottom: '7%' }}><small className="text-muted">By {propD1.author ? propD1.author : "Unknown"} - {<ReactTimeAgo date={propD1.publishedAt} locale="en-US" timeStyle="twitter" />}</small></p>
                                <a href={propD1.url} target="blank" style={{ position: 'absolute', bottom: '7%', right: '1%' }} className="btn btn-dark">Full Coverage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopNewsItem