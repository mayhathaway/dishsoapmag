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
            <h3 className={indexStyles.postauthor}>Alice Rowena Wilson </h3>
            <h1 className={indexStyles.posttitle}>Tennis Players</h1>
          <p className={indexStyles.posttext}>        
Between the ages of twenty and twenty-two, I watched tennis all the time. There was a pandemic, and I was obsessed with watching people lose. I fixated on certain careers: promising young men with luminescent looks, who would leap around the court radiant and sweating, who would be spectacular, who would move in liquid unison with racquet and ball, and who, faced with the final hurdle, with the ball in their hand and the trophy on the side, their parents watching, the eyes of the crowd turned from all one hundred small amusements towards them, a small trembling arm extending to the sky, and who, faced with this, could not do it. They stumbled; they made bizarre choices; they failed. The service motion, the strange way they have trained their body to move, a lifetime of shaping themselves for one purpose - it went wrong. First serve out. And they bounced the ball again, nervous, unable to hide it, their face wretched, sweat in all the crevices, the ball wet with it, their eyebrows scrunched up and their lips tight and their whole body taut, and despite the sports psychologists, despite all the mantras, the clichés, the mental architecture of an athlete, they could not escape from the fact that they are stood on this court, with the cameras in their face, the crowd watching, and their hand is holding the ball wrong, though they have spent every day of their life since they were three years old holding tennis balls, their fingers are wrong this time, and their hair is in the wrong place, plastered wet against their forehead, and their cheeks burn, and they know that if they do not win this point the match will unravel, they will lose, they will have been close to taste it, lick it, smell it, to have victory hovering inside their mouth, small and nervous, but when they lift their racquet to serve and toss the ball, they look up and know they'll choke on it.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Alice Rowena Wilson is a writer and teacher of Classics living in Edinburgh. Her work has previously appeared or is upcoming in The Rialto, X-R-A-Y, Death Kit and Sextet. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
