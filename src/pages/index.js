import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import mike from "../images/mike.jpeg"
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
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Crystal Taylor</h3>
            <h1 className={indexStyles.posttitle}>Our Historic Home Has Always Been</h1>
          <p className={indexStyles.posttext}>
         neglected. Marred
         <br></br>with blemishes like a century-old
         <br></br>life-long smoker.
         <br></br>The fence, once wrought
         <br></br>iron spires, now replaced
         <br></br>by 3D-white incisors
         <br></br>
         <br></br>and freshly laid sod.
         <br></br>Ruby Woo lipstick stains
         <br></br>the front door, and eight shades
         <br></br>of beige foundation
         <br></br>conceal the weathered siding.
         <br></br>A faux wood swing bolted
         <br></br>
         <br></br>into the contours
         <br></br>of the wrap-around porch’s
         <br></br>shellacked ceiling, lacks the creak
         <br></br>of the old neighbor’s wave.
         <br></br>Cat eyes no longer line the alleyway
         <br></br>where they once chased hissing pests.
         <br></br>
         <br></br>They gave up the glamour—
         <br></br>moved somewhere more humane.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Crystal Taylor (she/her) is a poet, writer, and birdwatcher from Texas. Her work lives in Anti-heroin Chic, Maudlin House, Gargoyle, Ghost City Review, and other sacred spaces. She has been nominated for BoTN for her poem, Pearls. Follow her on BSky and Twitter/X @CrystalTaylorSA, and Instagram @cj_taylor_writes.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
