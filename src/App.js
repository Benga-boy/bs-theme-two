import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/common/Footer'
import NavbarTop from './components/common/Navbar'
import About from './components/pages/About'
import Authors from './components/pages/Authors'
import Boxes from './components/pages/Boxes'
import Contact from './components/pages/Contact'
import Newsletter from './components/pages/Newsletter'
import Showcase from './components/pages/Showcase'

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Fragment>
        <Showcase />
        <Newsletter />
        <Boxes />
        <About />
        <Authors />
        <Contact />
      </Fragment>
      <Footer />
    </BrowserRouter>
  )
}

export default App
