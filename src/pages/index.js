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
            <h3 className={indexStyles.postauthor}>Claire Salvato</h3>
            <h1 className={indexStyles.posttitle}>Ars Poetica as Transcription</h1>
          <p className={indexStyles.posttext}>        
<i>Last autumn, I met Rita Dove at the reception of a literary event in Brooklyn.The following is not a transcription of our conversation. </i>
<br></br>
<br></br>RITA
<br></br>Today the day is warm. Today the day is good enough to soak. 
<br></br>
<br></br>CLAIRE
<br></br>Today the day is darker than Montreal in 2022. 
<br></br>
<br></br>RITA
<br></br>Today the day is softer than a prisoner’s bar windows. A.O. Scott said the day gets warm before it explodes. Remember, minor characters make major endings.
<br></br>
<br></br>CLAIRE
<br></br>Today the day is good enough for me to wake up. Today I witnessed the sun crouching down underneath a flat tire. My friend Celia used to wear her head in a basket. I saw her take a picture of her head while crouching under a lampshade. She said before she crouched, “Today the day is good enough.”
<br></br>
<br></br>RITA
<br></br>She have breakfast?
<br></br>
<br></br>CLAIRE
<br></br>Rarely. 
<br></br>
<br></br>RITA
<br></br>Today the day is warm enough for you to write. 
<br></br>
<br></br>CLAIRE
<br></br>I’ll write under the sun. Two nights ago—that was another Friday on the road. I asked an empty gas station if I could use the bathroom. I asked twice. Then, the sun spalled and the sky went dark. 
<br></br>
<br></br>RITA
<br></br>How many times can you wake up on the same day?
<br></br>
<br></br>CLAIRE
<br></br>Infinity times. Enough times. 
<br></br>
<br></br>RITA
<br></br>The day rises as long as the bard holds the page up to the light. Blessed be the day I learn to turn on my desk lamp. 
<br></br>
<br></br>CLAIRE
<br></br>I’m the one who wears the heels in my house. Who wears the heels in your house?
<br></br>
<br></br>RITA
<br></br>I’m Dorothy for Halloween. I’ve got on my shiny red, but I’m not old enough to wear heels. Maybe next year.
<br></br>
<br></br>CLAIRE
<br></br>You can borrow mine!
<br></br>
<br></br>RITA
<br></br>This time, I’d want to be Toto, skipping down the yellow brick road. But it’s night. And dogs don’t know how to skip. The coming Halloween will be my seventy-first. 
<br></br>
<br></br>CLAIRE
<br></br>You’ve been pretending since Hitchcock made that movie about birds. Today the sun is so savory, I could do a saltbath in its saline. 
<br></br>
<br></br>RITA
<br></br>It’s all pretend, dear. 
<br></br>
<br></br>CLAIRE
<br></br>Does that apply to all writers? Or only the ones in New York City?
<br></br>
<br></br>RITA
<br></br>I used to go out and get my feet stuck under this one manhole ring in Williamsburg. Williamsburg is the sunniest.  
<br></br>
<br></br>CLAIRE
<br></br>Is that what you tell Remnick?
<br></br>
<br></br>RITA
<br></br>Oh, if the sky doesn’t just get so dark these days. Every morning, I wake up and check my phone. Do you know what it says? It says it’s still the same day. I wake up over and over and over again and then I realize: “Oh my god,” it’s been an era and forty years since the evening began. I’m in the same bookstore talking to you about the sun. The water is too cold, my water is all fucked. Look outside the window. It’s another series of the Monet lilies; it was that last night, too. They always play Graceland. They always play Graceland and then they turn it off. My husband wears his cap backwards because he is afraid he is losing his hair. I don’t want him to lose his hair. Please, can someone just tell me why it is always so dark? Why is it always just so dark? Who’s there? Who knows about this? 
<br></br>
<br></br>CLAIRE
<br></br>Two-thirds of my conversations are in my head. Today is warm enough to write. 
<br></br>
<br></br>RITA
<br></br>Today was hotter than four nights ago. What was it that night? Low twenties? I’ll check. 
<br></br>
<br></br>CLAIRE
<br></br>Clearer skies, too. 
<br></br>
<br></br>RITA
<br></br>Do you lie in your real life?
<br></br>
<br></br>CLAIRE
<br></br>Yes, Rita. I lie. The first time I lied, the Gaia cracked open and the iridescent yolk churned and churned and churned, and once the paste turned silky and pale, I chewed the lie down and waited for the yolk to rupture into a thousand and one bites. And there it lives, the yolk. It simmers in my stomach. I carry it around, wondering when I’ll want to give in, when it’s time to flip myself inside-out. 
<br></br>
<br></br>RITA
<br></br>You’re the grownest woman I ever met. 
<br></br>
<br></br>CLAIRE
<br></br>I get scared when the lights go off. 
<br></br>
<br></br>RITA
<br></br>Today the day is curious enough to say that you are scared of being alone.  
<br></br>
<br></br>CLAIRE
<br></br>Not everyone is an artist. 
<br></br>
<br></br>RITA
<br></br>Not everyone is an artist. What was it like, being my age?

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Claire Salvato, an incoming student at Barnard College, was born and raised in Singapore as an American expatriate. Her work has appeared in Your Impossible Voice (forthcoming), The New York Times Learning Network, The Eunoia Review, Nowhere Girl Collective, and Magus Mabus magazine.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
