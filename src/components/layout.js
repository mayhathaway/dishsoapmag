import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import Nav from "../components/nav"

const Layout = (props) => {
  return (
    
    <div className={layoutStyles.container}>
      <Nav />
      <Header />
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout