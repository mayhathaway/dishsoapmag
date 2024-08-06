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
          <div className={aboutStyles.mission}>
            <p>
            After Donna J. Haraway’s “A Cyborg Manifesto” 

            I want to get the word
            Cyborg tattooed on my body.
            Maybe that’s why I shave

my head. Why I tug my ears
down and get the razor as close
to the skin as possible. I’ll notice

the next day in class if I’ve missed
anything. I’ll pull at the strands,
first cause I’m bored but then just because

they’re there and they shouldn’t be. Right now
there’s a dinosaur on my thigh, a thin
black outline, a window for an array

of different-sized gears. The merging
of organism and machine—I want a rook
on my ribcage and a lion

on my breastplate, I want to look
like your common junk
drawer. Maybe a pack of double-A batteries

will climb up my neck, and pennies,
and dimes, a hair tie I will never use.
There’s a corkscrew and a bottle opener 

and I wonder how much liquor it takes
to loosen a robot’s tongue, to pixelate their screen,
jam their keys. Keys are also in the drawer—

tattooed on the webbing between my fingers,
they clang together when I make a fist. I always
forget which one is for the house

and which one I found in the dirt outside.
Both are lined with rust. Sharpies and magnets
and my older brother’s fake ID. 5’ 6”

and his eyes are blue, but I don’t want
any color. Nothing but my natural red hue
and the bulging purple veins. There’s a baseball

from a Mets game. A collection of two-dollar bills.
And for some reason, I’m programmed to think
they’re worth more than the bank says.

Superman lighters, and coupons,
and Christmas cards from relatives
that we don’t like. Half-empty printer ink cartridges

leaking down my ankle. I’ve been typing 
since I was eight. Pressing, clicking, clacking. One day
I’ll end up in a junkyard, maybe in the junk ocean,

maybe beached. Find me with a metal
detector, sea glass pushing up into my jaw.
C Y B O R G written across my forehead.

Recognize me, fingerprints rubbed raw
by ocean salt, genetic code tangled, my double helix
vaulted into a fisherman’s net. Trace the gears

—find the key between my left thumb
and pointer, it belongs to the wind-up toy
on the back of my heel that’s been cut

by the waves. Circuits splayed. Turn it
and watch everything here start to breathe.
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={aboutStyles.mission}>
            <p>
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
