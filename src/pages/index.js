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
import july22 from "../images/july22.jpeg"

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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)/
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Nicole Brogdon</h3>
            <h1 className={indexStyles.posttitle}>Suburban Fable</h1>
          <p className={indexStyles.posttext}>        
If I’d never met you, if I’d said <i>No</i> to the blind date, No to a rendezvous at Rosie’s Tamales by the tracks, <i>No</i> to marrying you, well then, I might have wandered confused like a deer in the suburbs, seeking cover in thickets and bluestem grasses, longing for belonging, trying not to roam onto the asphalt of the new Mopac extension and get whacked by a Chevy, flattened like roadkill, buzzards dipping into my wet body with hooked beaks, reminding drivers of death as they sped past, whipping their heads towards then away, so that one of them hits a cyclist before crashing her SUV into a telephone pole. resulting in one death plus a coma—the poor families.
<br></br>
<br></br>And if I had sense enough not to run into traffic, and I still hadn’t met you, I might instead be rubbing my ripe pelt on trees and brush in the empty bluebonnet field behind the elementary school, scratching an itch, leaving deer sign, looking for some dancing buck with broad shoulders and a big rack to inhale me in the fall, to mount me and plant little wobbly fawns, emerging later from my brown body to stand on stick legs like helpless ballet dancers. Then of course that bastard would break up with me, and he’d wander the suburban underbrush in search of fresh meat, new baby mamas, leaving me to watch over my fawns myself, and I’d grow hairless with stress trying to stop them from wandering into backyards, shoving heads and mouths uninvited into people’s gardens to uproot tomato vines, me, trying to save my deers from mean boys and rifle play, from backhoes, rattlers, and roadways.
<br></br>
<br></br>It could’ve all turned out badly, you see, instead of this life, where we’re inside scrambling eggs and chopping fresh tomatoes, only occasionally cutting a finger and drawing blood. Using our hands, sopping up this colorful mess with good bread, licking the plate. Me making sure afterwards—though you tell me, “Don’t!”—to leave the leftovers outside in a bowl for the deer, whose face, those wide-set eyes, that long chin, somehow reminds me of mine.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Nicole Brogdon is an Austin TX trauma therapist interested in strugglers and stories, with fiction in Vestal Review, Cincinnati Rev, Cleaver, Flash Frontier, Bending Genres, Centaur, SoFloPoJo, Cafe Irreal, etc. Best Microfiction 2024, Best Microfiction 2025. Twitter: NBrogdonWrites. Bluesky: nbrogdonwrites.bsky.social.
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
