import React from 'react'
import Header from '../Header/Header'
import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'
import Highlights from '../Highlights/Highlights'

const Layout = () => {
  return (
    <>
   <Header/>
      <Routers/>
      <Highlights />
      <Footer/>
    </>
  )
}

export default Layout
