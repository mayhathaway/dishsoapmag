import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import natr from "../images/natr.jpeg"
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
            <p>
            <br></br>Audrey Hall
            <br></br><strong>Submersion</strong>
            <br></br>
            <br></br>Brown clouds the airplane window
            <br></br>as I descend into Atlanta,
            <br></br>the city enshrined in electricity.
            <br></br>I hold my breath:
            <br></br>
            <br></br>Months ago, I walked to the farthest edges
            <br></br>of a botanical garden, until the path went underwater.
            <br></br>At the swamp’s brim, an old boardwalk slumped.
            <br></br>A single traffic cone floated nearby.
            <br></br>
            <br></br>I squatted at the end of the path, thinking,
            <br></br>if I were the Floridian kind of selkie,
            <br></br>a woman with alligator skin, I would shed
            <br></br>my jeans for scales and slip beneath the algae
            <br></br>
            <br></br>to look for a greener world between boardwalk posts.
            <br></br>I hear only the movement of water, see glimpses
            <br></br>of manatee snouts, and I am not resigned
            <br></br>to the moment of touching down.


</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Audrey Hall is a poet, literature scholar, and marine science enthusiast from Mississippi. Her poems appear in Okay Donkey, Hunger Mountain, Atlanta Review, and Alaska Quarterly Review, and others. In 2022, her poetry was nominated for a Best of the Net Award. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
