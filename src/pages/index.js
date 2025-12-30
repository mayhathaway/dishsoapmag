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
            <h3 className={indexStyles.postauthor}>Ben Starr</h3>
            <h1 className={indexStyles.posttitle}>did you know kramer’s name was originally kessler?</h1>
          <p className={indexStyles.posttext}>        
            Changed it for legal reasons. So did Cary Grant. 
<br></br>Mark Twain. David Berkowitz. And my wife,
<br></br>
<br></br>who was a bank robber. A train robber. A robber
<br></br>of small banks on great trains. They caught her
<br></br>
<br></br>just outside Naperville. Made her wear boiled
<br></br>wool sewn into the most unflattering stripes. 
<br></br>
<br></br>She escaped, stuffed herself inside the warden’s
<br></br>Japanese-nibbed fountain pen. Rode west with a herd 
<br></br>
<br></br>of armadillo. Ate thin-boned birds plucked from the sky, 
<br></br>sipped on the sweat of various wetland grasses. 
<br></br>
<br></br>Would Kramer still be Kramer if he wasn’t Kramer? 
<br></br>Would my wife still be my wife if she wasn’t my wife? 
<br></br>
<br></br>Would she still lust to brush thighs with the Union Pacific, blow 
<br></br>a hole through an iron box, lather her pores in fresh struck gold?
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Ben studied poetry in college and as part of the UCLA Extension Writers' Program. His work has been published or is forthcoming in Maudlin House, Gone Lawn, Eclectica, Club Plum and other journals. Find more of his work on X @benjaminstarr</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
