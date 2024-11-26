import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import birds from "../images/birds2.png"
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
            <h3 className={indexStyles.postauthor}>N. J. Webster</h3>
            <h1 className={indexStyles.posttitle}>Dream 5, Year 661</h1>
            <break></break>
            <break></break>I used to live with a smoker who woke me up every four hours in lieu of rent, but he
            <break></break>moved out, tired of my morning shrieks, my midnight panic.
            <break></break>
            <break></break>Each of my dreams lasts 1,000 years. Sometimes alone, sometimes in crawling desperate
            <break></break>slums, and sometimes here, with you. I’ve lived centuries in automated jungles and
            <break></break>villages of amber, I’ve begged and governed. I’ve seen the sun sick and the ocean a
            <break></break>sluggish violet. Sometimes I read, but the worn books contain only what I contain. And
            <break></break>sometimes I’m here, with you. And I don’t want to wake up.
          
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            N.J. Webster is a father, lawyer, and writer attempting to channel his pop culture obsession into something useful. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
