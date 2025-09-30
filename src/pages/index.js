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
            <h3 className={indexStyles.postauthor}>Natalie Korman</h3>
            <h1 className={indexStyles.posttitle}>Miriam</h1>
          <p className={indexStyles.posttext}>
          Miriam, in the spine of the book and the black
<br></br>of the ink, in the white of the stitches
<br></br>in the dimples of the brick and the soil at the base
<br></br>
<br></br>in the tender oaks along the trailside
<br></br>in the perfect coffee spaceships of the acorns
<br></br>in the haunch of the stern bobcat in the meadow
<br></br>
<br></br>She comes along in the green rectangle, and in the blue
<br></br>the book is polished, soft
<br></br>solid and malleable
<br></br>the memory of reading arrives
<br></br>like a tender brush across the shoulder
<br></br>
<br></br>Miriam by the river where the salmon rush
<br></br>slipping down into the shadowed banks
<br></br>out of sight and into memory
<br></br>
<br></br>Miriam, unharnessed by the portrait
<br></br>faces turned to only memory
<br></br>no daub of shadow on the brow
<br></br>only the purple lattice of the afternoon bramble
<br></br>and the hush of the return to trees
<br></br>after the harshness
<br></br>of the open country

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Natalie Korman is a poet and fiction writer with recent work published by Crow & Cross Keys, tiny wren, and Marrow Magazine. Natalie lives in California where she enjoys contemplating the poetics of the banana slug.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
