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
            <h3 className={indexStyles.postauthor}>Rishi Janakiraman</h3>
            <h1 className={indexStyles.posttitle}>Bodies in phototaxis</h1>
          <p className={indexStyles.posttext}>
          we ate light in fistfuls, our bodies bloated & hearts spinning
          <br></br>like prayer wheels. I didn’t know what to say—you, smiling at me
          <br></br>in broken english, trying to tell me this recipe for light. you’ll cradle
          <br></br>me in a litany of words: I swallow. I scrub this bloodline with vinegar
          <br></br>& you spoonfeed me Tamil syllables, noodle-curled, the way I was
          <br></br>christened மழலை as to mean young, boy, baby-blue & sky-soft
          <br></br>like this city whittled me into a fetus. you’d tell me how I was
          <br></br>bleached by it all. my date-pruned fingers outstretched to sterile
          <br></br>hospital light, holding onto this slant, snapping its straight rays
          <br></br>in half. & now, light's clinging to your smile lines. all these
          <br></br>wrinkles splintering you into the sins you gave me. our tongues are
          <br></br>still overfed, bloated like the Sun, eating all the languages we can
          <br></br>get our hands on. I’d say how in every one, my lips pressed together,
          <br></br>bent themselves into submission as to say Amma, and you’d remind
          <br></br>me how to translate it all, turn son into faggot. here: let me feed you,
          <br></br>and blow before you eat—it just might burn your tongue. let me
          <br></br>tell you all the ways grammar can get stuck in your gums, syllables
          <br></br>slip like eels, conjugations crack open like wet bivalves, hungry
          <br></br>for the Sun. let’s hope that when the light submerges our bodies we’ll
          <br></br>still be breathing. let’s hope you don’t retch these graphemes so I don’t
          <br></br>have to lap them up like a stray dog. let me tell you: language doesn’t
          <br></br>taste too good when everything's in translation. feel the two letters of
          <br></br>my name ரிஷி stretch inside you, the crowbar-curl of each vowel
          <br></br>ballooning out. I know you’ll forget this, but when you do, promise me
          <br></br>you'll weave this light into a net, catching only what refuses to drown.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Rishi Janakiraman is a young writer from Raleigh, NC. His work has been recognized by the Alliance for Young Artists & Writers, The New York Times, Young Poets Network, and the Poetry Society of the UK. A Top 15 Foyle Young Poet of the Year, his poems appear in Rust + Moth, Rising Phoenix Review, and eunoia, among others. He is an alum of the Adroit Journal Summer Mentorship Program and was one of 9 national medalists selected in the Scholastic Art & Writing Awards' 2024 anthology. He is also an executive editor for Polyphony Lit. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
