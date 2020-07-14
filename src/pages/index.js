import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Header from "../components/header"
import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import indexStyles from "./index.module.scss"

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
      <Nav />
      <Header />
      <p className={indexStyles.center}>
        literary magazine submissions open till july 31st!
      </p>
      <div className={cx(indexStyles.dishes)}>
        <div className={indexStyles.div2}>
          <div className={indexStyles.img__wrap}>
            <img
              width="100%"
              src="https://static.wixstatic.com/media/b66848_3e6b27a444654621a9fd97151640eedd~mv2.jpg/v1/fill/w_729,h_580,al_c,q_90,usm_0.66_1.00_0.01/b66848_3e6b27a444654621a9fd97151640eedd~mv2.webp"
            />
            <div className={indexStyles.img__description_layer}>
              <p className={indexStyles.img__description}>
                <center><strong>Mutasil</strong></center>
                Mohamed Elhassan is a rising senior at Hammond High School. He
                is from Sudan and currently resides in Maryland. His work mainly
                incorporates his strong views on animal rights, nature, and
                climate change in its subtle yet powerful visual metaphors. He
                received a Scholastic Honorable Mention Award in the 2020
                regional Maryland competition. His pieces have won contests such
                as Celebrating Art (2019 & 2020) and have been shown in both
                local and regional exhibitions.
              </p>
            </div>
          </div>
        </div>
        <div className={indexStyles.div1}></div>
        <div className={indexStyles.div3}>
          <h1>our favorite dishes</h1>
          <p>enjoy these books from different creators. we support all art.</p>
        </div>
      </div>
      <div className={cx(indexStyles.row, indexStyles.postRow)}>
        <ol className={indexStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={indexStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <img
                    src={edge.node.thumbnail.resize.src}
                    alt={edge.node.thumbnail.title}
                  />
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
      <div className={cx(indexStyles.quote, indexStyles.row)}>
        <p className={indexStyles.quoteText}>
          "friends don't leave friends behind to wash dishes for yetis!"
        </p>
        <p>philip reeve</p>
      </div>
      <div className={cx(indexStyles.row)}>
        <h1>soap a dish!</h1>
        <p> get the freshest dishes in your mailbox.</p>
        <form>
          <input placeholder="email :)" />
          <button type="submit">
            <strong>join!</strong>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
