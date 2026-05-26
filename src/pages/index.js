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
            <h3 className={indexStyles.postauthor}>Joel Tomfohr</h3>
            <h1 className={indexStyles.posttitle}>A Beginning with No End</h1>
          <p className={indexStyles.posttext}>        
And now I am looking at her bounding in the tall green grass and high fennel taller than me and sending redwing blackbirds into the air like a galloping horse at sunset the sky lit up by the setting sun like a flame and my dog, yes, very much like the power of a galloping horse.
<br></br>
<br></br>I say to her please take me out and she says yes, I will take you out and will you take me out? Of course, I say to her. I put on a stocking hat, and I wrap a scarf around my neck. I put on the lined jean jacket that smells of tobacco and hashish. I leash her up and now we are outside number 10 Professor Tulpstraat walking in the direction of the luxury hotel with the lights and the dining room that overlooks the wide black river at night. Yes, lead me along the canals at night so that I can see the orange light from the streetlamps reflected in their black water. I say her name, and she turns and looks back at me with caramel eyes. Where do you want to go tonight? We both know how alone we are in the world after all.
<br></br>
<br></br>It is raining this morning, and she is not here. It taps on the windowpane, and whispers on the driveway and in the tall grasses and the glowing orange coppertips. And now I see her frozen above a mole in a standoff: my dog versus the mole. Neither one of them sure what the other is. She lets out a bay like a klaxon horn. She crouches with her hind in the air and her tail swishing silently. And then it is still and then she is gone. The rain streaks down the windowpane and rests in a small puddle on the sill.
<br></br>
<br></br>If I could write and write and make the reader care, the sacred audience of one, maybe then I could resurrect her. She is alive somewhere inside of me. She lives between my ribs.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Joel Tomfohr's chapbook, A Blue Hour (Bottlecap Press), was a 2025 finalist for the Orison Chapbook Prize. His work can be found in Xpat Press, Rejections Letters, Farewell Transmission, Maudlin House, and many others. He lives with his family and the ghost of his dog in the Bay Area. .</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
