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
            <h3 className={indexStyles.postauthor}>Jaiden Geolingo</h3>
            <h1 className={indexStyles.posttitle}>dystopia where we're out past midnight</h1>
          <p className={indexStyles.posttext}>
          We hurried out of my barren Toyota after the tsunami turned into a megaphone. Candleflame
<br></br>cordons the doorway in our apartment, electricity whittled into intimate black. In the living
<br></br>room, Frank Ocean comes on while the windowsills collect soot— & in our right hands, maybe
<br></br>there is another love song; I haven’t checked, but don’t you remember the violins pried open, its
<br></br>hollowness hereditary to the radio station? Suppose I do, & instead of slow-dancing to <i>White</i>
<br></br><i>Ferrari</i>, we could be saving our oxygen tanks for later. This is the part where the grenades
<br></br>infiltrate our back porch, our bones christened so stillborn with shrapnel. Suppose the TNT never
<br></br>reached us, & we were baptized instead on Southern prairies. The midnight corpse-cold.
<br></br>Hollywood could make diamonds out of this slaughterhouse. Now, the film reel: guttural litany
<br></br>& dreams siphoned from asphalt water; the overgrown weeds in our homemade garden watching
<br></br>our feet dispel prayers. Tonight, sinkholes will gape open in the neighborhood & we’ll be eating
<br></br>vodka pasta & continue dancing & suppose everything is an apocalypse. Suppose we get to
<br></br>swallow the sun. Suppose we’ll come home with mouths made for mouths.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Jaiden Geolingo is a Pinoy writer currently based in Georgia, United States. He is the author of <i>How to Migrate Ghosts</i> (Kith Books, forthcoming) and has earned recognition from the National YoungArts Foundation, Bennington College, 13WMAZ, and the Scholastic Art & Writing Awards, among others. His work appears or is forthcoming in <i>Diode Poetry Journal, Eunoia Review, The Poetry Society, The Shore</i>, and several other publications. Someday, he will be good at math.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
