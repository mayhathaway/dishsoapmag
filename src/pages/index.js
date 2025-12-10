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
            <h3 className={indexStyles.postauthor}>Blake HC Mihm</h3>
            <h1 className={indexStyles.posttitle}>Last Week I Was Thinking of You, and I Confess I Am Thinking of You Still</h1>
          <p className={indexStyles.posttext}>        
Outside the Kroger's is a tulip poplar which I know because its sherbet flowers are in full bloom. At all other times of the year it is nothing more than a tree to me. I recognize your car by its license plate, the desultory way the letters and numbers bleed into a slick puddle across hot pavement. It is an evening during the week so I am sure it's busy inside, that there is a single clerk overseeing the line of self check-outs, meaning I could make eyes at you while I pass the four-dollars-a-pop Sumatra oranges off for regular old navels. I wouldn't be clever enough to think of anything to say if our carts bumped while you pondered if it's a creamer or half-and-half week, but in produce I would ogle the ripe pears before settling for feeling up the citrus
<br></br>
<br></br>Three weeks ago after your shed burnt down I asked if the loss of all those cans of paint thinner and vintage weed trimmers might mean you have room for me in your life.
<br></br>
<br></br>I can't take anything else on right now, you had said. These insurance agents, they're all over me.
<br></br>
<br></br>As if the insurance agents and I had something in common.
<br></br>
<br></br>I tuck a flower under your wiper blade but two steps later, turn heel and press the budding bloom into my back pocket alongside a book of matches and a crushed napkin. At the post office I confess I do not know your address and the postmistress says she will try to find you before the flower melts.
<br></br>
<br></br>What happens, I ask, if she doesn't make it in time?
<br></br>
<br></br>Nothing, she replies. Maybe that's for the best.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Blake HC Mihm lives in southwestern Virginia with his two dogs. His work has been featured in New Words Press, Lilac Peril, Wee Sparrow Press, and Boyfriend Material. He was selected as one of the poets for DC Pride Poems 2024. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
