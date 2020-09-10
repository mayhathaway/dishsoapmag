import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailChimpForm from "../components/MailChimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soapadish from "../images/soapadish.png"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
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
      <Head title="home" />
      <MobileNav />
      <Nav />
      <Header />
      <div className={indexStyles.banner}>
        <p className={indexStyles.subtitle}>
          <Link to="/issues">click here for our august issue!</Link>
        </p>
      </div>
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.postRow)}>
          <h1>our favorite dishes</h1>
          <div className={indexStyles.posts}>
            {data.allContentfulBlogPost.edges.map(edge => {
              return (
                <div className={indexStyles.post}>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <img
                      src={edge.node.thumbnail.resize.src}
                      alt={edge.node.thumbnail.title}
                    />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
          <div className={indexStyles.soapPanel}>
            <img src={soapadish} alt="website logo" />
          </div>
          <div className={indexStyles.formPanel} id="form">
            <h1> get the freshest dishes in your mailbox.</h1>
            <MailChimpForm />
          </div>
        </div>
      </div>
      <div className={indexStyles.row}>
        <div className={indexStyles.quote}>
          <h1 className={indexStyles.quoteText}>
            "friends don't leave friends behind to wash dishes for yetis!"
          </h1>
          <h1 className={indexStyles.author}>- philip reeve</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
