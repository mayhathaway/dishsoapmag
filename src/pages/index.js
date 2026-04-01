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
            <h3 className={indexStyles.postauthor}>Jack B. Bedell</h3>
            <h1 className={indexStyles.posttitle}>Slow it Down</h1>
          <p className={indexStyles.posttext}>        
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;somehow.  
<br></br>That's what I keep telling myself. And then 
<br></br>&emsp;&emsp;&emsp;the sky burls all pink along the horizon,  
<br></br>then purple, then deep blue to black, and  
<br></br>&emsp;&emsp;&emsp;a nighthawk chases mayflies across 
<br></br>open space, and breath after breath after breath 
<br></br>&emsp;&emsp;&emsp;just escapes into sky. 

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Jack B. Bedell is Professor of English and Coordinator of Creative Writing at Southeastern Louisiana University where he also edits Louisiana Literature and directs the Louisiana Literature Press. Jack’s work has appeared in HAD, Heavy Feather, Hawkeye, The Shore, Moist, Psaltery & Lyre, Dirtbag, Some Words and other journals. His work has also been selected for inclusion in Best Microfiction and Best Spiritual Literature. His latest collection is Fight Nights (Blue Horse Press, 2025). He served as Louisiana Poet Laureate 2017-2019.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
