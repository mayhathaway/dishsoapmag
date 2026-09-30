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
import mar10 from "../images/mar10.jpeg"
import spt15 from "../images/spt15.jpeg"

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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)//
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Jeffrey Hermann</h3>
            <h1 className={indexStyles.posttitle}>There Are Many Difficult Things to Do This Morning</h1>
          <p className={indexStyles.posttext}>        
So I get up and get in line. Nobody wins the lottery anymore. All the money gets broken back down into chemicals and dyes. Someone is richer for it. Not me. In your dreams you’re an action hero who works in IT. You’re captured by someone from HR. You’re freed by someone from marketing. You’re both running down the stairs. Then you’re standing on the sidewalk. It’s there you share passwords. Someone from corporate security writes up a warning. Then you kiss. There are sparks. The NASDAQ drops then rises again like a monster stabbed in the neck. The windows on the top floors don’t open, but you can see people waving. Some of them are signaling that you should escape and never return. Some are signaling that you need to get back to work. You suddenly realize you’ve never tested the possibilities in your body. You get ready to do it.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
  Jeffrey Hermann writes short fiction and prose poems in his spare time. One day when he retires he will write in his regular time. His work is out there if you look. His wife and two children and dog mean everything to him. He has two books forthcoming in 2027, from Unsolicited Press and Gnashing Teeth Publishing.
</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
