import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"
import instagram from "../images/instagram.jpg"
import twitter from "../images/twitter.jpg"
import email from "../images/email.jpg"
import chillsubs from "../images/cs.png"
import bsky from "../images/bsky.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.split}>
        <p className={footerStyles.footerTitle}>
          {data.site.siteMetadata.title} @2025
        </p>
        <p>Website created by Jeremy Nguyen</p>
      </div>
      <div className={footerStyles.split}>
      <a href="https://www.chillsubs.com/magazine/dishsoap-quarterly"><img src={chillsubs} alt="website logo" /></a>
        <a href="https://www.instagram.com/dishsoap.quarterly/"><img src={instagram} alt="website logo" /></a>
        <a href="https://twitter.com/dishsoapquart"><img src={twitter} alt="website logo" /></a>
        <a href="https://bsky.app/profile/dishsoapquart.bsky.social"><img src={bsky} alt="website logo" /></a>
        <a href="mailto:dishsoap.mag@gmail.com"><img src={email} alt="website logo" /></a>
      </div>
    </footer>
  )
}

export default Footer
