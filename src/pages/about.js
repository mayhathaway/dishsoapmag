import React from "react"

import layoutStyles from "../components/layout.module.scss"
import { Link } from "gatsby"
import Head from "../components/head"
import Subheader from "../components/subHeader"
import Nav from "../components/nav"
import aboutStyles from "./about.module.scss"
import Footer from "../components/footer"
import contactStyles from "./contact.module.scss"
import indexStyles from "./index.module.scss"
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
             <strong>dish soap</strong> /ˈdɪʃ ˌsoʊp/ (noun) </p> 
            <p>a thick liquid that is often blue, white, or green. found in or near sinks. used for 
            cleaning dishes and other things commonly found in kitchens like pots, pans, fish spatulas, 
            egg cubers, shrimp deveiners, condiment guns, and corn peelers.
            </p>
            <p><strong>dishsoap</strong> /ˈdɪʃˌsoʊp/ (noun) </p>
            <p> a nerdy, uncool, earnest magazine that wouldn’t wait three days to call you if it got your 
              number. that’s too bad at math to care about measuring accolades against one another. 
              that doesn’t have a type beyond times new roman or maybe garamond. that’s easily excitable. that can’t 
              wait to see what you’ve been working on.</p>
          </div>
          <div className={aboutStyles.pinkLineBottom}></div>
          <div className={contactStyles.contactForm}>
          <form
            name="contact"
            action="https://getform.io/f/cb6e4ffc-0488-48df-b781-140e620b3fa5"
            method="POST"
          >
            <div className={contactStyles.formContainer}>
              <div className={contactStyles.side}>
                <label>
                  <p>email*</p>{" "}
                  <input
                    type="email"
                    name="email"
                    placeholder="soapluvr@gmail.com"
                  />
                </label>
              </div>
              <div className={contactStyles.side}>
                <label>
                  <p>full name*</p>{" "}
                  <input type="text" name="name" placeholder="Soapy McSoapface" />
                </label>
              </div>
            </div>
            <div>
              <label>
                <p>type your message here...</p>{" "}
                <textarea
                  placeholder="I love dumping copious amounts of dish soap on..."
                  name="message"
                  className={contactStyles.boxsizingBorder}
                ></textarea>
              </label>
            </div>
            <div>
              <button type="submit" className={indexStyles.button}>
                contact!
              </button>
            </div>
          </form>
        </div>
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
