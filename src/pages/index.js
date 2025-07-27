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
            <h3 className={indexStyles.postauthor}>Ewen Glass</h3>
            <h1 className={indexStyles.posttitle}> Turning up the volume on my rain app to drown out the rain</h1>
          <p className={indexStyles.posttext}>
    <br></br>My yard's motion-activated light is trolling me; nobody wants to
 <br></br>be winked at when they're trying to sleep.
 <br></br>
 <br></br>I’m emotion-activated, I say lightly when what I really mean is:
 <br></br>how can we be expected to stay in our bodies
 <br></br>
 <br></br>when our chests are all thrum and polyester billow? Rain on a
 <br></br>tent. Choose a scientist at random and hold it close;
 <br></br>
 <br></br>it can be your support scientist, tonight, anytime. Copernicus. On.
 <br></br>Copernicus. Off. Copernicus. On. Copernicus,
 <br></br>
 <br></br>convince me I am the earth and not the sun
 <br></br>
 <br></br>so I might turn over and get to sleep.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
         Ewen Glass (he/him) is a screenwriter and poet from Northern Ireland who lives with two dogs, a tortoise and a body of self-doubt; his poetry has appeared in the likes of Okay Donkey, Maudlin House, HAD, Poetry Scotland and One Art. Bluesky/X/IG: @ewenglass.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
