import React from 'react'
import DesktopNabvar from "../components/DesktopNavbar"
import DesktopNews from '../components/DesktopNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import DesktopQuery from './DesktopQuery';

function Desktop(props) {
  const [progress, setProgress] = useState(0)
  const [desktopSearch, setDesktopSearch] = useState("")
    const handleDesktopSearch = (e) => {
        e.preventDefault();
        console.log("Query: "+desktopSearch);
    }

  return (
    <>
      <BrowserRouter>
        <DesktopNabvar setMode={props.setMode} toggleMode={props.toggleMode} mode={props.mode} desktopSearch={desktopSearch} handleDesktopSearch={handleDesktopSearch} setDesktopSearch={setDesktopSearch} />
        <LoadingBar 
        color="#d8eb34"
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress}key="general"  mode={props.mode}/>}/>
          <Route exact path="/buisness" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key="buisness" category={"business"} mode={props.mode}/>}/>
          <Route exact path="/sports" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key="sports" category={"sports"} mode={props.mode}/>}/>
          <Route exact path="/entertainment" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key="entertainment" category={"entertainment"} mode={props.mode}/>}/>
          <Route exact path="/health" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key="health" category={"health"} mode={props.mode}/>}/>
          <Route exact path="/science" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key="science" category={"science"} mode={props.mode}/>}/>
          <Route exact path="/technology" element={<DesktopNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress}key="technology" category={"technology"} mode={props.mode}/>}/>
          <Route exact path={`/${desktopSearch}`} element={<DesktopQuery apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key={desktopSearch} desktopSearch={desktopSearch} mode={props.mode}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Desktop