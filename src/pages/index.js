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
            <h3 className={indexStyles.postauthor}>James Callan</h3>
            <h1 className={indexStyles.posttitle}>H.A.T.S.</h1>
          <p className={indexStyles.posttext}>
          Hats are a prison for hair, a jail cell for my Jew-fro, which strives to touch the sky. Hats are a straightjacket to my 
          <br></br>occasional bouffant, a style that just can’t cope with any encumbrance. We’ve all said it: If I were a benevolent 
          <br></br>dictator… Well, for me, there’d be no more hats. Burn them, like they did the bras. If there’s any room left after the D-Cups, 
          <br></br>toss those beanies and berets, those fedoras and flat caps into the “Freedom Trash Can.” Yeah man…Let 
          <br></br>those follicles fly.
          <br></br>
          <br></br>Hats are a prison for hair. That’s my stance. Just don’t tell my dad (bald), my brother (baseball nut), or the guy who 
          <br></br>sells hats (successful retailer). Remember Mr. Clean? That guy looks like he could wipe the floor with me. Let’s not 
          <br></br>mention it to him either--my master plan to abolish all hats. Let’s keep that fantasy to ourselves, eh?
          <br></br>
          <br></br>Hats are shackles to the glorious backcomb. And yes, I’ve been to a shrink about all this --it doesn't help. But really, 
          <br></br>I’m coming along. I understand the value of hats for those who need them. Hats, for certain types, are like filtered 
          <br></br>screens that defy the naked truth. They are instruments to maintain the mystery, allowing the question to hang in 
          <br></br>the air--maybe he isn’t bald?-- inviting false speculations, unchallenged by truth: I bet his hair is luxuriant, well 
          <br></br>styled, and quite impressive.
          <br></br>
          <br></br>Hats are cranial horrors. As an acronym, HATS would be Hellish Atrocities That Stink. Hats are worse than hoods -- 
          <br></br>they are falsehoods. Not exactly bald faced lies…More like masks to conceal. Or, with zero embellishment, HATS.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            James Callan is the author of the novels <i>Anthophile (Alien Buddha Press, 2024)</i> and <i>A Transcendental Habit (Queer Space, 2023)</i>. His fiction has appeared in <i>Bridge Eight, BULL, House of Arcanum, Maudlin House, Mystery Tribune,</i> and elsewhere. He lives on the Kāpiti Coast, Aotearoa New Zealand. Find him at jamescallanauthor.com. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
