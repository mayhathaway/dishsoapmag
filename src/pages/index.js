import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Michael Favala Goldman</h3>
            <h1 className={indexStyles.posttitle}>Horoscope</h1>
          <p className={indexStyles.posttext}>
         Everyone is under the slight influence
<br></br>of stars. For example, today, Scorpio.
<br></br>
<br></br>Dogs can smell it. The aroma
<br></br>of sex and impending cataclysm.
<br></br>
<br></br>Just because you can’t tell it’s coming,
<br></br>doesn’t mean it’s not.
<br></br>
<br></br>Then the subtle cycling
<br></br>through a solar or lunar phase.
<br></br>
<br></br>I’m not saying hold back on a large purchase
<br></br>or be extra kind in your relationships.
<br></br>
<br></br>I am saying that whoever you think
<br></br>you are, think again.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Following a career as a remodeling carpenter, Michael Favala Goldman reinvented himself as a poet, jazz clarinetist and translator of Danish literature. Michael’s nine books of original poetry have garnered many awards, including first place at the 2023 New England Book Festival and at the 2024 IPNE Awards. Among his eighteen translated books is his co-translation of The Copenhagen Trilogy, which was selected by the New York Times Best Books of the Century. He lives in Northampton, MA, where he has been running bi-monthly poetry critique groups since 2018. <a href="https://michaelfavalagoldman.com"> https://michaelfavalagoldman.com</a>. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
