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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab) /
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Nick van Osdol</h3>
            <h1 className={indexStyles.posttitle}>Things I thought about while driving across the country</h1>
          <p className={indexStyles.posttext}>        
What goes on in McDermitt, Nevada. What goes on in Unadilla, Nebraska. What it’d be like to drink four beers in Montezuma, Iowa (I only had two). What it’s like to live in Palestine, Tennessee. You know, considering. What Cape Disappointment in Oregon is like (foggy). Whether New Moscow, Ohio, harbors a statistically significant number of latent communist sympathizers. Who named it that. How many European cities with a population above 50,000 have a namesake somewhere in the United States. How many, beyond, say, Paris, Texas, the modal American could name off the top of their head. Here’s another: Prague. There’s actually a Prague in both Oklahoma and Nebraska. The more you know.
<br></br>
<br></br>Whether the thought of giving a Turkish hair transplant to a bald eagle has ever occurred to anyone but me. Whether the medium-sized creature I saw scampering over ice and snow near Jeffersonville, Indiana, was a woodchuck or some other similar species. Why hawks so often sit on telephone wires or electrical distribution equipment near roadways. What percentage of Americans know that a prairie is a scientific term for an ecosystem, not just some other amorphous, ambiguous thing. Whether there are personal injury lawyers who write breathtaking poetry. Why there aren’t billboards adorned with poetry. What it would cost to adorn a billboard in a random, out of the way place with a poem of my own. Which of my poems I’d put on it, and why. Whether anyone would stop to take a photograph of it. 
<br></br>
<br></br>How many road fatalities there are on different states’ highways every year (in Nebraska, in 2024, there were 252, as reported by a sign cautioning drivers to drive safely and wear a seat belt). Whether and when we, as a society, will look back in abject horror and astonishment at the level of senseless vehicular violence we once acquiesced to.
<br></br>
<br></br>How disgusting the modal motel room must be, if you could really see everything. How many people have sex with strangers they meet at motels. How disgusting the modal gas station restroom must be, if you could really see everything. How many people have sex with strangers they meet in gas station restrooms. What the finer intricacies and social norms of sex work at trucker rest stops entail. Whether someone has written a sort of ethnographical or sociological study thereof. How many people actually pray in the truckers’ chapels they sometimes have at some rest stops. Who pays for the chapels. How many people have sex in those truckers' chapels. Whether there’s a term, like the mile high club, for the people who have had sex in them. What a catchy term for that might be.
<br></br>
<br></br>What the heck I’m out here looking for, doing all this driving, besides for interesting photo opportunities, and a way to pass the time. Whether and when the next unexpectedly wonderful thing will happen to me. When I will see a coyote again. What the larger theories and symbolism of encountering coyotes is across different belief systems and traditions. What it would feel like to be a coyote. How the way they think must differ from how I do. Why coyotes are alone at times and why they travel in packs at others.
<br></br>
<br></br>Why I’ve decided to push myself to the periphery, both to the physical periphery—into and across America’s hinterlands—and the social periphery, isolating myself, once such an ardent pack animal, now mostly alone in the cab of my truck. Whether the way I and coyotes think might not differ that much. Whether I’ll make it to the next gas station as I cross the notoriously treacherous, six-mile, six percent grade over Dead Man’s Pass in Oregon. Why I missed the last sign saying “no services for [X] miles” before going over the pass. How much effort, time, and money that will cost me if I run out of gas on this pass. 
<br></br>
<br></br>Whether I might meet my demise out on these roads someday. Or today, because this fog is so dense, and the night is so dark, and I can barely see ten feet in front of me. Statistically, in aggregate, it’s more likely with every passing mile, I guess. Though any individual, modal mile isn’t any more or less risky than the last. They’re like a roll of the roulette wheel; no matter how many times it’s landed on red already, that doesn’t make landing on red more likely on the next spin. Whether the modal American understands that about statistics.
<br></br>
<br></br>Whether I digress on tangents like the one above and drives like this to distract myself from the real stuff, whatever that is. Whether putting another fifteen thousand miles in behind the wheel will put sufficient distance between me and the past to create the space for something new to arise. How remarkable it is how little can happen for so long. How I keep revolving around the same spaces in my interiority under the same sun, moon, and stars.
<br></br>
<br></br>Whether and when, someday, maybe tonight, I’ll finally run out of gas without making it to a station, or my engine will break down, and my cycles of rumination will cease alongside my car as it grinds to a halt somewhere in a ditch. Whether I might finally stop thinking of you then, too. Whether all this isn’t an attempt to decrease the frequency with which those thoughts return. Then again, given how far I’ve driven and how faithfully my thoughts still return to you, I’m not convinced it will work, nor that that was ever my project. In fact, the further I drive, the longer I go, the less convinced I am that any of this ever ends at all.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Nick van Osdol is a writer, investor, and startup/philanthropic advisor focused on limiting the harms of climate change. He enjoys reading and writing fiction and poetry, as well as film photography, and stick shift cars with no SIM cards. At present, he lives on the road in his 1991 Mazda B2200.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
