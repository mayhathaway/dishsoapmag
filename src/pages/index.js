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
            <h3 className={indexStyles.postauthor}>Sarah Mills</h3>
            <h1 className={indexStyles.posttitle}>Notes App Poem Written on an Unseasonably Warm November Day While the Dishwasher Runs</h1>
          <p className={indexStyles.posttext}>
          --Late fall, and so many flowers dragging their pink heels.
 <br></br>
<br></br>--I understand their hesitation. We hold on to that which tricks us into feeling alive. 
 <br></br>
<br></br>--I keep the dishwasher full because I have known emptiness. And because I like how it sings to
itself.
  <br></br>
<br></br>--On nights I can’t sleep, I run the dishwasher and I make lists in my head.
 <br></br>
<br></br>--A list of my favorite cereals when I was a child: Golden Grahams, Raisin Bran, Corn Chex,
Cinnamon Life.
 <br></br>
<br></br>--Business ideas: a leaf blower but instead of leaves it blows you into an alternate dimension where
everything is okay. 
 <br></br>
<br></br>--Is this anything?
 <br></br>
<br></br>--If I fall asleep while the dishwasher runs, it sanitizes my dreams.
 <br></br>
<br></br>--Don’t forget to buy dish detergent. Toilet paper. 
<br></br>
 <br></br>--A mint candy on the ground, gleaming like a dinner plate. The fine china we never use.
<br></br>
<br></br>--I can't see my breath in the cold anymore.
<br></br>
<br></br>--I have become so intimate with longing, the same useless scarf is wrapped around both of our
necks. 
<br></br>
<br></br>--Will I spend the rest of my life singing over my grief?
 <br></br>
<br></br>--A drought but I'm drowning. 
 <br></br>
<br></br>--A flood but it’s just the dishwasher overflowing.
<br></br>
<br></br>--A list of everything I’ve had to bury, then excavate, to get here.
<br></br>
<br></br>--Putting poems in the dishwasher on the heavy cycle. Top rack only.
<br></br>
<br></br>--Rinsing out these words like an empty jar of spaghetti sauce. Recycling them. 
<br></br>
<br></br>--Morning lawn, a massacre of maple leaves.
<br></br>
<br></br>--Mischief Night, toilet paper swaying from branches like streamers for a party no one attended. 
 <br></br>
<br></br>--And then, without hesitation—the wind.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Sarah Mills’s poetry has appeared or is forthcoming in RHINO, trampset, Jet Fuel Review, HAD, Rust & Moth, Pithead Chapel, Beaver Mag, Identity Theory, The Shore, Up the Staircase Quarterly, and elsewhere. Her work has been nominated for Best of the Net and the Pushcart Prize. She is online at sarahmillswrites.com, and on Bluesky- sarahmillswrites. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
