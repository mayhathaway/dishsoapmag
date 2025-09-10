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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>c. rivera</h3>
            <h1 className={indexStyles.posttitle}>On Mars</h1>
          <p className={indexStyles.posttext}>
            a light was captured on camera / twice.
<br></br>around the world people thought this was evidence
<br></br>of another life, an alien light.
<br></br>NASA says there has to be a simple, realistic
<br></br>explanation&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;for this.
<br></br>
<br></br>there are two kinds of people.
<br></br>
<br></br>those who want there to be aliens living in
<br></br>underground colonies, who want to be the ones
<br></br>to capture their light like they want
<br></br>love to be love to be a love returned they want
<br></br>
<br></br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;light.
<br></br>
<br></br>& there are those with theories.
<br></br>like the sun reflected on a rock’s surface–
<br></br>a glinty rock on mars.
<br></br>
<br></br>there’s simple explanations & wild
<br></br>imaginations there’s me & there’s you &
<br></br>no matter how you look at it, in some darkness
<br></br>
there is a light to discuss.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Christy Hartman pens short fiction from her home between the ocean and mountains of Vancouver Island Canada. She writes about the chasm between love and loss and picking out the morsels of magic in life’s quiet moments. Christy has been shortlisted for Bath and Bridport Flash Fiction prizes and is a New York City Midnight winner. She has been published by Elegant Literature, Sci-Fi Shorts, Fairfield Scribes, and others.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
