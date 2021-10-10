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
      <Subheader title="issue three" />
      <Layout>
        <Head title="issues" />
        <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <h2>sunny vuong</h2>
              <Link to="/issue3/frankievalli">
                <p>Frankie Valli’s in love with you</p>
              </Link>
              <h2>sal kang</h2>
              <Link to="/issue3/sonnetforbirdsofparadise">
                <p>sonnet for birds of paradise</p>
              </Link>
              <h2>josephine wu</h2>
              <Link to="/issue3/waterprayers">
                <p>Water Prayers</p>
              </Link>
              <h2>ashley hajimirsadeghi</h2>
              <Link to="/issue3/alternateuniverse">
                <p>IN AN ALTERNATE UNIVERSE WE EAT CAKE</p>
              </Link>

            </div>

            <div className={issueStyles.bottomMargin}>
            <h2>sal kang</h2>
              <Link to="/issue3/theorange">
                <p>The Orange Has Body Image Issues</p>
              </Link>
            <h2>ds maolalai</h2>
              <Link to="/issue3/theleavesaregreen">
                <p>And the leaves are green</p>
              </Link>
            <h2>ashley hajimirsadeghii</h2>
              <Link to="/issue3/besweet">
                <p>Be Sweet</p>
              </Link>

            </div>
          </div>

          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <h2>salonee verma</h2>
              <Link to="/issue3/tobeclear">
                <p>To Be Clear: A Femme Fatale (Gender-Neutral!) Guides You Through A Noir Film in Bollywood (First Of Its Kind! Tickets Open Now!)</p>
              </Link>

            </div>
            <div>

              <h2>dedeepya guthikonda</h2>
              <Link to="/issue3/hirasdaycare">
                <p>Mrs. Hira's Daycare</p>
              </Link>

            </div>
          </div>

          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue3/darcymariemelton">
                <h2>darcy marie melton</h2>
                <p>Kingfisher</p>
              </Link>
              <Link to="/issue3/bidingtime">
                <h2>grace joylynn anderson</h2>
                <p>biding time until the spring arrives</p>
              </Link>
            </div>
            <div>
            <Link to="/issue3/melodyserra">
                <h2>melody serra</h2>
                <p>In the company of trees</p>
              </Link>
          </div>
        </div>
        </div>
      </Layout>
    </>
  )
}

export default Issues
