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
            <h3 className={indexStyles.postauthor}>Kiki Johnson</h3>
            <h1 className={indexStyles.posttitle}>Hashi Motors</h1>
          <p className={indexStyles.posttext}>
            <br></br>“The thyroid is the brain of hormones.”
            <br></br>-some internet quote-
            <br></br>
            <br></br>Mine, however, is a post-apocalyptic gas depot,
            <br></br>door hinge rusted, squeaking with least little wiffle,
            <br></br>under an arid sun. The last drops of “woman juice”
            <br></br>dried & wrangled into the brittle twine of tumble-
            <br></br>weed bounces in the zephyr zoom & red sand dust.
            <br></br>The patron is a war-torn barren woman sitting
            <br></br>on stained lounge chair—plasticky-slats flap,
            <br></br>wrenched from the frame, under years of duress.
            <br></br>She alternates chain-smoking Camels & sucking
            <br></br>on oxygen from a bruised green wheelie tank.
            <br></br>Gray-white hair, simultaneously grease-laden
            <br></br>& bone dry, sprays in clusters like a forgotten
            <br></br>box of old optic wires. Clad in be-smudged wife-
            <br></br>beater & mint green leggings worn, translucent
            <br></br>in the camel-toe region. She is much more
            <br></br>glorious than I could ever describe. Hanging on
            <br></br>by the willowy weight of a butterfly wing.
            <br></br>This whole milieu, in for the long-ass haul,
            <br></br>for what comes after all vitals have given up.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Kiki Johnson is a transplanted New Yorker now exiled to Florida. Her work is published in thread litmag, BarBar, New Note Poetry Magazine, Calyx, The Winged Moon Magazine, Mars Hill Review and in anthologies When Flowers Sing and Phoenixes: an anthology written by survivors. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
