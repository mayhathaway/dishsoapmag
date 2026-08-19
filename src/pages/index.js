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
            <h3 className={indexStyles.postauthor}>Anisha Arvind</h3>
            <h1 className={indexStyles.posttitle}>simulation sickness</h1>
          <p className={indexStyles.posttext}>        
the heat index is hitting triple digits but your hands are ice,
<br></br>pressing a cold can of generic seltzer against your temple.
<br></br>it's a rendering-error summer. the sky is the color of a blank browser tab,
<br></br>bleached out and heavy with the smell of scorched asphalt.
<br></br>you’re wearing a thrifted graphic tee that reads <i>WISH YOU WERE HERE</i>
<br></br>in cracked, peeling vinyl, though neither of us is sure where here actually is.
<br></br>we listen to a podcast on 2x speed just to fill the quiet,
<br></br>two voices talking about the deep ocean like it's a place that still exists
<br></br>outside of a nature documentary.
<br></br><i>everything is beautiful and nothing hurts</i>, Vonnegut promised,
<br></br>but he never watched the streetlights blink on all at once,
<br></br>a sudden grid of artificial amber pinning us to the pavement.
<br></br>i watch the condensation drip down your wrist, pooling in the crook of your elbow,
<br></br>and for a second, it feels like a physical law we didn't have to invent.
<br></br>we stay until the air goes purple, waiting for a glitch in the horizon,
<br></br>wanting the sky to tear open just enough to show us the wires.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Anisha Arvind is a poet based in Seattle, Washington. Her works have been recognized by the Scholastic Art & Writing Awards, Hollins University, Aster Lit & HAD.
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
