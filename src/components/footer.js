import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

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
      <div className="footer__left">
        <p className={footerStyles.footerTitle}>
          {data.site.siteMetadata.title}
        </p>
        <svg
          width="365"
          height="11"
          viewBox="0 0 365 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="365" height="11" fill="#555252" />
        </svg>
        <p> © 2020</p>
      </div>
      <div className="footer__right">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/masthead">masthead</Link>
          </li>
          <li>
            <Link to="/submissions">submissions</Link>
          </li>
          <li>
            <Link to="/archive">archive</Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Dishsoap-Quarterly-105658327855909"
              target="_blank"
              rel="noreferrer"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dishsoap.quarterly/"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dishsoapquart"
              target="_blank"
              rel="noreferrer"
            >
              twitter
            </a>
          </li>
          <li>
            <Link to="/contact">contact form</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
