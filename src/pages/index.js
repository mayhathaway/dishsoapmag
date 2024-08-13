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
            <br></br><strong>Mother, I can't serve</strong>
            <br></br>
            <br></br><i>by J. J. Carey</i>
            <br></br>
            <br></br>in the shop today, because Venus has me losing my fucking mind over a girl. You know
            <br></br>what Venus is like at the best of times, but she’s partying with Jupiter and it’s not dark til
            <br></br>9pm now and, well, it’s gotten out of hand again. I say a girl, she’s more of a woman. And
            <br></br>the shop is so, well, you know - tedious. Customers always angry, wanting whatever we
            <br></br>don’t have, whatever we might have or never had. Bitching about the prices. Fucked off
            <br></br>that they have to shop at all, when they could have it already in their fridge, in their hand,
            <br></br>in the back of their throat, falling out of their anus into the sewers. I say a woman, she’s
            <br></br>more of a concept. Stunning, though. Legs for days. Teeth for hours. Hair for eternity.
            <br></br>Joints for a fleeting moment. OK yes, mother, the woman is liberation, again. She’s
            <br></br>everyone’s home and food and medicine taken care of without alarm clocks and uniforms.
            <br></br>And she’s making me unhinged! I want what’s best for us too, mother. I just can’t believe
            <br></br>it’s bunions from standing at the till with a microplastic smile for hours on end. There are
            <br></br>damselflies on the river this week, mother. Rhododendron petals spilling over The Hollies
            <br></br>like a middle class wedding. The leaves have just pushed their way out of the death with soil
            <br></br>on their faces, mother
            <br></br> 
            <br></br>                                                                         <i>after Sappho</i>
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            J.J. Carey is a queer poet and writer surviving late capitalism with the support of a small circle of fellow state enemies in Leeds, UK. They were shortlisted for the inaugural Tempest Prize and are published or forthcoming in The Dionysian Public Library, Anarchist Fictions and elsewhere. You can find more of their work on instagram at @vinesthruconcrete.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
