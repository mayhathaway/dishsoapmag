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
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Simon Firth</h3>
            <h1 className={indexStyles.posttitle}>The Master: some considerations...</h1>
          <p className={indexStyles.posttext}>        
J’s mind is off-kilter and he can only think in jaunty, sinister sentences. He’s been reading <i>The Master and Margarita</i> for what he thinks is the third time, but is probably the second. This time, strangely and probably also incorrectly, he thinks he understands it: it might be the most logical novel he’s ever read.
<br></br>
<br></br>Last night he dreamt that Behemoth the Cat was his new boss. Behemoth (whose lanyard read ‘Behemoth, Head of Product’) called him in for a meeting to discuss some projects he’d like him to get going with. He couldn’t remember the exact nature of these projects when he woke up, but he did remember Behemoth stroking his cheek with his soft paw and saying: thank you, J, for all that you do, truly; and I wish you good health, good luck, the best health and luck possible.
<br></br>
<br></br>Now he’s awake, J is considering buying books on black magic. He’s considering buying a long coat and a megaphone and bellowing on the streets: ‘it’s not too late! The devil’s here, you just need to look and listen…get an eye test, a hearing test, and pay attention!’ He’s considering writing an email to his so-called real boss (Nathan, Head of Product) with a special work request: at the end of our meetings, could you give my cheek a little stroke and wish me well? He’s considering making fake phone calls to various men of high repute.
<br></br>
<br></br>He’s considering the possibility that he’s a secondary character in Behemoth’s dream. He’s considering ordering a new lanyard with a new name, written in an illegible font. He’s considering what needs to be done to get back into that meeting with Behemoth, where he’ll raise his hand and volunteer to submit, finally and irrevocably, to the Master.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Simon Firth is a writer from Morecambe Bay.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
