import React from 'react'
import Header from './header/Header'
import MenuBar from './header/MenuBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <MenuBar/>
    <Outlet/>
    </>
  )
}

export default RootLayout