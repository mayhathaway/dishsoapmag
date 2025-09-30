import React from "react"

import layoutStyles from "../components/layout.module.scss"
import { Link } from "gatsby"
import Head from "../components/head"
import Subheader from "../components/subHeader"
import Nav from "../components/nav"
import aboutStyles from "./about.module.scss"
import Footer from "../components/footer"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soaphead from "../images/soaphead.png"

const AboutPage = () => {
  return (
    <>
    <MobileNav />
      <Nav />
      <Subheader title="dishsoap quarterly" />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Head title="about" />
          <div className={aboutStyles.mission}>
            <p>
             <strong>dish soap</strong> /ˈdɪʃ ˌsoʊp/ (noun) </p> 
            <p>a thick liquid that is often blue, white, or green. found in or near sinks. used for 
            cleaning dishes and other things commonly found in kitchens like pots, pans, fish spatulas, 
            egg cubers, shrimp deveiners, condiment guns, and corn peelers.
            </p>
            <p><strong>dishsoap</strong> /ˈdɪʃˌsoʊp/ (noun) </p>
            <p> a nerdy, uncool, earnest magazine that wouldn’t wait three days to call you if it got your 
              number. that's quarterly in the sense that a week is a quarter of a month. that’s easily excitable. that can’t 
              wait to see what you’ve been working on.</p>
          </div>
          <div className={aboutStyles.masthead}>
            <Link to="/masthead">Get to know our staff here!!</Link>
          </div>
          <div className={aboutStyles.masthead}>
           <a href="https://docs.google.com/forms/d/e/1FAIpQLScCDdgzz8w4aiWDV7Ou3MrOlXhtKaj2B9hgsIedtLsH56ZPPw/viewform?usp=dialog"> Join our email list! </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
