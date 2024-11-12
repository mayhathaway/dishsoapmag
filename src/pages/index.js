import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import noralee from "../images/lucyd.jpeg"
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
            <br></br>Adam Gianforcaro
            <br></br><strong>Mulberry</strong>
            <br></br>
            <br></br>As you watch the sunset from behind the glass door, I stare 
            <br></br>at the back of your head—framed by pleats of plum-honeyed clouds,
            <br></br>framed by the door jamb, framed by the limits of my periphery. 
            <br></br>I can’t make the connection right away, but as I watch you
            <br></br>watch the sky, I recall your makeshift birthday party
            <br></br>in the oncology ward some years ago. Maybe it’s because
            <br></br>this is making me want to sing—here, now, so full of life
            <br></br>as you cradle your son and take pause in the transitory mulberry
            <br></br>of sky. You must know by now that I write more about you
            <br></br>than anyone else, and it's because of moments like this. 
            <br></br>I’m also learning that I don’t write nearly as much about sunsets, 
            <br></br>about small moments that feel like magical, mystical longings. 
            <br></br>Later, I dream about nothing other than muddled blueberries. 
            <br></br>Come morning, the limits of forever are once again limited by time.

</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Adam Gianforcaro is the author of the poetry collection Every Living Day (Thirty West, 2023). His work can be found in The Offing, Poet Lore, Third Coast, Northwest Review, and elsewhere. He lives in Delaware.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
