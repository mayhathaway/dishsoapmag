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
            <h3 className={indexStyles.postauthor}>Maura Monaghan</h3>
            <h1 className={indexStyles.posttitle}>Things Left Out of the Listing</h1>
          <p className={indexStyles.posttext}>
          The wooden balcony could be a fire escape if you needed it to. Or, that’s what the landlord said when he got pushed about safety regulations. The yard below was paved over, blades of grass barely squeaking up by the sagging metal fence on the far side. The fence gave way to a network of alleys and ground floor entrances to other apartments.
<br></br>
<br></br>At eye level from the elevated deck – you thought “balcony” was a bit too aspirational – was a sea of white shingles and single glazed windows, and dim cold lights in other kitchens: dirty sponges on the sills, bottles of dish soap with green slime congealing around the lids, an occasional “shut the fuck up!” or “it’s open!” floating out from the labyrinth of sliding doors and splintered stairs.
<br></br>
<br></br>Coffee grounds piled up in the grout between kitchen tiles. They stuck to your socks on Saturday mornings. There was an in-unit washer but no dryer, so in the winter you had to hang all your wet clothes up by the stove.
<br></br>
<br></br>The first time your neighbor Gabe came over it was to help you get a spider out of the shower. You gave it a real shot, you said, even poked it with a broom, but then it started crawling and you got so freaked out you had to give up and wash your hair in the kitchen sink. Within three seconds he scooped it up and placed it on the splintered wood outside, sliding the door shut softly. When you asked for help you’d assumed he was going to kill it.
<br></br>
<br></br>The next time he showed up he had a bag of groceries and a bottle of wine tucked under one arm. You tried to open the wine yourself, but you’d only just graduated from twist-off caps and butchered the cork so badly that pieces of it floated in your glasses at dinner. “It enhances the flavor,” you’d said and he laughed, swilling the wine around his cup and sucking a mock-sommelier breath through his nose.
<br></br>
<br></br>You got used to pulling a dry sweater over your head and smelling his cooking.
<br></br>
<br></br>One Sunday in your room he read the spines of all the books piled on the dresser. You had no room for a bookshelf, but all the time in the world back then to read. Gabe wasn’t much of a reader but he did try. He started The Old Man and the Sea once, to see why his dad liked it so much, but didn’t get it and gave up about halfway through.
<br></br>
<br></br>It was a drafty winter on that cramped street, and the radiators could only partly dull the chill; could soften it but not drive it out completely. The bedroom had two external walls with no insulation, so it was the coldest part of the apartment. On the worst nights you’d both pull the covers up over your heads and exhale until enough warm air was trapped under the duvet.
<br></br>
<br></br>The bedroom door hung high on its hinges and didn’t have a real lock, just a hook that slotted into a metal ring on the wall. It’d swing open an inch or so whenever a draft came through. Some nights you’d both lie there watching the door open and close, pretending the movement was magic. Other nights the constant thudding would grate on your nerves and you’d get up to stack your hardcovers in front of the door, letting all that hard-earned warmth out of the bed in the process.
<br></br>
<br></br>The biggest stove burner never caught a flame, so you had to turn the gas on and then start it with a lighter. There was a thin layer of mold on most of the windows, where the condensation dripped onto the sashes. You had to wipe them down once a week with an old t-shirt.
<br></br>
<br></br>The wood of the front door would always swell and stick in the frame when it rained. The last time Gabe ever left your apartment he had to yank the handle three times, really put his weight into it, just to wrestle the door open. It would’ve been funny if it were anyone else leaving.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Ewen Glass (he/him) is a screenwriter and poet from Northern Ireland who lives with two dogs, a tortoise and lots of self-doubt; his poetry has appeared in the likes of Okay Donkey, Maudlin House, HAD, Poetry Scotland and Gordon Square Review. His debut chapbook ‘The Art of Washing What You Can't Touch’ is available from Alien Buddha Press.  </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
