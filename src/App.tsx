import { Route , Routes , BrowserRouter } from 'react-router-dom'
import TopMenu from './header/TopMenu'
import Footer from './footer/Footer'
import ScrollToTop from "react-scroll-to-top"
import Spiner from './components/Spiner'
import { useState , useEffect} from 'react'
import Navbar from './header/Navbar'
import Home from './pages/Home'
import '../js/main.js';
import AboutPage from './mainPage/AboutPage'
import ServicesPage from './mainPage/ServicesPage'
import BlogGridPage from './mainPage/BlogGridPage'
import BlogDetails from './mainPage/BlogDetails'
import PricePage from './mainPage/PricePage'
import FeaturesPage from './mainPage/FeaturesPage'
import TeamPage from './mainPage/TeamPage'
import TestmonialPage from './mainPage/TestmonialPage'
import QoutePage from './mainPage/QoutePage'
import ContactPage from './mainPage/ContactPage'


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
          <Route path='/about'  element={<AboutPage/>} />
          <Route path='/services'  element={<ServicesPage/>} />
          <Route path='/bloggrid'  element={<BlogGridPage/>} />
          <Route path='/blogdetail'  element={<BlogDetails/>} />
          <Route path='/priceplan'  element={<PricePage/>} />
          <Route path='/features'  element={<FeaturesPage/>} />
          <Route path='/team'  element={<TeamPage/>} />
          <Route path='/testmonial'  element={<TestmonialPage/>} />
          <Route path='/qoute'  element={<QoutePage/>} />
          <Route path='/contact'  element={<ContactPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
