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
<br></br>the black half-moon of an old charcoal grill 
<br></br>and breathe deeply. You’ll know what I mean.
<br></br>
<br></br>The sun trudges weakly across the sky like an old man
<br></br>with a dying lantern searching for lost dogs.
<br></br>A week of this, then two. It gets to all
<br></br>
<br></br>of us. This gray film on everything even the stuff
<br></br>you can’t ever see. You walk the dog and your
<br></br>lungs send up a question: We’re sure this is a good idea?
<br></br>
<br></br>Yesterday my neighbor saw me
<br></br>taking out the trash and jerked his thumb in the air
<br></br>like, you believe this shit? He’s lived here 
<br></br>
<br></br>all his life he says. Third-generation Montanan. Never seen it
<br></br>this bad. He’s got pure white hair and a kind face and
<br></br>
<br></br>many nights with the windows open I hear him raging
<br></br>at the grandkids who’ve ended up living with him
<br></br>against his will. Maybe it really is global warming, he says.
<br></br>
<br></br>Or climate change, he says, whatever they’re calling it now.
<br></br>Course, he says, maybe it’s also just bad luck. He knows
<br></br>that can happen too. It’s one of those things they always
<br></br>
<br></br>forget to tell you when they’re trying so very hard to get you 
<br></br>to think about what you’re doing in your life.

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
