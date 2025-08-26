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
            <h3 className={indexStyles.postauthor}>Ben Fowlkes</h3>
            <h1 className={indexStyles.posttitle}>Smoke</h1>
          <p className={indexStyles.posttext}>
   Late summer and we are engulfed. Put your head inside
<b></b>the black half-moon of an old charcoal grill 
<b></b>and breathe deeply. You’ll know what I mean.
<b></b>
<b></b>The sun trudges weakly across the sky like an old man
<b></b>with a dying lantern searching for lost dogs.
<b></b>A week of this, then two. It gets to all
<b></b>
<b></b>of us. This gray film on everything even the stuff
<b></b>you can’t ever see. You walk the dog and your
<b></b>lungs send up a question: We’re sure this is a good idea?
<b></b>
<b></b>Yesterday my neighbor saw me
<b></b>taking out the trash and jerked his thumb in the air
<b></b>like, you believe this shit? He’s lived here 
<b></b>
<b></b>all his life he says. Third-generation Montanan. Never seen it
<b></b>this bad. He’s got pure white hair and a kind face and
<b></b>
<b></b>many nights with the windows open I hear him raging
<b></b>at the grandkids who’ve ended up living with him
<b></b>against his will. Maybe it really is global warming, he says.
<b></b>
<b></b>Or climate change, he says, whatever they’re calling it now.
<b></b>Course, he says, maybe it’s also just bad luck. He knows
<b></b>that can happen too. It’s one of those things they always
<b></b>
<b></b>forget to tell you when they’re trying so very hard to get you 
<b></b>to think about what you’re doing in your life.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Ben Fowlkes works as a sports writer covering the world of professional fighting. His fiction and poetry have appeared in Glimmer Train, Best American Short Stories, Eunoia Review, Pinhole Poetry, and elsewhere. He's worked as a journalist for nearly 20 years, writing for outlets such as The Athletic, Sports Illustrated, USA Today, The Guardian, and others. He lives in Missoula, Montana, with his two daughters and one dog.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
