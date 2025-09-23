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
            <h3 className={indexStyles.postauthor}>Sharon Aruparayil</h3>
            <h1 className={indexStyles.posttitle}>The Lizard That Lives in My Chest</h1>
          <p className={indexStyles.posttext}>
           The first time I felt her move, it was in the pause between two breaths.
<br></br>
<br></br>A slip of warmth in the hollow of my ribs, the faintest scrape of claws against bone. I thought it was heartburn, but then came the sound: wet, unformed, something pressed too long in the silence, cradled in the soft dark of my lungs. It flexed its voice like a new limb. <i>The lizard had begun to sing</i>.
<br></br>
<br></br>Girls like me cannot call themselves broken, so the lizard speaks for me. She clicks and hums and drags her small claws on my ribcage when I lie. I lie a lot.
<br></br>
<br></br>She came after you left.
<br></br>
<br></br>I was standing outside the hawker stall at the end of our line, the one where the uncle with the lazy eye and dragon tattoo stirs fire through a wok like it’s a living thing. You believed the best food always came from the street: we’d crowd with the men in their penguin suits fresh from work, balancing paper plates piled high with firetruck-red noodles, clouds of soft egg, and those papery curls of cabbage you hated. I would watch you watch the flames leap in that wild, feral dance, the smell of gasoline braided into the heat of chili powder.
<br></br>
<br></br>The night it happened, I ate the noodles alone, squatting on the curb like a teenage boy hiding a cigarette. The paper plate sagged under its own grease until it split, dropping everything onto my shoes with a sad, wet thump. The eggs scattered on the asphalt like accusations, fiery red and angry, as the men in the penguin suits did not spare me a pitying glance.
<br></br>
<br></br>The lizard crawled up from somewhere just behind my lungs, licking the salt off my insides. I chewed too fast, my throat tight, because I could feel her growing in my chest. She wasn’t large then, no bigger than the shape of your thumbprint in the corner of my bathroom mirror. But I knew. I <i>knew</i>. I haven’t stopped feeding her since.
<br></br>
<br></br>She eats guilt first. Thick slabs of it. Fried in mustard oil. She eats the roti I couldn’t finish the day I saw someone wearing your dupatta pattern in the market. She eats the photos I keep deleting and redownloading, deleting and redownloading, like some fever I don’t know how to cure. And still, she is hungry. She is always hungry.
<br></br>
<br></br>She’s grown now. Long and glossy. A little green, a little gold. Tail curled like a question mark. She paces when I think of you with someone else. She sings when I pass the place you first kissed me, that stupid corner outside the shoe store, all neon lights and potholes, but you had said, “I don’t care, come here,” and pulled me in like I was the last thing worth holding.
<br></br>
<br></br>Once, she asked for your name and chiseled it into the curve of my spine. I think she remembers the way you held my ankle under the table while my uncle ranted about “<i>those types</i>” on the news. The blows were slow, deliberate, but each one resonated like a bell inside my chest, echoing the summer you were sent away, and returned a stranger.
<br></br>
<br></br>I wanted to tell her to stop, to wrench myself free, but my body folded toward her anyway, magnetized by the rhythm of the strikes. The lizard, slick and impatient, clawed at the hollows of my ribs, each scrape igniting the memory of your hand holding mine under the table, your whispered defense “I’m not that type,” and the sting of his judgment, all refracted through a thousand versions of the moment. I could feel the chisel split the air, split my breath, split the timeline itself—summer, now, and always—into a tangle of pain and memory. I bled for a week.
<br></br>
<br></br>The lizard prefers nights now. She hums through my teeth and vibrates behind my collarbone, and sometimes I think she is keeping time, marking the days I’ve survived without you like some kind of internal metronome. She sings louder when I heat up day-old noodles and pretend I’m eating them with you, sitting on those broken stools, laughing at your stupid jokes.
<br></br>
A friend said I should try dating again. I laughed so hard the lizard screamed.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Sharon Aruparayil is a writer, researcher, and experimental psychologist exploring memory, migration, and myth. Her work moves between speculative fiction and intimate nonfiction, returning often to themes of grief, desire, and fractured belonging. Based in Dubai, she is currently working on her first book.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
