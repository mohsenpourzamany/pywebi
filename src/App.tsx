import { Route , Routes , BrowserRouter } from 'react-router-dom'
import TopMenu from './header/TopMenu'
import Footer from './footer/Footer'
import ScrollToTop from "react-scroll-to-top"
import Spiner from './components/Spiner'
import { useState , useEffect} from 'react'
import About from './pages/About'
import Navbar from './header/Navbar'
import Home from './pages/Home'
function App() {
  const[loading , setLoading] = useState(false)

  useEffect(()=>{
    getData();
  },[])

  const getData = () =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
    };

  return loading ? (
    <Spiner />
  ) :
  (
    <div className="App">
      <ScrollToTop />
      <BrowserRouter>
        <TopMenu />
        <Navbar />
        <Routes>
          <Route path='/'   element={<Home/>} />
          <Route path='/about'  element={<About/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
