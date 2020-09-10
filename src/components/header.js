import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.title} to="/">
        <h1 className={headerStyles.heading1}>dishsoap</h1>
        <br />
        <h1 className={headerStyles.heading2}>quarterly</h1>
      </Link>
    </header>
  )
}

export default Header
