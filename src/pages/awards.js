import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import MobileNav from "../components/mobileNav"
import issueStyles from "./issues.module.scss"
import { Link } from "gatsby"
import archiveStyles from "./archive.module.scss"
import indexStyles from "./index.module.scss" 
import soaphead from "../images/soaphead.png"
import contactStyles from "./contact.module.scss"
import MobileNav from "../components/mobileNav"


const AwardsPage = () => {
  return (
    <>
    <MobileNav />
      <Nav />
      <Subheader title="dishsoap quarterly" />
    <h1 className={issueStyles.heading}>Title Here</h1>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Head title="contact" />
          <div className={contactStyles.mission}>
           Add text here
          </div>
          <div className={contactStyles.masthead}>
            <Link>add new link</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AwardsPage





