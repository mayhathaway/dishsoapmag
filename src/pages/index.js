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
            <h3 className={indexStyles.postauthor}>H. M. Wilson</h3>
            <h1 className={indexStyles.posttitle}>In Fields and Bookshelves and Pockets</h1>
          <p className={indexStyles.posttext}>        
What am I doing? Wasting time among the trinkets. Ornaments and ashtrays and bookends. Next to the old toasters and microwaves and CD players. There’s a piece of printer paper next to them that reads “NOT TESTED” which seems to imply they don’t work. But I’m looking at a guy right now with a cart full of them. All different ones.
Clearly not worried about the return policy. He’s wearing clothes that don’t wrinkle. Shiny watch. Probably selling them for parts on eBay.
<br></br>
<br></br>Leave him to those. I’ve settled on this ceramic cow the size of my hand. God. It’s ugly. The cow-ness of it is barely discernible. Its head is huge. I mean really. In what context was this created. And who had it only to give it to Goodwill. Maybe someone made it. Maybe for a nativity scene. No, not serene enough for that. Heavy enough to be a paperweight. That might make more sense. On some farmer’s table, in a tucked-away office. You can just smell the hay and manure everywhere. Layer of dust and dander on everything if you look close enough.
<br></br>
<br></br>Not many farms left though. So not likely. Maybe it was on a bookshelf instead. In some professor’s study. Much more likely. It’d be that sociology guy. The rockstar of the social sciences. And where would he place it? Somewhere between Kant and Kerouac?
<br></br>
<br></br>Took his stupid class. Makes me sick just thinking about it. First question–<i>what social institutions do you participate in? Discuss</i>. I mean really. I turned to my neighbor and asked what he thought.
<br></br>
<br></br>He said, “I’m just here for credit.” Pulled out his phone.
<br></br>
<br></br>Turned toward the other and before I could say anything she said, “Isn’t he hot? I mean, not in like the usual way but in the silver-fox-Jeff-Goldblum way.”
<br></br>
<br></br>I tried a different seat in the next class. That was even worse. Next to a girl who wouldn't stop raising her hand. Craning her neck. Packing up my bags after class I saw her down there talking to him. She said something and he laughed, hand on the small of her back.
<br></br>
<br></br>I heard he’d host parties and invite students. I remember Charlie told me about those big built-in bookshelves in his study. I mean, to have a Victorian like that with a room called “study” these days. Probably has a “parlor” too. I wonder what social institutions he participates in.
<br></br>
<br></br>I can see my former classmate in the study with him as a party fades. He’d pull her aside. Ask her questions about her experiences so far. Then he’d blab at her. Whatever early excitement she had about him would fade. And while he talked, she’d walk over to the little cow facing <i>Critique of Pure Reason</i>. She’d turn it over, thinking about the serenity of a pasture. She’d see the sun catching little particles as it set. She’d hear gentle moos and crickets chirping. She’d wonder how she got there, in the study.
<br></br>
<br></br>“Found a new toy?” Alex asks. He has some jeans in a bag.
<br></br>
<br></br>“Just poking around. What’d you get?”
<br></br>
<br></br>“I think these’ll work, I didn’t want to try them on. Big line for some reason.” he says, in that gentle voice.
<br></br>
<br></br>Back in the parking lot, he ducks into the car, bends in half to get in. And we’re off. He throws his phone up and catches it, and then up again. Spinning it in quick movements.
<br></br>
<br></br>“What do you think trinkets reveal about us?” I ask over NPR.
<br></br>
<br></br>“What, like that cow you were looking at?” He puts his phone in the cupholder.
<br></br>
<br></br>“Yeah, sure. Like any of them.”
<br></br>
<br></br>“I don’t know. Maybe that people buy junk.”
<br></br>
<br></br>“Well, yeah.”
<br></br>
<br></br><i>In case you missed it</i>, the woman on the radio says, <i>this year, the students raised four million dollars for childhood cancer</i>.
<br></br>
<br></br>“Wow,” he says.
<br></br>
<br></br>I can’t help myself. I say, “I mean it’s not really for that.”
<br></br>
<br></br>“What?”
<br></br>
<br></br>“It’s not for childhood cancer. It’s for the University to research childhood cancer.”
<br></br>
<br></br>“Oh, well yeah. Still good,” He looks out the window, changing the subject, “Did you know that coffee shop is for sale now?”
<br></br>
<br></br>What do I say to that? I just nod. Of course I know the coffee shop I met Charlie in is for sale. Not like he’d know the history of it. There’s so much he doesn’t know. Being that I never told him. Being that I don’t really like him all that much. Except for maybe the physical stuff. Now I'm objectifying. I freely admit.
<br></br>
<br></br>“What do you think they reveal about us?”
<br></br>
<br></br>“What?”
<br></br>
<br></br>“I mean since you asked me. I wonder if you had any thoughts. The trinkets.”
<br></br>
<br></br>“Oh, well I guess I think they reveal a lot about us. How we see ourselves. How we want to be seen.”
<br></br>
<br></br>“You think so much.”
<br></br>
<br></br>“Maybe.”
<br></br>
<br></br>“Don’t you get tired of all that thinking?” He’s teasing, hand on my thigh.
<br></br>
<br></br>“Maybe.” I flash him a smile against my better judgement. Roll my eyes at myself. And him.
<br></br>
<br></br>Maybe this is all there is and it’s enough. It feels like it probably isn’t. Like I’ll always be remembering something else. Something else—the great killer of movement. Great killer of my movement at least. I’m feeling the drama as I’m thinking it. I really need to chill. Give it a few months. Hope the feeling fades.
<br></br>
<br></br>We pull into the driveway. He asks after unfolding himself, “You didn’t end up buying anything? Didn’t you need something?”
<br></br>
<br></br>“I didn’t need anything once I was looking.” We start walking toward the house.
<br></br>
<br></br>“You don’t want to try anywhere else?”
<br></br>
<br></br>“Not today.”
<br></br>
<br></br>“When’s everyone coming?"
<br></br>
<br></br>“I think 5.”
<br></br>
<br></br>“So—we have time?” Hand on the small of my back.
<br></br>
<br></br>“We have time.” I loop my arm through his as we walk. The cow’s not facing anyone now, upside down in my pocket.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
       H. M. Wilson is a survey researcher and writer from Central Pennsylvania who currently lives in Philadelphia. Follow him on Instagram at @woah_hope. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
