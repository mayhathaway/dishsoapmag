import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soapadish from "../images/soapadish.png"
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
            <br></br><strong>Paul</strong>
            <br></br><i>by Lily Yanagimoto</i>
            <br></br>
            <br></br> &nbsp; Asked to articulate the purpose of the work, I could not do it
            <br></br>completely. Without meaning, I catalogued images: a chafing birch,
            <br></br>a statue’s beveled lip. Lamplight screwing your oily eye.
            <br></br>Asked to make pointless equivalences, I acquiesced.
            <br></br>Your blue notched mouth. Silver fish on the bank. Window
            <br></br>half-open at night. Everything I have painted is not everything
            <br></br>I have seen. It is not even everything I know.
            <br></br>You laughed, there was blood in your face. The window
            <br></br>never opened to that type of sky. All my life
            <br></br>I lived in the city, I never saw animals.
            
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Lily Yanagimoto is an artist and poet from St. Louis, MO. She's currently studying comparative lit and visual art at Brown University.   </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
