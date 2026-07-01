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
            <h3 className={indexStyles.postauthor}>Lane Devers</h3>
            <h1 className={indexStyles.posttitle}>Lua</h1>
          <p className={indexStyles.posttext}>        
I gathered all the evidence I exist
<br></br>and brought it to the DMV. You exist!
<br></br>They said, and then revoked my driving
<br></br>privileges. I blew it off, went to a museum
<br></br>and stood in front of a crystal as tall as me,
<br></br>thinking of the wind or the river, that gutted
<br></br>it into its shape, whistling through caves
<br></br>somewhere in Idaho, or the badlands
<br></br>of North Dakota. I was only okay
<br></br>at skeet shooting the one time I went
<br></br>in Oregon. I kept asking everyone:
<br></br><i>what are these little orange things,</i>
<br></br><i>and why do we want to kill them?</i>
<br></br>People laughed, but I’m sick
<br></br>of myself, or sick of making jokes
<br></br>to cut through the bitterness of winter.
<br></br>I went to Coney Island and listened
<br></br>to the screams from the roller coaster
<br></br>while I stared at the Atlantic.
<br></br>I want to tell you about the time
<br></br>I wrecked my car to my favorite
<br></br>Mac Miller song, the sky was twinkling
<br></br>yellow with smog, the same shade as the album
<br></br>cover. Poems are a psychedelic thing,
<br></br>they move in the shape of a river
<br></br>or with the lyricism of a song,
<br></br>it’s so embarrassing, but someone has got
<br></br>to do it. Once I looked after a small grey dog
<br></br>named after the saddest song I know.
<br></br><i>Lua</i>, I said. <i>Lua only bite my enemies, please.</i>
<br></br>Tale as old as time: poet full of anger
<br></br>like an overstuffed Piñata, beating
<br></br>and beating at himself with a bat.
<br></br>Remember when we drove to the beach
<br></br>in the middle of the night because we needed
<br></br>to remember the coast's thinning hairline, the trees
<br></br>burned back at the scalp, and we almost hit a coyote
<br></br>but missed it by a few feet. I turned on the speaker,
<br></br>it wasn’t Mac Miller. Not yet. I don’t want to
<br></br>get to the part where my blue car crumbles like a wave.



            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Lane Devers' work has appeared in places like The Offing, Peatsmoke Journal, and The New Ohio Review. He is an MFA candidate at Columbia University.
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
