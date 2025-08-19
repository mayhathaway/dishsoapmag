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
            <h3 className={indexStyles.postauthor}>Grace Sleeman</h3>
            <h1 className={indexStyles.posttitle}>ode to the silver screen</h1>
          <p className={indexStyles.posttext}>
    coming out of a movie theater into the
<br></br>cool of the first spring evening 
<br></br>is the closest you’ll ever come to being born again.
<br></br>when the movie you saw was a 
<br></br>good one, & everyone clapped at the end
<br></br>& laughed to each other as they gathered
<br></br>bags, & snack wrappers, & coke bottles –
<br></br>& when you all step outside you are something
<br></br>greater than before. those street lights
<br></br>are lit & the sky’s still holding onto a little
<br></br>brightness, a little blue still
<br></br>but quickly giving over to dusk. god, what a
<br></br>night to walk home & talk & talk & talk
<br></br>just to hear the sound of your voices! to laugh
<br></br>when nothing is funny. to clap at the end 
<br></br>of a movie just because you’re glad
<br></br>someone cared enough to make it &
<br></br>thank god you all gathered here tonight to 
<br></br>watch it.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Grace Sleeman has fallen out of every tree she's ever climbed. She grew up among the lilacs in Damariscotta Maine, and now lives in Portland. Her work has been published by Koukash Review, Noise Magazine, and Slipstream Press, among other publications. You can find her online at @myrmiidons, or looking for worms after a thunderstorm.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
