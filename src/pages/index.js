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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab) /
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Trinity Richardson</h3>
            <h1 className={indexStyles.posttitle}>Juno</h1>
          <p className={indexStyles.posttext}>        
February was concrete in its application; October was more theoretical. The cashier tells me kittens shouldn’t have cow’s milk. The bottle splatters against the pavement in a way that reminds me I don’t know what I’m doing. I keep her cradled to my chest hoping if she can hear my heartbeat she’ll know what I can’t say. The years wash over me—what feels like one is actually three. This is a confession. The powerline hums and I imagine an angel running through the wires. I imagine taking the train to work. I am afraid I will never know what has become of you. Or worse, what will become of us. I am lonely in a way I’ve never been, because this time there is no reason for it. I go to work. I pick up groceries. I make cheesecake and let her have a small bite. It’s not that good, but it keeps me busy and I like the way the cream tastes before I bake it. She likes it. She is fixated on fire and sometimes I forget to put a candle out of reach and she singes her fur. I always feel guilty. This is a confession.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Trinity Richardson is a poet raising an evil cat. They are a reader for West Trade Review and the social media manager for The Adroit Journal, and have been nominated for the Pushcart Prize. Their poems can be found or are forthcoming in Gulf Stream, Moon City Review, Thimble, and more. Outside of writing, their interests include vintage clown dolls, Magic, magic, claw machines, stories with ambiguous endings, and the fly from Breaking Bad.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
