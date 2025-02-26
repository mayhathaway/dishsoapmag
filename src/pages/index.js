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
            <h3 className={indexStyles.postauthor}>Janice Leadingham</h3>
            <h1 className={indexStyles.posttitle}>Unexplained Phenomena of Invisible Women</h1>
          <p className={indexStyles.posttext}>
          For me, anyway, it began with my outside corners. The cuticles on my pinky toes began to blur, and then the tiny nails there, first, the one that was always split, and with the nails the chips of polish that I bought for way too much money at the jewelry shop on Williams because of the way it shone the precise mother of pearl slickness of a wet seashell, and, after that, the wispy, blacks hairs on my toes that, yeah, ok, I normally shaved off if I was wearing sandals or slippers, soon followed by the soft creases above the joints earned by decades of stepping lightly and walking on eggshells. 
            <br></br>My great aunt Jean started the fade at 40 if you can believe! But that was a different time, 50 became the new 40, and now it’s more like 60. I’ve just always been an early bloomer—peak blossomed and deadheaded before my season was ever even over.
            <br></br>It came on faster after my toes. Moved up to my split ends but that was convenient, really. Something like a magic trick. The deep lines burrowed into my forehead by years of emoting that yes, I am listening. Souvenir freckles from beach vacations when the sunblock was lost either to TSA or an impossible tote bag. Tattoos disappeared in my sleep—the lamb gone from my hip, stars from my wrists, the milk bottle holding fine daises that stood just above that little knot of bone that jutted out by my ankle. Then, that little knot of bone that jutted out by my ankle.
            <br></br>My father’s nose suited him better anyhow. My mother’s pointy ears. The birthmark like a smudge of dirt above my brow. Scars from kindergarten chicken pox, little divots all over as if a beetle-sized creature had scooped out my skin like ice cream. Keratosis pilaris around my smile from the urge to over moisturize the frown lines eroded into the flesh there from saying it’s no problem!! And, no worries if not!! 
            <br></br>The last bit of me to dissolve from view was an ashy kneecap, a hint of butt-crack. An absurd, frankly embarrassing, peep-show. They threw a last-minute party for me at the office where I worked for more than half of my life, alas, no one could remember my name long enough for the grocery store bakery lady to add it to the top of the Chantilly goodbye cake. 
            <br></br>I started off so tentatively—taking long walks at night through the city, untraining myself to watch for threats, the perked ear for footfalls, the itch between my fingers where I once weaponized my apartment keys. I noticed, for the first time, the way that tall glass building on Pearl St. throws the moon back at itself. I watched the bats circling the oak trees in the park. I wandered into a midnight movie and out of a midnight movie. It’s as if my whole life until this point was a joke on a popsicle stick, the punchline to which was revealed only once part of me was devoured. 
           <br></br>Then, I met some others at the carnival by the river. They were climbing the big spokes of the Ferris wheel singing “Miss World” off of Hole’s seminal album <i>Live Through This</i> call and response style and spitting on the crowd below. They were stealing bites of cotton candy from the couples waiting in line for the scrambler, and spooking anyone who tried to use the porta-potties. They rode the Chaos Coaster, their hands in the air, their hair whipping in the wind, over and over and over, wild and ugly and beautiful too, confounding the worker who couldn’t get the safety bar in the front row to release. They welcomed me, took me in, told me the truth—we are invisible to everyone except ourselves.
           <br></br>That is how it goes, we find each other, group together—a family, a herd, a gang, a murder, a bushel. A swarm of bees. A shrewdness of apes. What is the collective noun for invisible women? Trick question, it doesn’t matter if you’re unable to count us, to see us coming.
           <br></br>We are frequently a Spooky Nighttime Alley of Invisible Women, and a Closed to Everyone but Us Karaoke Bar That Is Only Playing Fiona Apple of Invisible Women. Once, even, an Impossible to Explain Bank Robbery at the Corner of 55th and Fremont of Invisible Women.
           <br></br>Sometimes, we are a Haunting of Invisible Women—the oOOOoooOOOoo in cemeteries and old houses, the lights flickering, and the tv turned back on after you’ve left the room? The poltergeists that rattle your doors, and the stones falling on your roof? That feeling of being watched, your little arm hairs standing on end? That’s us! We do all that! 
           <br></br>And why not? We are living ghosts, tethered only to one another so that we don’t float off like wrinkled balloons after the party is over. Only, that analogy doesn’t really work because we are the whole party. 
           <br></br>The staggering number of missing people in state and national parks within the US? The Spontaneous Human Combustion trend in the late ‘80s? The Isabella Stewart Gardner Museum art heist of 1990? We are the answers to so much. 
           <br><br>But right now, at this moment, we are just a Park of Invisible Women, as in there are lots of us in this public park—lying in the grass, twirling the stems of plantain weeds around our pointer fingers to shoot the seedy heads at one another, some of us are even napping, the sun warming us the very same way it always has, sure, but now we are able to close our eyes, to breathe the warmth and the chlorophyll in deep, delighting in the breeze that slips over our crystalline bones. Fearing no shadows. Nothing.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Janice Leadingham is a Portland, Oregon based writer and tarot-reader originally from somewhere near Dollywood, Tennessee—Exit 407 off of I- 40. Her work has appeared in Reckon Review, HAD, the Northwest Review, The Bureau Dispatch, Bullshit Lit, JAKE, and Milk Candy Review, among others. She was nominated for the Pushcart, Brave New Weird, and Best of the Net prizes this year, and recently selected for Best Small Fictions 2024. She is @thehagsoup everywhere and hagsoup.com.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
