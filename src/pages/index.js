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
import spt15 from "../images/spt15.jpeg"

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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)//
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Gwendolyn Hanson</h3>
            <h1 className={indexStyles.posttitle}>Ballad for the Crop Circle</h1>
          <p className={indexStyles.posttext}>        
I abduct myself from a dream. It isn’t easy. I give myself a headache from the effort. I transform the curl of my tongue against your ear into a radio transmission. The prayer carries past Saturn. An impossible sun barrels down to my bedroom, the ship shining aquamarine beneath the streetlights. I am pulled through my window by its tractor beam, the light soft as an anemone. I am returned after asking “are we there yet?” too many times. I land gracelessly in the backyard while you are still asleep in my bed. There is a metal sliver the size of a goldfish cracker under the nape of my neck. I can see where this leads. While my breasts are busy pressing the soil into valleys, the owls ask if I’m alright. I imagine what it is like to free-fall from space. I think it will feel like when you take my fingers into your mouth. I hide under your covers when they come back to take me away. You will find me in a field of bowing wheat. When I get what I want, I stop believing.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
Gwendolyn Hanson is a fiction writer and poet living in Maryland. She listens to Harvest Moon almost every single day. 
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