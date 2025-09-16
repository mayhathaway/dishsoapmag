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
            <h3 className={indexStyles.postauthor}>Keith J. Powell</h3>
            <h1 className={indexStyles.posttitle}>Chuck & Rose</h1>
          <p className={indexStyles.posttext}>
           Chuck landed hard on a Bermuda blue Oldsmobile Cutlass Supreme, cratering the hood and starring the windshield. For a moment, his world was a blissful, throbbing void. Then, it all came rushing back.
<br></br>
<br></br>He caught a bus home, treating himself to a sitting fare. Squinting through his phone’s ruined screen, he texted his AI supervisor, Tossed out of the fifth-story window again. Working from home the rest of the day. His neck and back screamed and shuddered at every sneaky bump and devouring pothole. To distract himself, he composed mental letters to books that had failed him. <i>The 4-Hour Workweek. Atlas Shrugged. The Giving Tree. Jonathan Livingston Seagull.</i>
<br></br>
<br></br>Two stops from home, his phone pulsed with a reply from the algorithm: Okay. Remember work is the priority. Chuck swallowed a sour notion of rebellion, debated his response, and settled on an American flag and a thumbs-up emoji. He paid his exit fare and stepped out into the cold. The bus rumbled off, belching a purple plume of exhaust as if waving goodbye.
<br></br>
<br></br>Rose was in the garage, warming a can of Hearty Potato Soup on a hotplate. The previous year, she suffered an accident at the plant—her right hand was pruned at the wrist. Insurance denied her a prosthetic replacement and instead offered her one of three options from a brochure that arrived in the mail: a CleanerU® 20-inch High-Speed Floor Buffer that clamped on just beneath her elbow, a propane-powered combination Bluetooth speaker and scale, or a pill that would make her forget she’d ever had a second hand. She chose the floor buffer. It was lighter than most models but still too awkward to navigate around corners and tight spaces. The garage was a temporary measure until their GoSupportMe campaign closed. Hopefully, then they could afford to make the house accessible.
<br></br>
<br></br>Chuck hunched on a stool while Rose combed bits of broken glass from his hair. Tiny glittering fragments plinked on the concrete like hail.
<br></br>
<br></br>“It’s never going to stop,” he said. “They’re going to keep taking and taking, until they’ve peeled everything away.”
<br></br>
<br></br>Rose set the brush down and squeezed his shoulder.
<br></br>
<br></br>“Not everything,” she said.
<br></br>
<br></br>He covered her warm hand with his cold one. The gentle, persistent hum of her buffer limb was a tiny elastic hope radiating through his body all the way down to his toes.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Keith J. Powell is a writer and editor based in Ohio. He is co-founder and managing editor of Your Impossible Voice and the author of the flash fiction chapbook Sweet Nothings Are a Diary If You Know How to Read Them (ELJ Editions). Visit <a href="https://keithjpowell.com"> keithjpowell.com</a> for more.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
