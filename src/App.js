import './App.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


function App() {
  const [mode, setMode] = useState("dark")
  const [width, setWidth] = useState(window.innerWidth)
  const pageSize = 15
  const apiKey = '813b62e2b3394673aa74162d7c28bcab'
  TimeAgo.addDefaultLocale(en)
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
    return () => {
      window.addEventListener('resize', handleWindowResize)
    }
  }, [width])
  // eslint-disable-next-line

  const isMobile = useMediaQuery({ query: '(max-width:1200px)' })
  const isDesktop = useMediaQuery({ query: '(min-width:1201px)' })

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode("light")
    }
  }
  return (
    <>
      {isMobile && <Mobile apikey={apiKey} pageSize = {pageSize} setMode={setMode} toggleMode={toggleMode} mode={mode}/>}
      {isDesktop && <Desktop apikey={apiKey} pageSize = {pageSize} setMode={setMode} toggleMode={toggleMode} mode={mode}/>}
    </>
  );
}

export default App;
