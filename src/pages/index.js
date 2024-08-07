import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soapadish from "../images/soapadish.png"
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
            <p>
            <br></br><strong>The Body as a Place for Lost Things by Aster Haviland</strong>
            <br></br>
            <br></br><i>Previously published in Haviland's chapbook, "Lost Things"</i>
            <br></br>
            <br></br><i>After Donna J. Haraway’s “A Cyborg Manifesto”</i> 
            <br></br>
            <br></br>I want to get the word
            <br></br><i>Cyborg</i> tattooed on my body.
            <br></br>Maybe that’s why I shave
            <br></br>
            <br></br>my head. Why I tug my ears
            <br></br>down and get the razor as close
            <br></br>to the skin as possible. I’ll notice
            <br></br>
            <br></br>the next day in class if I’ve missed
            <br></br>anything. I’ll pull at the strands,
            <br></br>first cause I’m bored but then just because
            <br></br>
            <br></br>they’re there and they shouldn’t be. Right now
            <br></br>there’s a dinosaur on my thigh, a thin
            <br></br>black outline, a window for an array
            <br></br>
            <br></br>of different-sized gears. The merging
            <br></br>of organism and machine—I want a rook
            <br></br>on my ribcage and a lion
            <br></br>
            <br></br>on my breastplate, I want to look
            <br></br>like your common junk
            <br></br>drawer. Maybe a pack of double-A batteries
            <br></br>
            <br></br>will climb up my neck, and pennies,
            <br></br>and dimes, a hair tie I will never use.
            <br></br>There’s a corkscrew and a bottle opener 
            <br></br>
            <br></br>and I wonder how much liquor it takes
            <br></br>to loosen a robot’s tongue, to pixelate their screen,
            <br></br>jam their keys. Keys are also in the drawer—
            <br></br>
            <br></br>tattooed on the webbing between my fingers,
            <br></br>they clang together when I make a fist. I always
            <br></br>forget which one is for the house
            <br></br>
            <br></br>and which one I found in the dirt outside.
            <br></br>Both are lined with rust. Sharpies and magnets
            <br></br>and my older brother’s fake ID. 5’ 6”
            <br></br>
            <br></br>and his eyes are blue, but I don’t want
            <br></br>any color. Nothing but my natural red hue
            <br></br>and the bulging purple veins. There’s a baseball
            <br></br>
            <br></br>from a Mets game. A collection of two-dollar bills.
            <br></br>And for some reason, I’m programmed to think
            <br></br>they’re worth more than the bank says.
            <br></br>
            <br></br>Superman lighters, and coupons,
            <br></br>and Christmas cards from relatives
            <br></br>that we don’t like. Half-empty printer ink cartridges
            <br></br>
            <br></br>leaking down my ankle. I’ve been typing 
            <br></br>since I was eight. Pressing, clicking, clacking. One day
            <br></br>I’ll end up in a junkyard, maybe in the junk ocean,
            <br></br>
            <br></br>maybe beached. Find me with a metal
            <br></br>detector, sea glass pushing up into my jaw.
            <br></br>C Y B O R G written across my forehead.
            <br></br>
            <br></br>Recognize me, fingerprints rubbed raw
            <br></br>by ocean salt, genetic code tangled, my double helix
            <br></br>vaulted into a fisherman’s net. Trace the gears
            <br></br>
            <br></br>—find the key between my left thumb
            <br></br>and pointer, it belongs to the wind-up toy
            <br></br>on the back of my heel that’s been cut
            <br></br>
            <br></br>by the waves. Circuits splayed. Turn it
            <br></br>and watch everything here start to breathe.
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Aster Blysse Haviland (they/them) is a junior at Princeton University studying Comparative Literature and always questioning their life decisions. They enjoy dogs, robots, mermaids, and learning new languages. If you really like this poem, they have a chapbook out with more like it called "Lost Things" published under their previous name, 'Sam Haviland'.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
