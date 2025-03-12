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
            <h3 className={indexStyles.postauthor}>Nicole Dirks</h3>
            <h1 className={indexStyles.posttitle}>Wash Hands With Evil Soap</h1>
          <p className={indexStyles.posttext}>
          Today we will build your body in The Sims 3.
<br></br>Click personality “Flirt,” life wish “Emperor of Evil,”
<br></br>Put hair in emo swoosh, tramp stamp in rainbow,
<br></br>Click bikini with flames, hips with edge,
<br></br>Toggle voice for Monroeish Simlish hello: <i>sul sul</i>.
<br></br>Resize forehead to test head without brain.
<br></br>
<br></br>With cheat code “motherlode,” dispose of all brain
<br></br>Power required to make ends meet in Sims 3.
<br></br>Drop Sim in empty lot, watch Sim greet <i>sul sul</i>
<br></br>Empty street. Next build your Empire of Evil:
<br></br>Plunk bathtub in backyard, step-stool by window edge,
<br></br>Dig pool with no ladder under sky of rainbow.
<br></br>
<br></br>Find Lover at end of Barnacle Bay town rainbow,
<br></br>Lad with carrot top, skater shirt, life wish “Best Brain
<br></br>Surgeon.” Click “Joke,” “Flirt,” “Flirt,” “Flirt,” “Offer Rose,” until you edge
<br></br>Into pink on relationship meter, clap clap! Love in The Sims 3
<br></br>Is a matter of repetition. Love in the Empire of Evil
<br></br>Is never good. Best Brain Surgeon comes by all <i>sul sul</i>
<br></br>
<br></br>Right when Vampire Sim is finally biting your neck. <i>Sul sul</i>,
<br></br>Offer him soup. Brain Surgeon and Vampire float rainbow
<br></br>Emojis. You start fire heating soup while Evil
<br></br>Does its thing: they swim, look for ladder. Sim brain
<br></br>Thinks drowning is waving. Evil in The Sims 3
<br></br>Is clicking “Wash Hands with Evil Soap,” considering window edge,
<br></br>
<br></br>While Empire does the dirty work. When Real vertebrae edge
<br></br>Against concrete wall by bed, Vampire respawns in window all&emsp;<i>sul sul</i>,
<br></br>And Empire burns to &emsp;&emsp;glitch&emsp;&emsp;close Sims 3
<br></br>Open&emsp;&ensp;Pottery Barn&emsp;&emsp; again &emsp;&emsp;ponder kid’s headboard&emsp;&emsp;in rainbow
<br></br>Cause cheap&emsp;&emsp; clap clap &emsp;&ensp;motherlode rings &emsp;“drop by?”&emsp;&ensp;no brain
<br></br>Go wash hands &emsp;&emsp;&emsp;lame ass soap&emsp;&emsp;&emsp;&emsp;&emsp; evil evil evil evil evil evil evil
<br></br>
<br></br>Nothing devious about depression&emsp;&emsp;&emsp; but Evil
<br></br>Keeps it fresh&emsp;&ensp; you feel off&emsp;&emsp; window edge
<br></br>Opportunity&emsp;&emsp;to close door&emsp;&emsp;leads to open&emsp;&emsp;hands&emsp;&ensp;to water&emsp;&ensp;brain
<br></br>Doesn’t need ladder&emsp;&emsp; to leave &emsp;&emsp;pool greet <i>sul sul</i>
<br></br>Get to business &emsp;&emsp;in the sink&emsp;&emsp; scrub a dub dub dubdubdubdubdubdub&emsp;&emsp; shiny Rainbow
<br></br>Politics on phone with motherlode&emsp;&emsp; dispose &emsp;&emsp;hangnails&emsp;&emsp; memory &emsp;&emsp;Sims 3
<br></br>
<br></br>How Evil it is to go for lunch with motherlode when you have an entire Empire in The Sims 3.
<br></br>On toilet break&emsp; swipe left Emo girl 1 2 3 &emsp;scrub a dub dub&emsp; Rainbow
<br></br>Back to it&emsp; bowl of minestrone&emsp; fly still down&emsp; Mother “hey”&emsp; Freudian glitch “sul sul”
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Nicole Dirks is a recent Yale grad from Toronto. She's been published in The Dial and The Walrus. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
