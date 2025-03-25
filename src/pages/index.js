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
            <h3 className={indexStyles.postauthor}>Sosie Chery</h3>
            <h1 className={indexStyles.posttitle}>NOT U NOR HIM 2 PARADISE</h1>
          <p className={indexStyles.posttext}>
          you are in ohio before the end of the world, KN-95
<br></br>emblazoned with TRUE LOVE WAITS in rhinestones.
<br></br>it’s hot biohazard summer and you want to be scoured
<br></br>in every sense of the word: pored over by doctors, told
<br></br>exactly what’s wrong and how to eliminate it as quickly
<br></br>and painfully as possible. you want to be excoriated,
<br></br>but all the doctors in ohio before the end of the world
<br></br>have better things to do, so you settle for staring into the sun,
<br></br>heart-shaped sunglasses popped onto your forehead,
<br></br>calculating how much each breath pollutes the air.
<br></br>it’s hot ground-level ozone summer and the sun is a nuclear
<br></br>beauty queen, the biggest, meanest maraschino cherry
<br></br>in god’s great vat of grenadine. <i>Pure? What does it mean?</i>
<br></br>asks plath. you drink a bottle of red 40, read the poem again:
<br></br><i>the sin, the sin,</i> she says, but everything’s a sin,
<br></br>like everything’s a carcinogen, like happiness is a smash-and-grab:
<br></br>fistfuls of broken glass that may as well be diamonds.
<br></br>you die or you buy in. The sin. The sin.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Sosie Chery is a queer, Black biracial writer from the Midwest. She went through a BimboTok phase in 2021 and her poetic sensibilities have never fully recovered. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
