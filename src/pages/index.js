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
            <h3 className={indexStyles.postauthor}>Robert McDonald</h3>
            <h1 className={indexStyles.posttitle}>None of Us Are Elected</h1>
          <p className={indexStyles.posttext}>
        <i>When the leaves run across the driveway</i>, their scuttering becomes the contents of my latest memorandum. I ought to explain that 
        in this matter I am licensed to act for the committee of ghosts who inhabit the farmhouse on the hill. None of us are elected, 
        everyone volunteers: the spirit that possesses the rat snake basking on the porch, the kindly old man, intangible, who lives in the 
        basement, down among the bricks of the original foundation. He might be the father, or the husband, of the woman who
        sometimes sits invisibly at the foot of your bed, but he’s reticent enough not to say. We often convene in the orchard, after 
        midnight. The thud as early apples drop; that is one statement. The cough of a white-tailed deer is an argument, while the 
        quickly silenced shriek of a rabbit, as it feels itself lifted in the talons of the owl, I believe that was the minutes of our last meeting.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Robert McDonald's poetry and prose have appeared in a slew of places, including Pank, Juked, Sentence, Hearth & Coffin, Emerge, and Unbroken. He lives in Chicago with his husband and so many houseplants. So many.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
