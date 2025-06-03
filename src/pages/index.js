import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import anaphora from "../images/anaphora.jpeg"
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
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Dan Weaver</h3>
            <h1 className={indexStyles.posttitle}>Don’t Worry, This is My Second Rodeo; Let Me Tell You How Rodeos Work</h1>
          <p className={indexStyles.posttext}>
        So this is your first rodeo? Not me. I’ve been to one rodeo before this rodeo and at that rodeo I was like a newborn baby just slobbering around and spitting up and messing myself during the entire rodeo because since it was my first rodeo I didn’t know a single thing. So I know how it goes. I understand why you look and smell like that. I’ve been there.
<br></br>
<br></br>Now though, here at this rodeo, I know about rodeos. I’ll tell you about them but you won’t get it. It will be impossible for you. But I’ll tell you anyway. The first thing to know about rodeos is that there are horses. The horses are there to sort of run the show. There are eight to ten horses depending on what region you are in. This region of this rodeo we are at tonight is the upper outer region so we obviously have eight horses.
<br></br>
<br></br>The horses will come out in a line and each horse will be wearing the sports jersey of its favorite sports team. All horse’s favorite sports team is the Cincinnati Reds. So they will all be wearing Cincinnati Reds jerseys. The jerseys will have each horse’s name on the back. All horses are named Johnny Bench.
<br></br>
<br></br>One Johnny Bench will then call for a rider. Which Johnny Bench does this will be determined by rolling the 8-sided die. This is the Main Johnny Bench. The rider will present themselves at the opposite end of the ring, from their pen. We clap. All riders live in that pen over there. Each rider was hatched from a Johnny Bench egg. Don’t worry about the eggs for now.
<br></br>
<br></br>The rider will climb on top of the Main Johnny Bench and will call for silence. We become silent. The rider will perform an episode of Perfect Strangers but everyone is Balki. Larry is Balki and Balki is Balki and Mary Anne is Balki and Jennifer is Balki. When the episode is over the other Johnny Benches will neigh Nothings Gonna Stop Me Now. We remain silent.
<br></br>
<br></br>The Main Johnny Bench will then remove the seeds from the throat of the rider. Riders are born with seeds in their throats and it doesn't bother them. The seeds are of the rare and beautiful jade vine, native to the rainforests of the Philippines. The Main Johnny Bench will plant the jade vine in the center of ring and spin three times. We face east and recite the incantation of successful pollination to the cave nectar bat colony situated at the east end of the ring.
<br></br>
<br></br>The jade vine will immediately mature and climb the Main Johnny Bench and continue up onto the rider. The rider will make outstretched arms and the jade vine will crawl along them. It will then drop its iridescent turquoise inflorescences which will bioluminesce in the black of night. The guy in charge of the arena lights will turn off the arena lights. The cave nectar colony will emerge and do its thing pollinating the inflorescences. We clap.
<br></br>
<br></br>The Main Johnny Bench reaches up and removes the inflorescences from the vine. It makes a nest. The Main Johnny Bench lays its egg.
<br></br>
<br></br>The guy in charge of the arena lights will turn back on the arena lights. The remaining riders exit their pen and gather the Johnny Bench egg, rolling it back to the pen. We clap. The cave nectars retreat to the east.
<br></br>
<br></br>Then the rider on the Main Johnny Bench backflips off the horse’s back and returns to their pen. All the Johnny Benches leave. We clap. And then the rodeo is over. That’s how rodeos work.
<br></br>
<br></br>A man in the seat behind me has tapped me on the shoulder and said something quietly into my ear. Here is what he said: he said that this is also his second rodeo and that he’d just like to point that out. He said he has recently lost his mother. He said her pipes rusted and toxins from the deep seeped into her plumbing. This happens every rodeo.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
          Dan Weaver writes in Vermont. He's on Bluesky: <a href="https://bsky.app/profile/supernaturalfeat.com">@supernatural-feat.bsky.social</a>.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
