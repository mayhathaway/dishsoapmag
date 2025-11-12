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
            <h3 className={indexStyles.postauthor}>Bradley K. Meyer</h3>
            <h1 className={indexStyles.posttitle}>Lobiani</h1>
          <p className={indexStyles.posttext}>        
I am studying Georgian partly to better understand the alcoholics in the park near my house. The lobes of air in their laughing undo me. I already know enough to know they aren’t saying anything, just bulging and groaning at the world and what’s in it. Into the ground of being still. Nothing anyone says can be held with hands, imaginary threads cutting through imaginary grief. Someone tosses a cigarette into the trash can. A newspaper and some wrappers catch fire. It burns down to a breath, calm, just living. There’s nothing intellectual or artistic about it. I have a conversation with Maia on the phone. She says, ‘It feels good to learn something new, doesn’t it?’ ‘Yes.’ ‘It keeps you from getting old.’ And I can’t help it, ‘Like an aneurism or a speeding bus or-’ ‘You know I mean your brain.’ Its ember of memory bound to the world by a single thread of smoke, braided together with others. Too delicate on fingertips. It’s that fear of death again. The trash rustles as it resettles. Laughing, you pour another glass of Georgian wine. What color is the day? Hot. The fire burns out. It’s only really over when you see the ashes.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Bradley K Meyer writes from Tbilisi, Georgia. Recent work has appeared in Biscuit Hill, BRUISER, Muleskinner, Right Hand Pointing and Action, Spectacle. He teaches English.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
