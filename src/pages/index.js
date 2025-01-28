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
            <h3 className={indexStyles.postauthor}>Catherine Weiss</h3>
            <h1 className={indexStyles.posttitle}>Today I’m Making Friendship Bracelets</h1>
          <p className={indexStyles.posttext}>
          except I usually give up before they’re done
          <br></br>so I’m just making keychains or what feels like
          <br></br>extravagantly pointless scraps of effort.
          <br></br>I’m concentrating hard to tie one fucking knot
          <br></br>to another fucking knot, in the proper direction,
          <br></br>in the right order, with the appropriate string.
          <br></br>I learned the techniques from a teenage girl’s
          <br></br>Youtube channel, follow patterns created
          <br></br>by other teenage girls. Friendship bracelets
          <br></br>take so long to make, there’s no point
          <br></br>in selling them. Labor cost is too high. A friendship
          <br></br>bracelet is created to be given. I was thinking of you.
          <br></br>I was thinking of you for twelve hours with colorful string
          <br></br>wrapped around my fingertips. It’s not quite prayer
          <br></br>but it’s not not prayer. I think it’s devotion,
          <br></br>about which a teenage girl would have a lot to say.
          <br></br>Teenage girls are great teachers, if you listen.
          <br></br>Today’s lesson is on despair: looking ahead
          <br></br>and foreseeing years of humiliating ritual. What now,
          <br></br>I ask. Teenage girl replies, look at your hands.

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
