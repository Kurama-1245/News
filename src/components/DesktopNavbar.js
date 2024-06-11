import React from 'react'
import { Link } from "react-router-dom";
function DesktopNavbar(props) {
    
    return (
        <>
            <div className='fixed-top' style={{zIndex:'11'}}>
                <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid row">
                        <div className="col d-flex justify-content-start align-items-center">
                            <a className="navbar-brand" href="/">
                                <img src="" alt="Logo" width="30" height="24" />
                            </a>
                            <a className="navbar-brand" href="/" >Navbar</a>
                        </div>
                        <div className={`col-6 align-items-center bg-${props.mode === "light" ? "light" : "dark"}`}>
                            <form className="d-flex">
                                <input className="form-control me-2" onplaceholder="Search" aria-label="Search" name="desktopSearch" value={props.desktopSearch} onChange={(e)=>props.setDesktopSearch(e.target.value)}/>
                                {/* <button className={`btn btn-outline-success text-${props.mode === "light" ? "dark" : "light"}`} onClick={props.handleDesktopSearch}>Search</button> */}
                                <Link type = 'submit' className={`btn btn-outline-success text-${props.mode === "light" ? "dark" : "light"}`} 
                                // onClick={props.handleDesktopSearch} 
                                to={`/${props.desktopSearch}`}>Search</Link>
                            </form>
                        </div>
                        <div className='col d-flex justify-content-end align-items-center'>
                            <div className="btn-group">
                                <button type="button" className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                                    Help
                                </button>
                                <ul className={`dropdown-menu dropdown-menu-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                    <li><a className="dropdown-item" href="/">Language</a></li>
                                    <li><a className="dropdown-item" href="/">Region</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="/">About</a></li>
                                </ul>
                            </div>
                            &nbsp;
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "dark" ? "Enable LightMode" : "Enable DarkMode"}</label>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'#EAEAEA'}}>
                    <div className="container d-flex justify-content-evenly ">
                        <strong><Link className="nav-link" style={{ color: "black" }} to="/Buisness">Buisness</Link></strong>
                        <strong><Link className="nav-link" style={{ color: "black" }} to="/Entertainment">Entertainment</Link></strong>
                        <strong><Link className="nav-link" style={{ color: "black" }} to="/Health">Health</Link></strong>
                        <strong><Link className="nav-link" style={{ color: "black" }} to="/Science">Science</Link></strong>
                        <strong><Link className="nav-link" style={{ color: "black" }} to="/Sports">Sports</Link></strong>
                        <strong><Link className="nav-link" style={{ color: "black" }} to="/Technology">Technology</Link></strong>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default DesktopNavbar