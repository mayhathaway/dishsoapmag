import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import Subheader from "../components/subHeader"
import layoutStyles from "../components/layout.module.scss"
import issueStyles from "./issues.module.scss"

const Issues = () => {
  return (
    <>
      <MobileNav />
      <Nav />
      <Subheader title="issue four" />
      <Layout>
        <Head title="issues" />
        <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <h2>howie good</h2>
              <Link to="/issue5/the-anxiety-index">
                <p>The Anxiety Index</p>
              </Link>

              <h2>jeffrey letterly</h2>
              <Link to="/issue5/swirling">
                <p>Swirling</p>
              </Link>

              <h2>howie good</h2>
              <Link to="/issue5/the-day-before-yesterday">
                <p>The Day Before Yesterday</p>
              </Link>
            </div>


            <div className={issueStyles.bottomMargin}>

              <h2>nathan lee</h2>
              <Link to="/issue5/spring-meditation">
                <p>spring meditation</p>
              </Link>
            
              <h2>ashley kim</h2>
              <Link to="/issue5/mom-and-dad">
                <p>Mom and Dad</p>
              </Link>

              <h2>julieanne larick</h2>
              <Link to="/issue5/the-anxious-girlfriends-unruly-skeletons">
                <p>The Anxious Girlfriend's Unruly Skeletons</p>
              </Link>

            </div>
          </div>

          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <h2>theresa kohlbeck jakobsen</h2>
              <Link to="/issue5/skilnadarotti">
                <p>skilnadarótti</p>
              </Link>

            </div>
            <div>

              <h2>james diaz</h2>
              <Link to="/issue5/words-get-in-the-way">
                <p>Words Get In The Way</p>
              </Link>

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Issues
