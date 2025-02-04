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
            <h3 className={indexStyles.postauthor}>Ewen Glass</h3>
            <h1 className={indexStyles.posttitle}>I felt the past</h1>
          <p className={indexStyles.posttext}>
          in my body and leapt out of bed,
<br></br>right onto my iPad.
<br></br>Now when I try to stream
<br></br>Ru Paul’s Drag Race I see
<br></br>cracks in the screen,
<br></br>all the light trying to get out.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Ewen Glass (he/him) is a screenwriter and poet from Northern Ireland who lives with two dogs, a tortoise and lots of self-doubt; his poetry has appeared in the likes of Okay Donkey, Maudlin House, HAD, Poetry Scotland and Gordon Square Review. His debut chapbook ‘The Art of Washing What You Can't Touch’ is available from Alien Buddha Press.  </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
