import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soapadish from "../images/soapadish.png"

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
      <Head>
        <title> "home" </title>
      </Head>

      <MobileNav />
      <Nav />
      <Header />
      <div className={indexStyles.banner}>
        <p className={indexStyles.subtitle}>
          <Link to="/issues">click here for our latest collection!</Link>
        </p>
      </div>
      {/* <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
          <div className={indexStyles.soapPanel}>
            <img src={soapadish} alt="website logo" />
          </div>
          <div className={indexStyles.formPanel} id="form">
            <h1> get soap samples sent to your inbox.</h1>
            <MailchimpForm />
          </div>
        </div>
      </div> */}
      <div className={indexStyles.row}>
        <div className={indexStyles.quote}>
          <h1 className={indexStyles.quoteText}>
          Nature’s first green is gold,
          <br/>Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
