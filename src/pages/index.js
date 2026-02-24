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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Nicholas Grider</h3>
            <h1 className={indexStyles.posttitle}>Clearance Aisle</h1>
          <p className={indexStyles.posttext}>        
  <br></br>Guys are ride or die for the categorical imperative. Guys wanna know whether this goes with this and this goes with that. What works. And what about date night. And do I look like I’m a wedding guest or I’m on the venue staff?
 <br></br>
 <br></br>Samuel is ride or die for pressing himself against any window available. Not because he is a sicko. He is a sicko, but this is research and sickos don’t do research. They just take.
 <br></br>
 <br></br>One lane over in the boy emporium a fight breaks out about whether this game features a realistic portrayal of articulable plates in Greenwich armor from the 16th century.
 <br></br>
 <br></br>Another lane over in the boy emporium a guy in the coyote brown SpecOps uniform of desert operations for the Navy Seals—anonymity granted by an MS Paint face rub—secures furry pink cat ears to the rails of his bump helmet.
 <br></br>
 <br></br>Another lane over two strangers discuss how much your feet would hurt in those. Ride or die for statistical likelihood. For accomplishments unlocked. For being the guy who knows.
 <br></br>
 <br></br>Samuel steps away from his work to press his face against the office window, a full wall of special glass: the world is bright enough for springtime poplars to float out of focus and cardinals crossing in arcs to look like cheap VFX, the kind over which some men fight little internecine wars.
 <br></br>
 <br></br>Back in the boy emporium Samuel sends a private message to the cat-eared warrior with
a question: what happens if the mission goes wrong and you end up in enemy hands?
 <br></br>
 <br></br>No reply. Yet.
 <br></br>
 <br></br>Samuel wanders, finds another boy on display, a soft-faced WWII soldier far from home outside his uncle’s shed near Pensacola. He sends this new soldier the same question.
 <br></br>
 <br></br>Sixteen minutes later he gets a response, and though Samuel’s question goes unanswered, the lost soldier from the boy emporium does respond with three careful sentences that amount to a yes.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    M.J. Young is a writer and MFA student at Florida International University, where he is a graduate instructor and the Poetry Editor of Gulf Stream Magazine. His poetry can be found or is forthcoming in Ninth Letter, phoebe, The Penn Review, Only Poems Daily, and elsewhere. In his free time he enjoys listening to Philip Glass and exploring bookstores. He can be found on Instagram @mjyoungwrites.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
