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
        <div className={layoutStyles.content}>
          <div className={aboutStyles.mission}>
            <p>
             <strong>dish soap</strong> /ˈdɪʃ ˌsoʊp/ (noun) </p> 
            <p>a thick liquid that is often blue, white, or green. found in or near sinks. used for 
            cleaning dishes and other things commonly found in kitchens like pots, pans, fish spatulas, 
            egg cubers, shrimp deveiners, condiment guns, and corn peelers.
            </p>
            <p><strong>dishsoap</strong> /ˈdɪʃˌsoʊp/ (noun) </p>
            <p> a nerdy, uncool, earnest magazine that wouldn’t wait three days to call you if it got your 
              number. that’s too bad at math to care about measuring accolades against one another. 
              that doesn’t have a type beyond times new roman or maybe garamond. that’s easily excitable. that can’t 
              wait to see what you’ve been working on.</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={aboutStyles.mission}>
            <p>
             <strong>dish soap</strong> /ˈdɪʃ ˌsoʊp/ (noun) </p> 
            <p>a thick liquid that is often blue, white, or green. found in or near sinks. used for 
            cleaning dishes and other things commonly found in kitchens like pots, pans, fish spatulas, 
            egg cubers, shrimp deveiners, condiment guns, and corn peelers.
            </p>
            <p><strong>dishsoap</strong> /ˈdɪʃˌsoʊp/ (noun) </p>
            <p> a nerdy, uncool, earnest magazine that wouldn’t wait three days to call you if it got your 
              number. that’s too bad at math to care about measuring accolades against one another. 
              that doesn’t have a type beyond times new roman or maybe garamond. that’s easily excitable. that can’t 
              wait to see what you’ve been working on.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
