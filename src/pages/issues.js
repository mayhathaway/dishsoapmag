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

              <h2>elliot lee</h2>
              <Link to="/issue4/to-term">
                <p>to term</p>
              </Link>

              <h2>daniel boyko</h2>
              <Link to="/issue4/to-my-future-nephew">
                <p>To My Future Nephew II</p>
              </Link>

              <h2>anna feng</h2>
              <Link to="/issue4/a-page-from-her-book">
                <p>a page from her book</p>
              </Link>
            </div>


            <div className={issueStyles.bottomMargin}>

              <h2>matt hsu</h2>
              <Link to="/issue4/32lemons">
                <p>32 lemons</p>
              </Link>
            
              <h2>courtney felle</h2>
              <Link to="/issue4/teens-on-tiktok">
                <p>teens on tiktok think i should set boundaries but i am</p>
              </Link>

              <h2>leela raj-sankar</h2>
              <Link to="/issue4/the-world-is-ending-and-i-am-buying-groceries">
                <p>The World Is Ending And I Am Buying Groceries</p>
              </Link>

            </div>
          </div>

          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <h2>will musgrove</h2>
              <Link to="/issue4/lawn-chair-larry">
                <p>Lawn Chair Larry</p>
              </Link>

              <h2>nora sun</h2>
              <Link to="/issue4/absurdum">
                <p>Absurdum</p>
              </Link>

            </div>
            <div>

              <h2>ashley gilland</h2>
              <Link to="/issue4/the-chocolatier">
                <p>The Chocolatier</p>
              </Link>

              <h2>E.J. Nash</h2>
              <Link to="/issue4/henry-wilson">
                <p>Henry Wilson and the Center of the Sun</p>
              </Link>

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Issues
