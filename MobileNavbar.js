import React, { useState } from 'react'
import "../styling/MobileNavbarStyling.css"
import MobileSidebar from './MobileSidebar'
function MobileNavbar(props) {
    const [toggled, setToggled] = useState(false);

    return (
        <>
            <div className='fixed-top' style={{ zIndex: '10' }}>
                <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <div className="justify-content-start align-items-center" style={{ width: "fit-content"}}>
                            <main style={{ display: 'flex', padding: 10, minHeight: 'fit-content' }}>
                                <div>
                                    <button className="sb-button" onClick={() => setToggled(!toggled)}>
                                        Toggle
                                    </button>
                                </div>
                            </main>
                        </div>
                        <div className="search-container">
                            <form action="/search" method="get">
                                <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search" />
                                <label className="button searchbutton" htmlFor="searchright"><span className="mglass">&#9906;</span></label>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <MobileSidebar setToggled={setToggled} toggled={toggled}/>
        </>
    )
}
export default MobileNavbar