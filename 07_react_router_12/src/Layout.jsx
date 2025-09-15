//4th step
// isko iss liye kar reha hai ki header footer same reha or baki cheeze change ho 
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//react-router-dom
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
    <Header />
    <br/>
    <Outlet/> {/*placeholder ki thara ha hota hai */} {/* jaha pe bhi outlet de diya waha cheese change ho gi  */}
    <br/>
    <Footer/>
    </>
  )
}

export default Layout