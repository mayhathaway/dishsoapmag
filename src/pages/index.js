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
            <h3 className={indexStyles.postauthor}>Tara Labovich</h3>
            <h1 className={indexStyles.posttitle}>girl, possessed!</h1>
          <p className={indexStyles.posttext}>
          girl, what r u summoning
<br></br>from the henceforth? from
<br></br>the future? from your guts?
<br></br>the yearn is a summons
<br></br>for wet creation, long arm
<br></br>winding into the ether,
<br></br>looking, looking
<br></br>like Jennifer’s body
<br></br>we succubus
<br></br>desire, we’re possessed, we’re waiting
<br></br>for it all to rankel in our bodies!
<br></br>lovehunger, touchache, the singsong
<br></br>from the cloister of want.
<br></br>i had forgotten the way it hurts.
<br></br>
<br></br>after midnight my friend & i sat
<br></br>in the dark car, doing the linger,
<br></br>streetlit.
<br></br>i was saying something about the way
<br></br>the universe talks, i was saying,
<br></br><i>i want to protect ur desire</i>
<br></br>when we saw the fox.
<br></br>she came quick, only
<br></br>for the length of a streetcorner.
<br></br>there—gone,
<br></br>like all language, like the neighborgod,
<br></br>like she was proving a point to us all about
<br></br>what it’s like to have the world
<br></br>rile in you, talk to you again.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Tara Labovich (they/them) is a lecturer of English and Creative Writing at Iowa State University. Their multi-genre creative work explores questions of queerness, survivorship, and multicultural upbringing. Their writing is nominated for Best of the Net, and can be found in journals such as Salt Hill and the Citron Review.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
