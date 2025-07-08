import React from "react"

import layoutStyles from "../components/layout.module.scss"
import { Link } from "gatsby"
import Head from "../components/head"
import Subheader from "../components/subHeader"
import Nav from "../components/nav"
import aboutStyles from "./about.module.scss"
import Footer from "../components/footer"
import MobileNav from "../components/mobileNav"


const AboutPage = () => {
  return (
    <>
    <MobileNav />
      <Nav />
      <Subheader title="dishsoap quarterly" />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Head title="about" />
          <div className={aboutStyles.pinkLineTop}></div>
          <div className={aboutStyles.mission}>
            <p>
             <strong>dishsoap</strong> /ˈdɪʃ ˌsoʊp/ (noun) </p> 
            <p>a thick liquid that is often blue, white, or green. found in or near sinks. used for 
            cleaning dishes and other things commonly found in kitchens like pots, pans, fish spatulas, 
            egg cubers, shrimp deveiners, condiment guns, and corn peelers.
            </p>
            <p><strong>dishsoap</strong> /ˈdɪʃˌsoʊp/ (noun) </p>
            <p> a nerdy, uncool, earnest magazine that wouldn’t wait three days to call you if it got your 
              number. that's quarterly in the sense that a week is a quarter of a month. that’s easily excitable. that can’t 
              wait to see what you’ve been working on.</p>
          </div>
          <div className={aboutStyles.pinkLineBottom}></div>
        </div>
      </div>
      <div className={aboutStyles.masthead}>
        <Link to="/masthead">get to know our staff here!</Link>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
