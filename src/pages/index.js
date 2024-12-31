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
            <h3 className={indexStyles.postauthor}>Timothy C. Goodwin</h3>
            <h1 className={indexStyles.posttitle}>They fired up the laser</h1>
          <p className={indexStyles.posttext}>
           but they couldn’t turn it off because of all the New Science that made it work so they knee-jerked a solution which was to just 
            point it up into the sky and after a scrambled media frenzy about whether or not the International Space Station would 
           maneuver around it in time (<i>It did</i>, the media frowned) and a really thin scratch across the moon things settled down and 
            everyone rerouted all the planes and put up speakers playing predatory sounds to warn the birds and there was this sense of  
            <i>Okay: The Great List Of Things To Avoid, Updated</i> but pretty soon they had to build a wall around it because people kept trying 
            to get to the laser, to touch it I guess and the wall got higher and higher as more and more people kept trying to get to it and of 
            course it was easy to shrug them off like one does with those people that leap into the polar bear enclosure or just reach out to pet 
            a moose in the woods but the more time goes by I think some people just don’t understand how bad a thing can be, like 
            sometimes it must be nice to still believe there’s a cartoon center to everything, that couldn’t possibly hurt.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Timothy C Goodwin has work in Paragraph Planet, JAKE, Roi Faineant, and elsewhere.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
