import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import natr from "../images/natr.jpeg"
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
            <p>
            <br></br>Rituja Patil
            <br></br><strong>Ars poetica: problems</strong>
            <br></br>
            <br></br>If only all my problems started as tawdry
            <br></br>brawls inside my head and ended in a poem.
            <br></br>
            <br></br>How convenient it would be, how thrilling.
            <br></br>But they don’t. They start as words spoken
            <br></br>
            <br></br>too harshly or days spent without moving
            <br></br>even a single bit. Sometimes, as forgetting to
            <br></br>
            <br></br>swallow a pill, or as being swallowed whole
            <br></br>by pain. My heart does not know how
            <br></br>
            <br></br>to keep pace with all this beginning.
            <br></br>My mind cannot grasp the sheer range of it.
            <br></br>
            <br></br>It is exhausting, being amidst so many beginnings
            <br></br>while you are amidst so many middles.
            <br></br>
            <br></br>If I’m lucky, they end in a poem. But mostly, they
            <br></br>never end. The spill is uncontainable.
            <br></br>
            <br></br>Oil on water, fire on farmland. I cannot hold
            <br></br>anything within the fragile boundaries of my body.
            <br></br>
            <br></br>And every day, I burst open anew.

</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Rituja Patil (they/them/any) is a queer writer and poet from Mumbai India. They write about being queer and mentally ill in India, but they mainly write poems about the things they love: love, nostalgia, the coastline, trains and flowers to name a few. Their poems have previously appeared in VIBE, ALOCASIA, the~lickety~split and LiveWire. You can find them wasting away way more time than they should on their twitter @ Chamelea22 </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
