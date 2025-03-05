import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import ImageSlider from './components/ImagesSlider.jsx'
import Login from './components/Login.jsx'
// import CartListProvider from './Context/CartList.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
        <BrowserRouter>

          <Routes>
        <Route path='/' element={<App/>}>
        <Route path='/' element={<> <ImageSlider/> <Products/> </>}/>
        <Route path='/product-detail/:id' element={ <ProductDetail />} />
        </Route>
        <Route path='/Login' element={<Login/>}/>
       </Routes>
        </BrowserRouter>

      
    
  </StrictMode>,
)

