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
            <h3 className={indexStyles.postauthor}>Travis Flattr</h3>
            <h1 className={indexStyles.posttitle}>Cadillacs on the Moon</h1>
          <p className={indexStyles.posttext}>        
The Cadillacs are this new Apollo crew’s idea: “Make NASA Fun Again!”
<br></br>
<br></br>They’ve turned their rovers into two Cadillacs, one pink, one powder blue, and now they are racing, driverless ghost cruisers, pulled by robots on treads. This televised extravaganza feels like your idea to me, Captain Katie—how you pepper your flair like comet dust through the solar system.
<br></br>
<br></br>Down in Florida Sunsmile trailerpark, me and the guys laze in the yard with margaritas, placing bets on which Cadillac hits the Sea of Tranquility first. I get sunburned and tipsy, wax astronomical heartbreak. With a silly straw, I ding the rim of my Solo cup for quiet and propose a toast. “To Katie: she’s turned NASA to NASCAR for us dumb-dumbs on Earth.” The boys boo and toss their little drink umbrellas, say, “Quit feeling sorry for yourself. Your ex left you for outer space. Can you blame her?”
<br></br>
<br></br>I can. I do. Who helped you through flight school by slinging malteds at Steak and Shake nights, Katie? Grease to my elbows at Valvoline, days. Twelve years in the Air Force, and my NASA application was too comical to answer, like a letter to Santa Claus? And who got left on earth? Who got literally left in the dust?
<br></br>
<br></br>The broadcast cuts out mid-race and we move all over the yard, through my trailer, searching for a spot of clean reception. We end up getting picture in the above-ground swimming pool after sealing the TV in a plastic moving bag. There’s three scuba sets between the four of us, so we take turns watching, swapping the odd man out during commercial breaks.
<br></br>
<br></br>Do you miss me, Katie, up there in orbit? I picture you floating in your rocket ship, a Russian novel leashed to your wrist. Or, maybe enjoying some celestial Earthrise we civilians could only begin to imagine, your arms hooked in Lieutenant What's-His-Name’s as you spin in some zero G waltz.
<br></br>
<br></br>Or, maybe on a tin foil blanket, stretched over lunar sand for a picnic. Does the moon have sand, Miss Astronaut? Fort Lauderdale does. Used to be, that was good enough for us.
<br></br>
<br></br>“Forget her,” the others tell me. But you're always up there, hanging over my head.
<br></br>
<br></br>You remember waking me up on my birthday, playing “The Rainbow Connection” on the ukulele we won with skee-ball tickets? That song was hooked in my ear for years. Now, I sing it gargling as the guys dunk me under, them growing rowdy in the home stretch, my bet, blue, a nose ahead.
<br></br>
<br></br>They don’t understand love like we do, Katie, up there in your thermosphere. You’ve burned off every bit of us.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Travis Flatt (he/him) is an epileptic teacher living in Cookeville, Tennessee. His stories appear in Fractured Lit, Prime Number, Gone Lawn, Flash Frog, and other places. He enjoys theater, dogs, and theatrical dogs, often with his wife and son.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
