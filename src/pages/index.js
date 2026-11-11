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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)///
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>John Brixter Tino</h3>
            <h1 className={indexStyles.posttitle}>AT THE DINER ON ROUTE 4</h1>
          <p className={indexStyles.posttext}>        
<br></br>I came here to be held by the vinyl booth, its cracked red mouth still warm
<br></br>from whoever sat before me. The waitress pours coffee without asking.
<br></br>She has done it twenty thousand times and her wrist knows the arc, the exact
<br></br>moment to pull back. I watch the truckers fold their maps into squares too small
<br></br>for the distances they carry. Their hands are thick with diesel and the particular
<br></br>grief of men who sleep in cabs. The pie case revolves: cherry, coconut cream,
<br></br>a lemon meringue browning at the peaks like summer hills after wildfire.
<br></br>I have been driving since the argument. Since the door closed with its ordinary
<br></br>click and the hallway swallowed my shoes. Here the sugar dispenser pours
<br></br>its bright stream into the dark lake of my cup and I watch it sink like a small,
<br></br>deliberate act of faith. The cook rings his bell. Two plates slide across the steel
<br></br>pass, eggs trembling, toast cut into triangles because someone decided once,
<br></br>long ago, that was the proper shape of morning. I want to tell the woman in
<br></br>the next booth that her daughter’s laugh is saving me a little. That the sound
<br></br>enters my ribs like light through a cracked door. I do none of it. I drink. I pay.
<br></br>I leave four dollars on the table, which is more than the coffee cost and less
<br></br>than what was given. The parking lot holds my car the way a palm
<br></br>holds a stone it intends to skip across black water.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
John Brixter Tino is a son of a fisherman and is a person with disabilities. He was raised in Perez, Quezon, Philippines. He currently serves as a part-time instructor at the Polytechnic University of the Philippines and is currently pursuing an MFA in Creative Writing at De La Salle University. His writings have received recognition from the Don Carlos Palanca Memorial Awards for Literature and other award-giving bodies in the Philippines. His works have been published in Red Ogre Review, Philippine Star, Philippine Collegian, Mekong Review, and TLDTD Journal, among other anthologies. 
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