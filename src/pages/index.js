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
            <h3 className={indexStyles.postauthor}>Kijiji Couch</h3>
            <h1 className={indexStyles.posttitle}>Lindsay McDonald</h1>
          <p className={indexStyles.posttext}>        
   Our first apartment was on the fourth floor, and we had to walk a narrow set of stairs all the way up and down. We pushed our kijiji couch up those stairs, and halfway we thought we might abandon it in the hallway, but we made it to the top. We had no car, and every trip to the grocery store was by taxi. We couldn’t forget the milk or the eggs or the sugar because we would have to go all the way back or do without. We had to strategize because between work and life, we could only do laundry on weekends in the basement. That first year, we both neglected our garbage bags, let them pile up in the back stairwell until it was too much to do in a single trip, and both of us being too lazy by then to do four trips up and down to the dumpster, we just left it, until one summer day the whole building smelled of trash and we vowed to be better. You worked late every night at the local pizza place to save money, and I bought booze at the local bar on my credit card and bounced into every wall on the way up those stairs until I came in and stretched out on the carpet in the hallway. On Saturday nights we would make daiquiris in our wood paneled kitchen with the green-beige tile and throw on our jackets that weren’t warm enough because we wanted to look cute, and we’d push our way into the cold and walk to the local bar, bitching the whole way about our freezing faces. There were days when I would get sad, smoke weed alone and listen to sad music. I’d go to bars alone and stay up all night, drag myself to work and puke in the toilet. You were there the night I got so angry that I broke a glass with my bare hands. You took me to the bathroom and wiped away the blood, rolled a bandage over my hand where I had cut myself, and put me to sleep on the kijiji couch.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Lindsay McDonald (she/her) writes poetry, flash fiction, and short stories. She is also working on her first novel. Her work has appeared in HAD, Blank Spaces Magazine, and Flash Fiction Magazine. She lives in Barrie, Ontario, Canada and her instagram handle is @lindsaymcdonaldwrites.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
