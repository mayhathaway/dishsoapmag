import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soaphead from "../images/soaphead.png"
import layoutStyles from "../components/layout.module.scss"
import aboutStyles from "./about.module.scss"
import mar10 from "../images/mar10.jpeg"
import sept15 from "../images/sept15/jpeg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 4
      ) {
        edges {
          node {
            title
            slug
            thumbnail {
              title
              resize(width: 290, height: 165) {
                src
              }
            }
          }
        }
      }
    }
  `)

  // if just putting &nbsp; doesn't work, use <span>&nbsp;</span>
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)/
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Keith Woodruff</h3>
            <h1 className={indexStyles.posttitle}>Green Music</h1>
          <p className={indexStyles.posttext}>        
<picture> <img height src={sept15}/> </picture>
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Keith Woodruff lives in San Antonio, TX with a backyard full of moody tomato plants. His poetry has appeared in Sundog Lit, Rawhead, New World Writing Quarterly and Bear Review. His flash/micro appeared in lovely places like Wigleaf, Does it Have Pockets?, HAD, Pithead Chapel, FlashFlood, Roi Faineant Press and is forthcoming in Your Impossible Voice. Read him in BSF 2017 and 2019. He was awarded a 2018 Pushcart prize. <a href="https://www.keithawoodruff.com">www.keithawoodruff.com</a>. @keithwoodruff.bsky.social.
</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
