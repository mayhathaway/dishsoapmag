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
            <br></br><strong>INTERLUDE II</strong>
            <br></br><i>by Ivi Hua </i>
            <br></br>
            <br></br><i>after Richard n, after C. G.</i>
            <br></br>
            <br></br>here is a memory: you’re on a plane & you are not running away 
            <br></br>from anything. it is a miracle. you can call this half-earned. outside, 
            <br></br>the air drowns out all else. the clouds spiral into refraction, their light tender.
            <br></br>there is no landing in sight. you love this moment. full of squeezed spaces
            <br></br>& quiet cries, it loves you back. but here is the hard part:
            <br></br>the montage always ends. everything you want for will pass without a proper
            <br></br>goodbye. the memory reel splinters. you do not know how
            <br></br>to live with this— you are so used to wanting things, so inexperienced with actually
            <br></br>having them. sand slipping through your hands, your legs like a foal’s. inevitably,
            <br></br>the plane will land & everyone else will leave. you will stand in the aftermath, nothing
            <br></br>left to hold. maybe the pain will kill me, you think. more likely the self-destruction.
            <br></br>more likely the sleepless nights, the denial. you’re always turning in circles. i need you
            <br></br>to admit it: you’re afraid of what happens when you reach the end. 
            <br></br> sorry. i am too. this leaving wrecks me beyond measure.
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Ivi Hua is an Asian-American writer, dreamer, & poet. A Pushcart Prize & Best of the Net nominee, she is the author of Body, Dissected (kith books, 2024) and cofounder of Young Poets Workshops. Ivi believes in the initiation of change through language, & you can find her @livia.writes.stories on Instagram.  </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
