import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Error from './pages/Error'
import About from './pages/About'

import ProductViewModal from './components/ProductViewModal'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/catalog/:slug' element={<Product />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
      <ProductViewModal />
    </BrowserRouter>
  )
}

export default App
