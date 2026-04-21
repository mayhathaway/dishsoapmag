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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab) /
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Dallon Robinson</h3>
            <h1 className={indexStyles.posttitle}>The Girlfriends Of The Propeller Plane Disappearance Victims</h1>
          <p className={indexStyles.posttext}>        
They cannot say <i>victims</i> yet but have already been branded <i>girlfriends</i>, their role imprinted in articles and threads and conspiracy videos, which are backgrounded by screenshots of the articles and threads. The girlfriends have not yet made a statement, responded to comment requests, or answered DMs asking for the boyfriends’ birth charts, enneagram types, sizes in relation to a TV remote. They’re busy with the important matters: propeller theory, survivor’s guilt, the disintegration speed of a body in saltwater, the echo of a whale’s mouth. Insurance. The boyfriends had been vlogging their attempt to circumnavigate the globe in a propellor plane, which grew a respectable fanbase, which skyrocketed when they disappeared. The little camera in the corner of their cockpit made them bug-eyed and beautiful in the last video, posted two weeks ago. The girlfriends admit, it’s a delectable mystery; it only sweetens with their silence. Theories that their boyfriends are lost on an island or were wormholed by the wrong airspace at the wrong time grow into conspiracies of alien abduction or being captured by the government for flying too close to the ice wall – which government that is, being as vague as the sky. Rumours of an AI hoax bloom when a low-resolution clip from one of their vlogs goes viral on TikTok, where a throttle lever appears to blur into a hand. The girlfriends become the crisis actors, the political puppets, the <i>money hungry bitches</i> when they finally speak up. They make their request for privacy and hope their boys will come home – hope being a transparent thing, like air held in the mouth. They get picked apart by accounts masked by icons of their boyfriends, which, however hurtful, lets the girlfriends experience looking into their eyes again. In the comment sections, people imagine the boys’ reunion with the world, where the boys thank the people for believing in their safe return. Maybe the girlfriends should believe more. Nothing satiates the public’s hunger; shared memories and Facebook family matters are picked up and put back down. YouTubers upload their updates, reference the news articles which mention the conspiracy TikToks, which reference the flat earth forums which mention that one of the girlfriends has the same surname as a low-level government official. Spirals of content ouroboros themselves until everyone forgets the boys who were fresh out of pilot school, who loved their girlfriends but not at eye level, who were about to head over a long blue slate of Pacific. So the girlfriends of the propeller plane disappearance boys decide they don’t want to be the girlfriends anymore. Mika, either so bravely or so distastefully, hops on a one-way flight to Europe. Anya moves off the grid and onto a yak farm. They post cuttings of their lives online and keep the comments on as long as they’re torn apart. Until, soon enough, something new comes for everybody to circle around whilst the ocean, quietly, coughs up the wreckage of a propeller. Nobody wants resolution, but rather to lick their lips at it. Anya and Mika are not the girlfriends but still are the ones who swallow all the statements, the saltwater, the grief, who cast their gazes up at the sound of a jet engine, contrails streaking in all directions across the sky.  


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Dallon Robinson (they/them) is a queer writer. Their work usually features women who kind of suck, the moon, and/or deep sea creatures. Their fiction appears or is forthcoming in Milk Candy Review, Flash Fiction Magazine, Pithead Chapel and elsewhere. They are quietly online at @dallonwrites.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
