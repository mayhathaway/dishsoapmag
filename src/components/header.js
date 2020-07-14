import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
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
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <svg
          width="206"
          height="12"
          viewBox="0 0 206 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="206" height="12" fill="#093631" />
        </svg>
    </header>
  )
}

export default Header
