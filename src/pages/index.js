import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import birds from "../images/birds2.png"
import afab from "../images/afab.jpeg"
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
            <h3 className={indexStyles.postauthor}>Arushee Bhoja</h3>
            <h1 className={indexStyles.posttitle}>Passage</h1>
          <p className={indexStyles.posttext}>
          <br></br>The seat-belt sign glows in the purple dark
          <br></br>like a mother, like someone to care for me.
          <br></br>
          <br></br>When I want to be saved, I imagine
          <br></br>the flight attendants into
          <br></br>
          <br></br>heroes. I watch TV and no one yells.
          <br></br>I ring for help
          <br></br>
          <br></br>and no one yells. Last week, my mother
          <br></br>thrust me on the porch,
          <br></br>
          <br></br>sat me down like a doll against glass
          <br></br>to await the end of her rage. Yes, I pity the sky
          <br></br>
          <br></br>and all the sky has seen. But look!
          <br></br>We’re floating over the inside
          <br></br>
          <br></br>of a teddy bear. Sun-steeped clouds
          <br></br>carry us past cities of toy cars.
          <br></br>
          <br></br>A hundred passengers
          <br></br>bear witness beside me.
          <br></br>
          <br></br>Here’s a hot meal,
          <br></br>wrapped lovingly in foil. It crinkles, loud,
          <br></br>
          <br></br>when I peel it open. I choose
          <br></br>a cup of ginger ale
          <br></br>
          <br></br>and no one is angry. I drink the miles
          <br></br>between myself and the fear
          <br></br>
          <br></br>and no one is angry.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Eli V. Rahm is a queer writer from Virginia. Their work is featured or forthcoming in Sugar House Review, Passages North, Bellingham Review, The Cortland Review, The Academy of American Poets, among others. They also have a cat named Bagel. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
