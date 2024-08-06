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
        <div class="layout-module--content--3nIku"><div class="post-module--mission--1Ptjh"><h3>Aster Haviland</h3><h1>The Body as a Place for Lost Things</h1><p></p></div><div class="post-module--row--3A1Jc"><div><a href="/issues"><button>back</button></a></div><div class="post-module--nameplate--8cwIP"><a href="/issue5/the-anxiety-index">Howie Good "The Anxiety Index"</a></div></div><div class="post-module--mission2--1-poX"><p>Aster Blysse Haviland (they/them) is a junior at Princeton University studying Comparative Literature and always questioning their life decisions. They enjoy dogs, robots, mermaids, and learning new languages. If you really like this poem, they have a chapbook out with more like it called "Lost Things" published under their previous name, 'Sam Haviland'.</p></div></div>
        <div class="post-module--mission2--1-poX"><p>Aster Blysse Haviland (they/them) is a junior at Princeton University studying Comparative Literature and always questioning their life decisions. They enjoy dogs, robots, mermaids, and learning new languages. If you really like this poem, they have a chapbook out with more like it called "Lost Things" published under their previous name, 'Sam Haviland'.</p></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
