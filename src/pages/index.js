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
            <h3 className={indexStyles.postauthor}>Joanna Theiss</h3>
            <h1 className={indexStyles.posttitle}>Your Dead Father on the Train from Babylon</h1>
          <p className={indexStyles.posttext}>        
Looks the same as he did when you stopped by his house on your way to the train station and he handed you a cup of instant coffee turned gray from powdered milk. Same hair combed over the thinning place. Same burgundy sweater you bought him at Costco because he didn’t like to turn on the heat until November, fretting over the cost of this and that like he could take it with him, same as ever. 
<br></br>
<br></br>You’re blocking the other passengers but you don’t move, you don’t sip from your paper cup of station coffee because your father whose ashes you dropped into the Atlantic Ocean is gazing out the window at leafless trees and trash mantled on fences, your father whose heart stalled while he was alone in his unheated bedroom is contemplating Long Island Rail Road towns, stoplights and dry cleaners and broken-down cars on lifts. 
<br></br>
<br></br><i>Dad</i>, you say. <i>Hey</i>. 
<br></br>
<br></br>Your father looks up at you, a blurred anxiety passing over his soft brown eyes. The look says you’ve caught him, not dead, but on Long Island, on this train, commuting with the living. The woman behind you jostles your elbow yet you don’t move. This moment won’t happen again. You need to make it count, to make it worth something. 
<br></br>
<br></br>So you offer your paper cup to him. You hold your paper cup of coffee above your father’s lap. You jiggle the cup a few inches from his chin. 
<br></br>
<br></br>Your dead father on the train from Babylon pretends you are a stranger. He pretends not to need anything from you. But when you insist, when you tell him it is free, this offering from our world to his, your dead father reaches for the cup, just the same.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Joanna Theiss (she/her) is a former lawyer living in Washington, DC. Her fiction and poetry have appeared in The Penn Review, Chautauqua, Peatsmoke Journal, Milk Candy Review, and Best Microfiction, among others. You can find links to her published works and her mosaic collages at <a href="https://www.joannatheiss.com"> www.joannatheiss.com</a>. Bluesky: <a href="https://bsky.app/profile/joannatheiss.com"> bsky.app/joannatheiss.com</a>.
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
