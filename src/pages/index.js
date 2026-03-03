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
            <h3 className={indexStyles.postauthor}>Jeffrey Heath</h3>
            <h1 className={indexStyles.posttitle}>Still Life With Lithium and Light</h1>
          <p className={indexStyles.posttext}>        
This morning, the honey caught
<br></br>in the jar’s rim glows from within,
<br></br>a cathedral window
<br></br>rendered in clover and glass.
<br></br>
<br></br>I watch it tremble
<br></br>when I reach past,
<br></br>hand not quite steady.
<br></br>No grand lurch,
<br></br>just the quiet rehearsal
<br></br>of what I might become
<br></br>by noon.
<br></br>
<br></br>There are days I am
<br></br>a house with all the lights on,
<br></br>radiant, overdrawn.
<br></br>The mirror won’t meet my eyes.
<br></br>Emails bloom like algae,
<br></br>texts left on read.
<br></br>I pace the rooms
<br></br>for no reason but momentum.
<br></br>
<br></br>Then the dimmer switch draws down—
<br></br>not darkness, exactly,
<br></br>but a kind of unspeaking,
<br></br>a silence lowered
<br></br>over every gesture.
<br></br>
<br></br>Still,
<br></br>the coffee cup holds heat,
<br></br>the shirts tumble dry.
<br></br>
<br></br>Sometimes I think
<br></br>the world forgives me
<br></br>by being indifferent.
<br></br>The tide doesn’t care
<br></br>what shape the moon is in,
<br></br>only that it keeps
<br></br>its strange appointments.
<br></br>
<br></br>I’ve come to rest in
<br></br>the minor key of maintenance:
<br></br>three white pills
<br></br>quietly waiting
<br></br>on the counter.
<br></br>
<br></br>I’ve learned to say
<br></br>today I am upright,
<br></br>as though that
<br></br>were a kind of prayer
<br></br>to gravity,
<br></br>to incandescence,
<br></br>to the low, gold light
<br></br>wobbling in the jar.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Jeffrey Heath was born in Amarillo, Tx and raised in South Florida. His first chapbook, American Drug Poems (2000) coincided with his time on the poetry slam scene where he represented the city of West Palm Beach at the National Poetry Slam (2001, 2002). Jeffrey’s work has appeared online and in print in several literary and poetry journals, including Eunoia Review, Sky Island Journal, Third Wednesday Magazine, Pictura Journal, wildscape. Literary Journal, among others; and as a featured poet in Neologism Poetry Journal and on Goodreads. He is the founding editor of January House Literary Journal. His second book, Entropy Loop & Other Poems, is available now on Amazon. Jeffrey currently lives in Memphis, TN.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
