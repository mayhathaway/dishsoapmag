import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import MobileNav from "../components/mobileNav"


const Masthead = () => {
  return (
    <>
    <MobileNav />
    <Nav />
    <Subheader title="dish museum" />
    <Layout>
      <Head title="archive" />
      <div className={layoutStyles.mission}>
        We're fresh and new, so we haven't shelved any dishes just yet. Come back here later in the year!
      </div>
    </Layout>
    </>
  )
}

export default Masthead
