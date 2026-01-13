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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Daniel Kim</h3>
            <h1 className={indexStyles.posttitle}>Cargo</h1>
          <p className={indexStyles.posttext}>        
    McCarren park at night is plaid with cardboard,
<br></br>seltzer, orange peels, a baseball field, white
<br></br>from floodlights glancing off the players’ faces
<br></br>like planets. At the liquor store I ask
<br></br>for Snow Chrysanthemum, a crisp kombucha
<br></br>that sold out months ago. Leaves become wax
<br></br>on the brownstone stoops. A planter holds a small
<br></br>catalpa, leaves like whole tongues, a teenage
<br></br>growth spurt. The record store is a fudge
<br></br>of stock as dense as the Bronx interchange
<br></br>that madly shoots around in somersaults
<br></br>until the cars fall out. A train flicks on
<br></br>in a rail yard, suddenly not junk, muscles
<br></br>convulsing the way a horse bunches up inside.
<br></br>It was the moment The Smashing Pumpkins
<br></br>pushed sound through sandpaper, the moment
<br></br>shipping containers as pretty as baguettes
<br></br>fused into a city of gift wrap. By dawn
<br></br>the moon floats around the faint port, wet
<br></br>and peeling. I could ladle it out of the morning.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Daniel is a sophomore at Johns Hopkins University. He knows Hudson Valley winters and Disney Renaissance trivia.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
