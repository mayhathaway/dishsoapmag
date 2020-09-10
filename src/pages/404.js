import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"


const NotFound = () => {
  return (
    <>
    <MobileNav />
    <Nav />
    <Layout>
      <Head title="Page Not Found" />
      <h1>Page not found</h1>
      <p><Link to="/">Head home</Link></p>  
    </Layout>
    </>
  )
}

export default NotFound