import React, { useState } from 'react'
import "../styling/MobileNavbarStyling.css"
import MobileSidebar from './MobileSidebar'
import menuLight from '../images/menuLight.png'
import menuDark from '../images/menuDark.png'
function MobileNavbar(props) {
    const [toggled, setToggled] = useState(false);
    return (
        <>
            <div className='fixed-top' style={{ zIndex: '11' }}>
                <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <div className="justify-content-start align-items-center" style={{ display:'flex',width: "fit-content"}}>
                            <main style={{ display: 'flex', padding: 10, minHeight: 'fit-content' }}>
                                <div>
                                    <button className="sb-button" onClick={() => setToggled(!toggled)}>
                                        {props.mode==='light'&&<img src={menuDark} alt="" width="30" height="30" />}
                                        {props.mode==='dark'&&<img src={menuLight} alt="" width="30" height="30" />}
                                    </button>
                                </div>
                            </main>
                            <a className="navbar-brand" href="/" >Navbar</a>
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
            <MobileSidebar mode={props.mode} setMode={props.setMode} setToggled={setToggled} toggled={toggled}/>
        </>
    )
}
export default MobileNavbar