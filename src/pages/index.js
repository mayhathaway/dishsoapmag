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
            <br></br><strong>New York Botanical Garden in June 2023</strong>
            <br></br><i>by Kyla Guimaraes</i>
            <br></br>
            <br></br>We arrive at the garden by morning,
            <br></br>once the sky has peeled itself
            <br></br>into a quiet orange haze, and tramp out
            <br></br>like silhouettes into the grainy fog.
            <br></br>The stench of burning looms on the horizon
            <br></br>and is swept in by a thickening wind.
            <br></br>Waxy green leaves heavy with this impenetrable
            <br></br>weight of living without reprise.
            <br></br>We laugh open-mouthed into the ache
            <br></br>and bite into ham-and-cheese sandwiches
            <br></br>sitting beneath the weeping willow
            <br></br>as the dusty sky settles deep in our lungs—
            <br></br>the smell thick enough to be confused for pollen.
            <br></br>The day is humid and warm, our bodies damp
            <br></br>with beading sweat. Everything in full bloom.
            <br></br>Lush and green and gorgeous with struggle—
            <br></br>enough of it to burst us beautiful.
            <br></br>Listen: we’ve loved all along, but not openly enough.
            <br></br>We’ve been scared of the plumes of orange
            <br></br>smoke that cradle the clouds as if nursing
            <br></br>them to sleep. Scared our lungs will sleep next.
            <br></br>The weight so heavy on our chests we forget
            <br></br>how to breathe. But look at the leaves: so close
            <br></br>to the ground but never touching it. Loving
            <br></br>and still alive. All these years,
            <br></br>we’ve avoided the dangerous lurch—
            <br></br>but here the fruits of desire
            <br></br>are ready for the taking, low-hanging
            <br></br>on trees and nearly ripe. We can only love
            <br></br>with as much living as we are willing to have
            <br></br>taken away.
            
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Kyla Guimaraes is a writer and student from New York City. Her work can be found in SUNHOUSE Literary, The Penn Review, Aster Lit, the aurora journal, and elsewhere. She is a poetry editor for Eucalyptus Lit and 2024 Adroit Journal Summer Mentee in Poetry. In addition to writing, Kyla likes puns and going outside when it rains.    </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
