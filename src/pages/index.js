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
import july22 from "../images/july22.jpeg"

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
            <h3 className={indexStyles.postauthor}>Jason Fraley</h3>
            <h1 className={indexStyles.posttitle}>This is Awkward</h1>
          <p className={indexStyles.posttext}>        
This is my fourth trip to space this year.  I keep forgetting my mission, which is to rescue God from a windowless, brilliant corridor.  We need more than echoes but less than song.  I blame the constant white flashes: the spacecraft, my suit, the moon, the swirling galaxies.  Everything beautiful is the color of erasure.  We have not gone out far enough.  Blue bruises pierce the Earth’s cloudy gauze.  The sun is not some nameless pinprick of a star.  I keep myself occupied with synonyms: ivory, ecru, alabaster, snowflake, cream.  The commander asks us to prepare for reentry.  I press bright buttons, initiate the protocol.  I pull a small package from my pocket.  I tear it open, and the pill floats behind a ductwork crevice.  The crew looks askance at me.  I should have stayed awake during training.  I thought returning was the worst-case scenario.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Jason Fraley is a native West Virginian who lives, works, and periodically writes in Columbus, OH. Current and prior publications include <i>Salamander Magazine, Barrow Street, Pithead Chapel, Yalobusha Review, The Journal,</i> and <i>Okay Donkey</i>.
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
