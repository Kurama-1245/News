import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";


function MobileSidebar(props) {

  const closeSideBar = () => {
    props.setToggled(false)
  }

  const setDarkMode = () => {
    closeSideBar();
    setTimeout(() => {
      props.setMode('dark')
    }, 100);
  }

  const setLightMode = () => {
    closeSideBar();
    setTimeout(() => {
      props.setMode('light')
    }, 100);
  }

    return (
      <>
        <div style={{ display: 'flex', height: '100%', minHeight: 'fit-content' }}>
          <Sidebar style={{ marginTop: '75px' }} onBackdropClick={() => props.setToggled(false)} toggled={props.toggled} breakPoint="all">
            <Menu>
              <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/">Home</Link></MenuItem>
              <SubMenu defaultOpen label="Categories">
                <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/Business">Business</Link></MenuItem>
                <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/Entertainment">Entertainment</Link></MenuItem>
                <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/Health">Health</Link></MenuItem>
                <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/Science">Science</Link></MenuItem>
                <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/Sports">Sports</Link></MenuItem>
                <MenuItem><Link className="nav-link" onClick={closeSideBar} style={{ color: "black" }} to="/Technology">Technology</Link></MenuItem>
              </SubMenu>
              <SubMenu label="Theme">
                <MenuItem><div onClick={setLightMode}>Light Mode</div></MenuItem>
                <MenuItem><div onClick={setDarkMode}>Dark Mode</div></MenuItem>
              </SubMenu>
              <MenuItem> About</MenuItem>
            </Menu>
          </Sidebar>
        </div>
      </>
    )
  }

export default MobileSidebar