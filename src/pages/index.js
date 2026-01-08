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
            <h3 className={indexStyles.postauthor}>Hugh Behm-Steinberg</h3>
            <h1 className={indexStyles.posttitle}>Description is one thing among a number of things</h1>
          <p className={indexStyles.posttext}>        
            Typing quietly in bed, my wife sleeping next to me. The various people sounds on my street, the sweepers and garbage pickup. The way my throat feels, the soreness of a cold coming on. The dogs all the time, some of them bundled up for the weather and at least one of them is not happy about anything. He complains loudly to the nearest dog.
<br></br>
<br></br>Somewhere, deep underground, there is a vein of gold that no one knows about. Somewhere in the hills nearby wild pigs go where they want. In the dark, someone carries a lantern and another person stays in the dark. My wife is listening to rain on her headphones and it unnerves me, perhaps it is raining. Somewhere it is raining.
<br></br>
<br></br>I can feel the start of a wheeze in my chest, a soft whistle when I breathe. I have my knees bent so my computer is on my lap. My left foot is turned toward my right, my big toe touches my smaller toes. I am thinking about a language that does not have separate words for fingers and toes, I put my hand on my wife’s arm as she rolls over to sleep again with her headphones.
<br></br>
<br></br>The nearest dog is an Afghan hound. The nearest dogs are a pair of Weimaraners. The nearest dog is a mutt, still a puppy, still happy to leap into the chests of strangers. The nearest dog, now, doesn’t want to go back inside but she has to go back inside anyway: up the stairs she goes, dragging her feet. She knows where the rain is. She doesn’t care about the gold buried so deeply beneath her. She smells my cold, but it’s just one thing in a number of things.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Hugh Behm-Steinberg (he/him/his)’s fiction can be found in X-Ray, ergot, Hex, Heavy Feather Review and The Coffin Bell. His short story "Taylor Swift" won the Barthelme Prize from Gulf Coast. A collection of prose poems and microfiction, Animal Children, was published by Nomadic/Black Lawrence Press. He lives in Barcelona. <a href= "https://linktr.ee/hughsteinberg">https://linktr.ee/hughsteinberg.</a></p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
