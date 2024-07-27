import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"
import instagram from "../images/instagram.jpg"
import twitter from "../images/twitter.jpg"
import email from "../images/email.jpg"

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
          {data.site.siteMetadata.title}
        </p>
        <p> © 2021</p>
        <p>Website created by Jeremy Nguyen</p>
      </div>
      <div className={footerStyles.split}>
        <a href="https://www.instagram.com/dishsoap.quarterly/"><img src={instagram} alt="website logo" /></a>
        <a href="https://twitter.com/dishsoapquart"><img src={twitter} alt="website logo" /></a>
        <a href="mailto:dishsoap.mag@gmail.com"><img src={email} alt="website logo" /></a>
      </div>
    </footer>
  )
}

export default Footer
