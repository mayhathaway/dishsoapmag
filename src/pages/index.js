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
            <h3 className={indexStyles.postauthor}>Sarp Sozdinler</h3>
            <h1 className={indexStyles.posttitle}>Paul From the Future</h1>
          <p className={indexStyles.posttext}>        
Keeps visiting me at inconvenient times. He arrives wet from tomorrow, smelling faintly of pennies and piss. The first time he appears I’m brushing my teeth. He pushes through the mirror and says, Beware the dentist. I tell him I don’t know any dentists. He points at the toothbrush in my mouth. Paul from the future is still Paul, unfortunately. Same hairline. Same little cough before the unfortunate news. He says the future is mostly dull, unlike what most people think. Says all paperwork and no sunshine makes him a dull boy. Says I should invest in apricots, it will turn big. Says it’s best to avoid escalators these days, one can never trust gravity. One can never trust the dentists. One can never trust a man who owns a telescope that shows only as far as the moon. When I ask what will happen to him, he squints. I’ll become the wise bird, he says. I’ll become the best magic in town. Then he steals one of my frozen burritos and phases backward through the pantry. He revisits while I’m on a date, sits between us in the booth, and shakes his head at our appetizer board. My date cannot see him but I can sense she’s growing visibly annoyed. Good instincts, Paul offers afterward. I can feel our terrible chemistry. I can smell her mild sweat. He says one day I will thank him for this. I tell him one day I will lock the doors to his face. He laughs, which is unfortunate because I laugh exactly the same way. I have the same face. I own the same cheap clothes. Sometimes late at night I catch my own reflection wearing his face.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Sarp Sozdinler has been published in Electric Literature, Kenyon Review, Shenandoah, and Pithead Chapel, among other journals. He edits the literary journal The Bulb Region.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
