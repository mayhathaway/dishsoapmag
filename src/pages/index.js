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
            <h3 className={indexStyles.postauthor}>K.M. Hanslik</h3>
            <h1 className={indexStyles.posttitle}>fossils</h1>
          <p className={indexStyles.posttext}>        
A wound the size of my first love opened
<br></br>my chest one day and sprung flowers—
<br></br>
<br></br>foxglove, star-aster, outlines sacred to deer
<br></br>and other prey. It was carnivores, once,
<br></br>
<br></br>in the eons before this, who first took for
<br></br>granted the shape of a nesting ground,
<br></br>
<br></br>the tenderness of an unbroken clavicle.
<br></br>For love to be born, a great many things
<br></br>
<br></br>had to perish. It is not surprising that
<br></br>the first womb founded a thousand ways
<br></br>
<br></br>to say <i>I love you</i>. Upon discovering such
<br></br>a seed within myself, I might recount every
<br></br>
<br></br>extinction: Permian, Cretaceous, Anthropocene—
<br></br>if not for generations of prey animals behind me,
<br></br>
<br></br>I might be so reckless as to believe every stone
<br></br>holds an imprint, a whole life, and I’d press
<br></br>
<br></br>myself down into that shape, gladly.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
       K.M. Hanslik is an Ohio-born writer and currently edits for The Turning Leaf Journal. You can find her work in Bleating Thing Magazine, Black Glass Pages, and elsewhere.  </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
