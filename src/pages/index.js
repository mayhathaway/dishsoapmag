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
            <h3 className={indexStyles.postauthor}>Lillie E. Franks</h3>
            <h1 className={indexStyles.posttitle}>Tomorrow</h1>
          <p className={indexStyles.posttext}>
          In the southwest corner of the Wonder Village Family Entertainment Center, almost hidden between the house of mirrors and the enormous, green helicopter drop, sits a squat, tin-roofed building with a sign that reads Tomorrow. Tickets cost $8 per person, less for children, and the ticket taker motions the patrons past a drawing on the wall of a family in a flying car. Inside, small, square boats, each holding 6 to 8 people, are carried on rails disguised by a shallow layer of water past animatronic dioramas of mankind’s glorious future. 
<br></br>
<br></br>As the boats set out into the tunnel, which is matte black lit with pink and green neon, a confident male voice calls out, “Prepare to blast off… into the wonderful world of 2015!” Patrons are usually too busy laughing at the once-exotic date to wonder why a boat would be described as blasting off. Soon, they see a hexagonal living room where a robot butler cleans the floor as a smiling woman in a polka dot dress feeds a casserole punchcard into her oven, but just before that, as a theremin warbles a dramatic theme, there’s a left turn that leaves the boat in perfect darkness. 
<br></br>
<br></br>That’s where the trans people sneak off. 
<br></br>
<br></br>At least, that’s what Mr. Robinson, who’s owned the park ever since his father passed away in 2020, thinks must be happening. All he knows for sure is the trans people get on the ride innocently enough, never carrying anything more than a purse or maybe an overstuffed tote back, but by the time the boat reaches the security camera by tableau of a school with rotating chalkboards and pencil sharpeners that crawl like mice, they’re gone. Or rather, gone from the boat. Not the ride. 
<br></br>
<br></br>The scenes in Tomorrow are designed to create the illusion of wide, expansive spaces. The woman with the casserole, for instance, is standing in front of what appears to be an open window, through which you can see a space shuttle ready to set off for the moon colony and a Buckminster Fuller influenced biodome. The vistas are only miniatures with painted backgrounds but in the dim lighting of the tunnel, they’re convincing enough, and they give it more reride value than you might expect. There’s always another detail to be spotted, another concept hidden in the distance. 
<br></br>
<br></br>That’s where the trans people are. Strolling to the pneumatic tube station. Holding hands, feet dangling, from the top of the two story tall public supercomputer. Being whisked along by the electronic walkway past the tunneling drill that bores into the earth. Managing the hydroponic gardens. 
<br></br>
<br></br>Every day when Mr. Robinson arrives at work, there are new letters waiting for him on his desk. The paper the letters are written on is always colored, and the envelopes usually match. Some are in cursive, with looping, calligraphic letters, while others are in barely legible shorthand and many in furious chickenscratch. Mr. Robinson reads every one, because he thinks that’s his job. By the time he’s finished, he has a knot in his stomach. 
<br></br>
<br></br>When Mr. Robinson wandered the park on his own for the first time, long before anyone ever thought to call him Mister, he told himself he had to go on every ride. Someday, he would own all of this, and that meant he had to know it, backwards and forwards. He started at the carousel by the entrance and snaked his way through, attraction by attraction. By the time he reached Tomorrow, he was nearly finished. 
<br></br>
<br></br>This is boring, he thought, as the darkness swallowed the boat. Who even cares about 2015? That’s ages from now. 
<br></br>
<br></br>But then, the first scene emerged before him, and a tightness inside him fell away, like a tired muscle unclenching. It wasn’t because of the smiling woman in the dress or the tin can robot with the beetle antennae. It was the window behind them. But not the window either, or the building that looked like the sun or the rockets you could actually fly on. It was the road. It was the fact that you could walk on it. You could walk from where he was sitting all the way to there, to the towers joined by pedestrian bridges, to space. He realized he was reaching his hand forward, out of the boat, and he pulled it back, instinctively.
<br></br>
<br></br>More days and more letters. The trans people have hung a pink and blue flag on top of the underwater bubble house. The trans people are waving from the deck of the airship. The trans people are bouncing in moon gravity. Some of the letters aren’t letters anymore. They’re objects. Shards of glass, razors. Bullets. Bags of animal guts. 
<br></br>
<br></br>Mr. Robinson isn’t sure how many people are even writing the letters. He tried to analyze the language, the handwriting, but he isn’t an expert. Sometimes he thinks it’s only one or two. Sometimes he thinks it’s hundreds. 
<br></br>
<br></br>Mr. Robinson stands in the loading bay of the ride and stares at the black maw of the tunnel entrance. The trans people are in there somewhere, he thinks. They’re kissing, or fighting, or transitioning, or whatever it is trans people do, but they’re in the walls, where they don’t belong. They don’t understand the work it takes to maintain a park like this. They don’t know what he owes to his father.
<br></br>
<br></br>Are there fewer people because it’s the off-season or is it the boycotts the letters threatened?
<br></br>
<br></br>He returns with the work crew the next morning. One of them puts up yellow caution tape outside while the others follow him into the ride. The dark water splashes around their ankles as they round the corner and face the house of the future. 
<br></br>
<br></br>“Dust detected. Deploying mop,” the metal butler intones and tries to push the men off the platform. Mr. Robinson grabs a hammer from one of the workers and smashes the robot’s head clean in. Wires with blinking LED lights\ dangle from the jagged hole, the red and green pulses slowing down and then stopping. 
<br></br>
<br></br>“Why don’t you leave us alone?” asks the animatronic woman. “Why don’t you leave us alone?” 
<br></br>
<br></br>Mr. Robinson strides up to the window, where the spaceship is lifting off to bear the trans people away to other futures, other corners of possibility. He shoves his hand through the plastic film that doubles for glass and grabs at the rocket, but he’s too late. It’s already out of view and he’s nearly burnt by the exhaust. He slams his fist down in frustration and the impact knocks over the biodome, which rolls onto the kitchen floor and cracks.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Lillie E. Franks is a trans author and teacher who lives in Chicago, Illinois, but is normal about it. You can read her work at places like Flash Frog, Scaffold, and McSweeney’s or follow her on Bluesy at <a href="https://bsky.app/profile/lilliekoi.bsky.social">@lilliekoi.bsky.social</a>. She loves anything that is not the way it should be.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
