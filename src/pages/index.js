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
import mar10 from "../images/mar10.jpeg"

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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab) /
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Rachel Sherman</h3>
            <h1 className={indexStyles.posttitle}>Scenery</h1>
          <p className={indexStyles.posttext}>        
A beautiful evening. The lake is swallowing itself back. Most of the birds are
<br></br>starlings. Most of the grasses are phragmites. Most of the runners are panting.
<br></br>When you approach the water, you’ll lose your foot to something murky, and
<br></br>you’ll remember something terrible about algae. The needle-pitched swarm
<br></br>of flies will have you tilting. The panicky pleas of killdeer will have you
<br></br>defensive. You’ll recall standing here to read the eulogy. It really was an
<br></br>excellent eulogy. At the junction, just before you turn back home, you’ll see
<br></br>an old man with binoculars pressed against his glasses. You’ll want to tell him
<br></br>about the heron at the end of the path. Don’t they look strange there, a
<br></br>dinosaur crammed into an oval, the way they can hold absolutely still,
<br></br>waiting an eternity for one excellent fish.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Rachel Sherman is a writer from Utah. She hopes to one day be found elsewhere. Her favorite bird is a kestrel. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
