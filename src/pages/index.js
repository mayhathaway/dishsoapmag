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
import july22 from "../images/july22.jpeg"

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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)/
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Arden Stockdell-Giesler</h3>
            <h1 className={indexStyles.posttitle}>The Man in the Corner of the Photograph,</h1>
          <p className={indexStyles.posttext}>        
the one watching my mother and I sleep, is my uncle, is named Ralph, is unimportant. My three foot frame is spread along her back. I heard my mother’s breath best this way, an ear against her spine. Slow, full, heavy, warm. I let our heartbeats—my mother’s and mine, not any third party’s— synchronize. I tried to match her breathing. I turned blue trying. 
<br></br>
<br></br>On the table beside the green gingham’d couch is a letter. A teacher wrote home to call me Little Quiet Child and ask my mother if I speak at all. I do and I did. I did and I do. She knew this. She laughed. I hadn’t said more than my name because I’d never been addressed. Reader, dear Reader: there is a permanent dissonance between what I want to tell you and what I can. Language: a sedative, an act of translation. 
<br></br>
<br></br>I feel them still sometimes, both our breaths, warm and in tandem. Two decades have passed. My mother is twelve years dead, her ashes in an unsealed Ziploc in my father’s closet. I am laying on my own green couch when my own cat crawls onto my own back to sleep against my own spine. There is no one in the corner. Her breaths are twice my pace.




            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Recipient of the Brooklyn Poets Fellowship, Arden Stockdell-Giesler explores intertwined relationships between grief, identity, and intimacy. Their work appears in Broken Antler Magazine, Brooklyn Poets, Carolina Muse, Fish Barrel Review, Bruiser Magazine, and elsewhere. They’re the creative director for and frequent co-writer of indie pop/rock artist Rachel Bochner. Instagram: @17blackberries.
</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
