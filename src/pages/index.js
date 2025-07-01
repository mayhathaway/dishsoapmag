import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import insect from "../images/insect.jpeg"
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
      
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Chelsea Allen</h3>
            <h1 className={indexStyles.posttitle}>Bougainvillea</h1>
          <p className={indexStyles.posttext}>
    Luca comes and stretches my arm more across my bare breasts while I sit on the edge of the stool, then returns to his canvas. You’re the loving cramp crawling up my limbs. You’re the embroidered quiet—between the white waves smashing the midnight rocks. When Luca speaks, I speak back your language. My tongue wears it well, refuses to slip out of it. My eyes slip, perverse, all across him, across the salt and the sun on the olive. Unlike you, he ages, I see his rage burning out—within the hour he’s turned small, pale, grey. You still are young. As in the vineyard rows where we tasted berries red and blue, wasted silence in words, lay for hours in strangers’ orchards. Does Luca know I kiss the topmost step to this room before entering, and waiting? Does he see how completely his fingers see this wilting? Draw it back and back? Like the tourist to the shore. Where desire spills and freckles all over. The constellations on your shoulder when you kissed the crook of my neck but looked at Paestum dotted near the horizon and muttered, You can see the ruins from here. Luca has put down his brushes with much clamour. I don’t put the robe back on. I head for my jeans. He’ll ask me to come again tomorrow. I’ll take that as flirtation. Outside, in the garden, I’ll bid Ciao to his wife, who’ll smile the warmest smile, and say Ciao.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
         Chelsea Allen is a writer of short fiction, living in India. Her work has appeared in The Citron Review, Flash Fiction Magazine, and Furious Fiction among other places. Visit her at <a href="https://chelseaallenwrites.weebly.com/"> chelseaallenwrites.weebly.com</a>, or @ChelseaAllen03 on Twitter. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
