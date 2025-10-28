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
            <h3 className={indexStyles.postauthor}>Justin Karcher</h3>
            <h1 className={indexStyles.posttitle}>Imagine a Future Where Nobody Has to Hide Their Tenderness</h1>
          <p className={indexStyles.posttext}>        
As I walked to the café in the rain
<br></br>I came across two ducks
<br></br>chilling on the side of the intersection.
<br></br>
<br></br>If you see ducks in an unusual location
<br></br>it’s possible they have built a nest and laid eggs.
<br></br>
<br></br>At the cafe my friend who works for the VA
<br></br>was getting drunk and complaining about
<br></br>how Elon Musk is gonna make him
<br></br>and his little dog live in a cardboard box.
<br></br>
<br></br>His Rage Against the Machine hoodie
<br></br>was glowing like a tired bomb.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Justin Karcher (Twitter: @justin_karcher, Bluesky: @justinkarcher.bsky.social) is a Best of the Net- and Pushcart-nominated poet and playwright from Buffalo, NY. He is the author of several books, including Tailgating at the Gates of Hell (Ghost City Press, 2015). Recent playwriting credits include The Birth of Santa (American Repertory Theater of WNY) and “The Buffalo Bills Need Our Help” (Alleyway Theatre). <a href="https://www.justinkarcherauthor.com/"> https://www.justinkarcherauthor.com</a>.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
