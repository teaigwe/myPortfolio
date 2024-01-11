
import Nav_bar from './components/Nav_bar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OnyiCo from './pages/OnyiCo'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          
        <Route path='/' element={ <Home/> }/>
        <Route path='About' element={ <About/> }/>
        <Route path='Portfolio' element={ <Portfolio/>}/>
        <Route path='Blog' element={ <Blog/> }/>
        <Route path='Contact' element={ <Contact/> }/>
        <Route path='Element' element={ <Element/> }/>
        <Route path='Footer' element={ <Footer/> }/>


        </Routes>
        </BrowserRouter>

    
    
   
   
    </>
  )
}

export default App
