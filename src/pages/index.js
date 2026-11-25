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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)///
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Katherine Garrison</h3>
            <h1 className={indexStyles.posttitle}>My Father Would Have Loved This</h1>
          <p className={indexStyles.posttext}>        
<br></br>I inch the sliding door of my bathroom open and see there’s a miniature Liopleurodon in the tub. I shut the door—does a Liopleurodon need privacy? It thrashes and hisses when the door bangs.
<br></br>
<br></br>Rich coffee steam swirls from my mug, fogging my glasses, and a quick search tells me it’s not common for Liopleurodons to just appear—they’ve been extinct for 150 million years. 
<br></br>
<br></br><i>Did you see a dinosaur in the tub this morning?</i> I text my partner, Paul.
<br></br>
<br></br><i>What’s that supposed to mean? Are you feeling okay? Do you want me to send in the funeral notice?</i> Paul responds.
<br></br>
<br></br><i>No that’s fine, I’ll do it.</i>
<br></br>
<br></br>The typing dots come and go a couple of times before disappearing. I’m sure he’s too busy to deal with it today anyway.
<br></br>
<br></br>The Liopleurdon gnashes, spraying water across the walls while I brush my teeth. There’s no handbook for this in any corner of the internet I thumb through. There is some speculation that Nessie is a Liopleurodon tucked away on a quiet forum, though.
<br></br>
<br></br>The closest I can find is how to care for the only truly marine reptiles around today: sea snakes and turtles. But it can’t stay here, so I go to the supermarket and buy a plastic kid pool to put in the garden but realise keeping it in plain sight of people probably isn’t a good idea either. What would the neighbours say? I dig a pond in a neglected corner of our property instead. The ache between my shoulders is a welcome distraction from the to do list threatening to overwhelm me. Order flowers. Send notice to paper. Schedule ceremony date. Pick up ashes. Send invites. Write eulogy. 
<br></br>
<br></br>It turns out moving a Liopleurodon is quite difficult. Pinprick bites accumulate across my hands in my first attempt to wrangle it. Is Liopleurodon saliva harmful to humans? <i>Results inconclusive</i>. I feed it some fish sticks from the freezer, and it turns docile, allowing me to move it to the pond which I shroud with tall shrubs. The skin is knobbled but slick and cool like the salamanders I used to catch as a child.
<br></br>
<br></br>When Paul returns home, he comments that the new plants are nice but says nothing about the pond. I must’ve done a good job camouflaging it against man looks. Which is just as well because after his dismissal earlier and hours of watching the Liopleurodon paddle around the pond, I kind of want it to be my not-so-little secret. Were Liopleurodons intelligent? <i>Smart enough to partake in ambush attacks supposedly</i>. If he ever notices it, I’ll have to tell Paul not to swim in the pond. 
<br></br>
<br></br>Later, I leave Paul’s light snores in bed and beneath a starless, post-midnight sky the Liopleurodon learns my father would have loved it—a living fossil. It learns how every September, around this time, we would head to the tidal beaches to search for remnants of its cousins. That my father’s proudest find was a fossilised megalodon tooth. It turns on its side to survey me with a large, unblinking eye and snaps its jaw before sinking below the surface, leaving me alone.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
Katherine Garrison writes short fiction, cnf, and poetry often exploring themes through nature, food, the weird, or some mix of these. Her work has appeared or is forthcoming in Elegant Literature, Baubles from Bones, Superlative Literary Journal, Variety Pack, WordFire Press, Utopia Science Fiction Magazine, HAD, Small Wonders and others. She was nominated for Best Microfiction 2026. When not cooking or writing she loves going on long hikes with her partner and their dog, camping, birdwatching, foraging, gardening and being outside in general.  
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