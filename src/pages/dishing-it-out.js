import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./dishing-it-out.module.scss"
import Head from "../components/head"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort:{
          fields:publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            thumbnail {
              title
              resize (width: 370, height: 570) {
                src
              }
            }
            publishedDate(formatString:"MMMM Do")
            caption
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <img src={edge.node.thumbnail.resize.src} alt={edge.node.thumbnail.title}/>
                <p>{edge.node.publishedDate}</p>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.caption}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
