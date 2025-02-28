import Navbar from "./components/Layout/Navbar.jsx"
import Footer from "./components/Layout/Footer"
import { Outlet } from "react-router-dom"
import ImageSlider from "./components/ImagesSlider.jsx"

function App() {
  

  return (
    <>
   
    <Navbar/>
    <Outlet/>
    <Footer/>

  </>
  )
}

export default App
