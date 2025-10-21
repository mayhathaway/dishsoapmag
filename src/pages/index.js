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
            <h3 className={indexStyles.postauthor}>Michelle Li</h3>
            <h1 className={indexStyles.posttitle}>2014, reframed</h1>
          <p className={indexStyles.posttext}>
        <i>after Bob Hicok</i>
<br></br>
<br></br>The first and only boy who loved me
<br></br>did so at a time when I did not care for attention.
<br></br>In the yearbook, there is a photo where he has written
<br></br>a love letter and I hold it up for the camera. Blonde,
<br></br>skinny, and hawkish, he let me copy Spanish terms
<br></br>from his notebook because I was too nearsighted
<br></br>to see the whiteboard. Once, his father told my father on
<br></br>a parent night that his family was going through
<br></br>a divorce. Perhaps those were the days
<br></br>for love and remarriage, the air up for grabs, when my
<br></br>parents probably thought about divorce as well
<br></br>and realized that they wouldn’t have been happier
<br></br>with anyone else. On the school calendar,
<br></br>the years said <i>you must be very limited</i>, and fanned
<br></br>themselves out without stop. I laughed and cried
<br></br>underneath the same swing set. One summer day,
<br></br>almost ten years later, I ended up alone on the other
<br></br>side of the country and thought of him again. In
<br></br>Boston, I watched girls fling themselves at golden
<br></br>boys, older men, heard of them drinking handles
<br></br>of vodka without remorse. That year, the city opened
<br></br>itself, and when I walked the streets of Italian diners
<br></br>and film shops, I knew that no one would
<br></br>come to think of all of this—whatever this was—in
<br></br>the same way ever again. A late wind on the bus biting
<br></br>the rutilant horizon, the city ahead glistens with an untouched
<br></br>temerity, and the grass knows that we—even the popular
<br></br>ones—will come to die. I wanted to know that night if I
<br></br>had been given enough love for it to stretch my entire life,
<br></br>how much of a life I had left, to ask if my childhood
<br></br>crush what he had written in that card and where
<br></br>I had lost it, explain to him that I was handed a life
<br></br>without genius, but I still have to make something
<br></br>out of this, have to mend these unwielding
<br></br>limbs into some logical structure, under saturated
<br></br>limelight, under the gentlest spray of stars. That was
<br></br>the day I realized you could sit waiting for the
<br></br>green line to Amory, and still not know which flight,
<br></br>which decision, which flick of the wrist had pulled
<br></br>you into a new city. When the traffic ahead
<br></br>had slurred and slowed, I got onto the platform,
<br></br>watched the last set of overhead wires come into view.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Michelle Li has been nationally recognized by Scholastic Art and Writing, Bennington Young Writers Awards, and Apprentice Writer. An alumna of the Kenyon Review Young Writers Workshop, her work is published in Aster Lit, wildscape. literary, and Third Wednesday. You can find her at <a href="https://michelleli.carrd.co/"> michelleli.carrd.co</a>.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
