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
            <h3 className={indexStyles.postauthor}>Thanh Bui</h3>
            <h1 className={indexStyles.posttitle}>My cat sits on me, incubating Sad-Away</h1>
          <p className={indexStyles.posttext}>        
You would think that having a Carolina Wren’s nest outside one's front door is this incredible thing you'd be endlessly grateful for, especially in such a formless season, especially because there's no guarantee it'll happen again, but people acclimate surprisingly quick and my brain began worrying whether the eggs would hatch and then whether there would be enough for the parents to forage and then a very irrational fear of accidentally stepping on a fledgling (or younger!) fallen from the nest. 
<br></br>
<br></br>While this is easily a need for control, a lack of faith that things will work out, or the simple fear of life’s ability to go wrong as evidenced by recent or ongoing events, it's also such cheating. To put one's emotional well-being in the hands of four newborn birds like some form of divination is to throw yourself on the floor, hands up, giving it over to God. I think what I'm saying is I am tired. I think what clever people might suggest is a child. Any child. This is the age it would be preferable to borrow their eyes, lean on their lack. Use them as bravery, willpower. Wouldn’t that be nice? But now or eighteen years later, I think there comes a spring that doesn't break through winter. No explanations or excuses to be offered. It gets to a point! The first summer you’re off the academically scheduled break, the first fall that doesn’t mean new reliefs. And this is just it now; no waiting for the tides to change. No dopamine crush to dress for. Waking no longer a ceremony, lucky if not coupled with dread. Here is every lesson you skipped, every muscle you should have built, all the discipline kicked down the road.
<br></br>
<br></br>My mother wanted to spare us of chores and the unpleasant things she could take on instead. But where there are cosmic debts, there are collectors. I’m sorry I thought of myself so much. Didn’t step in. I’m sorry I hovered, did the opposite of anthropomorphize and believed myself a mother bird. I promise I’m trying to leave it alone, accept the way things are. I put dried mealworms out and anxiously checked to see if anyone took ‘em. I know they’ll leave in a few weeks after practicing flight. I am trying to believe I deserve my own attention. Not in the easy way, no. The kind that obliterates a person every few years. In the meantime, I'm sorry to these four tiny wrens for being the giant creep who comes out at night to watch them sleep when I can't.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Born in Gò Vấp and raised in Dorchester & Alief, Thanh Bui is a writer & actor based out of Austin, Texas. Her written work has appeared in The Offing, Lammergeier, Taco Bell Quarterly, diaCRITICS, Pinhole, Glass: A Journal of Poetry, and other places accessible to her mom. Her film work has appeared in SXSW, CAAMFest, and elsewhere. She loves constantly..
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
