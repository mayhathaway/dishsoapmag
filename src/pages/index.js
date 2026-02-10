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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Matthew DeMarco</h3>
            <h1 className={indexStyles.posttitle}>Wake</h1>
          <p className={indexStyles.posttext}>        
   I wake and the world is slicker.
<br></br>Two slim powerlines in the backyard
<br></br>curve like subtle bows toward
<br></br>their tower, sharp black strings,
<br></br>glazed in the morning and stark
<br></br>against the sky’s bold and
<br></br>unencumbered bright white
<br></br>eye. Whether I know it
<br></br>or not, a small brown rabbit
<br></br>lolls on the dry earth beside
<br></br>our room. I wake and the day
<br></br>is a cabbage. I wake, and the day
<br></br>is waiting in the refrigerator,
<br></br>an array of crisp plants
<br></br>soon to be washed, shaved,
<br></br>trimmed, and simmered lovingly
<br></br>for hours in the slick broth
<br></br>of its own wet day. I pour
<br></br>my bare body into cloth,
<br></br>arrange the deep old fabrics
<br></br>of my personhood and step
<br></br>into the soft beige cushion
<br></br>that cradles the heel and ball
<br></br>of my existence. The ground,
<br></br>likewise, welcomes me. I wake,
<br></br>and during this prismatic day,
<br></br>I stoop, strain, observe:
<br></br>an accumulation of evidence
<br></br>I have not yet died.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Matthew DeMarco (he/they) lives in San Francisco. His work has appeared on Poets.org and in Sporklet, Glass, The McNeese Review, Okay Donkey, Heavy Feather Review, and elsewhere. His collaborations with Faizan Syed have been anthologized in They Said (Black Lawrence Press, 2018). Find him on BlueSky @m-demarco-words.bsky.social.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
