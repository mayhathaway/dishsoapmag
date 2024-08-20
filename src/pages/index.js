import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soapadish from "../images/soapadish.png"
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
            <br></br><strong>For Venessa</strong>
            <br></br><i>by Jacob Jing</i>
            <br></br>
            <br></br><i>After Cameron Awkward Rich</i>
            <br></br> 
            <br></br>Do not falter through your hurdle, you tired,
            <br></br>bright thing. The people who love you
            <br></br>are waiting below with flower fields
            <br></br>in their smiles. Their opened hands like
            <br></br>empty trees. So here's the warm hollow.
            <br></br>Here's where the birds go when they realize
            <br></br>they cannot fly anymore. Here's where the
            <br></br>love will be waiting when you are ready.
            <br></br>Your friends, reaching. Your wings,
            <br></br>wreathed with daisies. You, soft with every
            <br></br>tender thing you finally let yourself have.                                                                        
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Jacob Jing is a writer studying visual arts at the University of North Texas. Presently, he is a mentee in the 2024 Adroit Journal Summer Mentorship Program. He has been published in Spellbinder Magazine and is forthcoming in the Eunoia Review. In his free time, he enjoys photography, naps, and the $3 milkshakes from the student union. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
