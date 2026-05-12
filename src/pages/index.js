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
            <h3 className={indexStyles.postauthor}>K.M. Hanslik</h3>
            <h1 className={indexStyles.posttitle}>blue body</h1>
          <p className={indexStyles.posttext}>        
My anger and the weekends promise
<br></br>me a justice they cannot deliver. I try
<br></br>to consider them with a shade of hope,
<br></br>hope like corals, like lake beds, the shark’s
<br></br>great fin. I dream an endless watery dream
<br></br>of wandering: ocean gulleys I might explore,
<br></br>shining stones I might gather. Some days
<br></br>I forget I’m un-gilled, flirt with drowning.
<br></br>Dream of a place where there’s enough
<br></br>blue to hide my dense body. I want
<br></br>to become shallow as a creek, vacant
<br></br>enough to fill with clay. Instead I watch
<br></br>the deep sky-filled pond as dusk settles 
<br></br>upon it, the moon soaring to cast her
<br></br>hazy shadows. She does not know what night 
<br></br>it is, only that she must keep rising. 

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    K.M. Hanslik is an Ohio-based writer and editor. Her work explores bodies as landscapes, full of life and untold stories, and seeks to find the extraordinary in the mundane. When she's not writing, she enjoys long hikes and exploring new places. You can find her on Bluesky (<a href="https://bsky.app/profile/kmhanslik.bsky.social">@kmhanslik.bsky.social</a>), or read more on her website: <a href="https://kmhanslik.com">kmhanslik.com</a>.  </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
