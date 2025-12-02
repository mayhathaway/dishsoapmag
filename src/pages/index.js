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
            <h3 className={indexStyles.postauthor}>Elena Zhang</h3>
            <h1 className={indexStyles.posttitle}>The Marriage</h1>
          <p className={indexStyles.posttext}>        
I found the marriage in the bottom of the recycling bin. It was covered in oil stains and cat hair. I cleaned the marriage with lavender soap, scrubbing until it gleamed like silver. The marriage was smaller than I thought. I put the marriage into my mouth, where it grew thick roots. It leaned towards my throat in the mornings and towards your voice in the evenings. It hummed while I slept and gave me the hiccups. The marriage lived for a long time. One day, the marriage grew wings and flew out of my left ear. I had no dreams that night.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
       Elena Zhang is a Chinese American writer and mother living in Chicago. Her work can be found in HAD, The Citron Review, and Flash Frog, among other publications. She is a Pushcart Prize and Best of the Net nominee, and was selected for Best Microfiction 2024 and 2025.   </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
