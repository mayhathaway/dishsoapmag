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
          Hats are a prison for hair, a jail cell for my Jew-fro, which strives to touch the sky. Hats are a straightjacket to my occasional 
          <br></br>bouffant, a style that just can’t cope with any encumbrance. We’ve all said it: <i>If I were a benevolent dictator</i>… Well, for me, there’d
          <br></br> be no more hats. Burn them, like they did the bras. If there’s any room left after the D-Cups, toss those beanies and berets, those
          <br></br> fedoras and flat caps into the “Freedom Trash Can.” Yeah man…Let those follicles fly.
          <br></br>
          <br></br>Hats are a prison for hair. That’s <i>my</i> stance. Just don’t tell my dad (bald), my brother (baseball nut), or the guy who sells hats
          <br></br>(successful retailer). Remember Mr. Clean? That guy looks like he could wipe the floor with me. Let’s not mention it to <i>him</i>
          <br></br>either--my master plan to abolish all hats. Let’s keep that fantasy to ourselves, eh?
          <br></br>
          <br></br>Hats are shackles to the glorious backcomb. And yes, I’ve been to a shrink about all this --it doesn't help. But really, I’m coming
          <br></br>along. I understand the value of hats for those who need them. Hats, for certain types, are like filtered screens that defy the naked
          <br></br>truth. They are instruments to maintain the mystery, allowing the question to hang in the air--<i>maybe he isn’t bald?</i>-- inviting false
          <br></br>speculations, unchallenged by truth: <i>I bet his hair is luxuriant, well styled, and quite impressive.</i>
          <br></br>
          <br></br>Hats are cranial horrors. As an acronym, HATS would be Hellish Atrocities That Stink. Hats are worse than hoods -- they are
          <br></br>falsehoods. Not exactly bald faced lies…More like masks to conceal. Or, with zero embellishment, HATS.

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
