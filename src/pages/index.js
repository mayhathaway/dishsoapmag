import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import noralee from "../images/lucyd.jpeg"
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
            <br></br>Danielle Barr
            <br></br><strong>Heartwood</strong>
            <br></br>
            <br></br>Meagan has high-gloss brown hair that waterfalls over her shoulders like thick-lacquered mahogany. I ask her if I can 
            <br></br>run my fingers through it, plait it into a fat rope down her back; I only know how to love things with my hands. Meagan 
            <br></br>says I smell like sap and sawdust and diesel exhaust; Meagan says Brillo pad callouses snag and catch and tear like Velcro.
            <br></br>
            <br></br>After she leaves, I will find my bedsheets splintered with long brunette hairs for another thirteen months.


</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Danielle Barr is a full-time stay-at-home mom and sometime-writer. She was recently named the winner of the Driftwood Press annual short story contest and is currently querying her first novel. She lives in rural Appalachia with her husband and four young children.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
