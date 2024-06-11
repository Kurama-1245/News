import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import MobileNews from '../components/MobileNews'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import MobileQuery from './MobileQuery'



function Mobile(props) {
  const [progress, setProgress] = useState(0)
  const [mobileSearch, setMobileSearch] = useState("")
  const handleMobileSearch = (e) => {
      e.preventDefault();
      console.log("Query: "+mobileSearch);
  }
  return (
    <>  
    <BrowserRouter>
        <MobileNavbar setMode={props.setMode} toggleMode={props.toggleMode} mode={props.mode} mobileSearch={mobileSearch} handleMobileSearch={handleMobileSearch} setMobileSearch={setMobileSearch}/>
        <LoadingBar color="#d8eb34" progress={progress}/>
        <Routes>
          <Route exact path='/' element={<MobileNews pageSize={props.pageSize} apiKey={props.apiKey} progress={progress} setProgress={setProgress} key="general" />}/>
          <Route exact path='/business' element={<MobileNews pageSize={props.pageSize} apiKey={props.apiKey} progress={progress} setProgress={setProgress} key="business" category={'business'}/>}/>
          <Route exact path='/sports' element={<MobileNews pageSize={props.pageSize} apiKey={props.apiKey} progress={progress} setProgress={setProgress} key="sports" category={'sports'}/>}/>
          <Route exact path='/entertainment' element={<MobileNews pageSize={props.pageSize} apiKey={props.apiKey} progress={progress} setProgress={setProgress} key="entertainment" category={'entertainment'}/>}/>
          <Route exact path='/health' element={<MobileNews pageSize={props.pageSize} apiKey={props.apiKey} progress={progress} setProgress={setProgress} key="health" category={'health'}/>}/>
          <Route exact path='/science' element={<MobileNews pageSize={props.pageSize} apiKey={props.apiKey} progress={progress} setProgress={setProgress} key="science" category={'science'}/>}/>
          <Route exact path="/technology" element={<MobileNews apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key="technology" category={"technology"}/>}/>
          <Route exact path={`/${mobileSearch}`} element={<MobileQuery apikey={props.apiKey} pageSize={props.pageSize} progress={progress} setProgress={setProgress} key={mobileSearch} />}/>

        </Routes>        
    </BrowserRouter>
    </>
  )
}

export default Mobile