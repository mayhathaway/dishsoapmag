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
            <h3 className={indexStyles.postauthor}>M. J. Young</h3>
            <h1 className={indexStyles.posttitle}>A Nocturne for the Flowers</h1>
          <p className={indexStyles.posttext}>        
  After the hurricane passed my mother wanted to return her saint statues to the garden. Though two in the morning she said her flowers needed all the protection they could get. We carried Saint Francis and Saint Michael and Saint Cecila, untouched by the winds, from the mat behind the front door to the yard but didn’t know where to put them. Our flashlights disclosed the fruits of the storm: a rime of sticks and leaves crusting the flower beds; the white vinyl of the fence bent inwards, stopped from crushing the remaining plants by bare trellises; pools of water holding petals we didn’t recognize. The roses were bowed and the hydrangeas were stripped and the bird of paradise—unearthed, lying in the street amid clumps of dirt, its roots on display and curled into themselves, too tender for the air—obscene. And there was my mother searching for something to salvage, mud in the lines of her knuckles, unable to kneel in the planters for fear of sinking. Her garden was unrecognizable. Hours weeding, collecting sweat and stems alike. Her parishioner-esque evening obligation to watering. Her careful study of weather and temperature. All undone. We placed the saints in the debris—let them be the ones to pray.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    M.J. Young is a writer and MFA student at Florida International University, where he is a graduate instructor and the Poetry Editor of Gulf Stream Magazine. His poetry can be found or is forthcoming in Ninth Letter, phoebe, The Penn Review, Only Poems Daily, and elsewhere. In his free time he enjoys listening to Philip Glass and exploring bookstores. He can be found on Instagram @mjyoungwrites.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
