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
            <br></br>Maya Walker
            <br></br><strong>Hedwig</strong>
            <br></br><i>“Anyhow, I have no social life, no distractions. I spend my evenings on the small</i>
            <br></br><i>balcony above the river…and I am not a good person. Years ago I wrote this poem…”</i>
            <br></br><i>- Franz Kafka, in a letter to Hedwig Weiler</i>
            <br></br>
            <br></br>And in his poem he is empty like a letter with no words. He is not
            <br></br>concerned with people. He is only silent. In Třešť, silence is a language
            <br></br>
            <br></br>of its own – a pause between words is a confession, an empty letter
            <br></br>is a declaration of grief. The river is always calm and he is always there–
            <br></br>
            <br></br>thinking. He is not a good person, or so he says. He lives in silence
            <br></br>but his writing is so loud – He is not a good person, or so he tries to say
            <br></br>
            <br></br>in a poem. Does writing poetry make him worse? Does writing
            <br></br>make him worse? No one lives in Třešť anymore – it is empty.
            <br></br>
            <br></br>Every letter is an empty letter if you are not concerned with words.
            <br></br>Every person is a bad person if they cannot explain what it means
            <br></br>
            <br></br>to be good. He writes to you formally and then never again. The river
            <br></br>thrashes and he is gone, and then Třešť is gone, or almost gone, and
            <br></br>
            <br></br>every letter ends with yours no matter how formal they are. How cruel
            <br></br>it is to be in love in the margins. How temporary it is to love at all.
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Maya Walker is a creative writing major at Chatham University. She is the founder and editor in chief of Fulminare Review and executive editor at Spiritus Mundi Review. When not writing poetry, you can find her on Instagram (@maya_whispers_words) or in the nowhere land between Baltimore and Pittsburgh.    </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
