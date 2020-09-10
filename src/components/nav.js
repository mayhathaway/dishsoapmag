import React from "react"
import { Link } from "gatsby"

import navStyles from "./nav.module.scss"

const Nav = () => {
  return (
    <header className={navStyles.header}>
      <nav>
        <ul className={navStyles.navList}>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/masthead"
            >
              masthead
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/blog"
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/issues"
            >
              issues
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/submissions"
            >
              submit
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/contact"
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              to="/archive"
            >
              archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
