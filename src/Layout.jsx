import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const Layout = ({adnan}) => {

  return (
    <div>
    <Header/>
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout