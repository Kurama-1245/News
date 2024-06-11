import React from 'react'
import loading from "./loading.gif";
function Spinner(propSpinner) {
    return (
        <div className="text-center">
            <img src={loading} className="my-3" alt="loading" />
        </div>
    )
}

export default Spinner