import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import anaphora from "../images/anaphora.jpeg"
import soaphead from "../images/soaphead.png"
import layoutStyles from "../components/layout.module.scss"
import aboutStyles from "./about.module.scss"

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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab
  return (
    <div>
      <Head title="home"/>
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Katherine Oung</h3>
            <h1 className={indexStyles.posttitle}>PRAYER TO SAINT MICHAEL</h1>
          <p className={indexStyles.posttext}>
          I lost my keys.
<br></br>I lost my keys.
<br></br>I lost my bright
<br></br>pink hoodie.
<br></br>I lost my earbuds.
<br></br>I lost my AirPods.
<br></br>I lost a bunch of
<br></br>important receipts.
<br></br>I lost my goggles,
<br></br>my glasses, left my
<br></br>backpack at the
<br></br>airport terminal.
<br></br>Lost my phone,
<br></br>my photos, my
<br></br>charger, my wallet
<br></br>on the bus, my
<br></br>keys, my keys
<br></br>my keys, so many
<br></br>times my girlfriend
<br></br>recommended
<br></br>that maybe I needed
<br></br>to talk to a Saint, <i>he</i>
<br></br><i>doesn’t care if</i>
<br></br><i>you’re Catholic,</i>
<br></br><i>really</i>. Nights when
<br></br>I remembered,
<br></br>I gave myself
<br></br>three wishes.
<br></br>Prayers in order
<br></br>of how much
<br></br>I wanted each.
<br></br>Two for myself,
<br></br>the last saved for
<br></br>war to end, but
<br></br>God, but, man,
<br></br>but Michael,
<br></br><i>I lost so much</i>
<br></br><i>shit, I forgot</i>
<br></br><i>what I lost,</i> even.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
           Katherine Oung is a queer, Chinese American writer. They daylight as a journalist and moonlight as a creative writer. They are interested in rhythm, translation, and transformation.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
