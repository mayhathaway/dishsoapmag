import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import postStyles from "./post.module.scss"
import Subheader from "../components/subHeader"
import MobileNav from "../components/mobileNav"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      body {
        json
      }
      author
      type
      justifyText
      nextTitleAndAuthor
      nextSlug
      bio {
        json
      }
    }
  }
`

const Post = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={props.data.contentfulPost.type === "art" ? postStyles.art : null} />
      }
    },
    renderText: text =>
      text.split("[sp]").flatMap((text, i) => [i > 0 && <span>&nbsp;</span>, text.split("\n").flatMap((text, i) => [i > 0 && <br />, text])]).flat()
  }

  const { contentfulPost } = props.data

  return (
    <>
      <MobileNav />
      <Nav />
      <Subheader title={contentfulPost.type} />
      <Layout>
        <Head title={contentfulPost.title} />
        <div 
          className={postStyles.mission}
          id={contentfulPost.type === "art" ? postStyles.artMission : null}
        >
          <h3>{contentfulPost.author}</h3>
          <h1>{contentfulPost.title}</h1>
          <div style={contentfulPost.justifyText ? { textAlign: "justify" } : undefined}>
            {documentToReactComponents(
              contentfulPost.body.json,
              options
            )}
          </div>
        </div>
        <div className={postStyles.row}>
          <div>
            <Link to="/archive">
              <button>back</button>
            </Link>
          </div>

          <div className={postStyles.nameplate}>
            <Link to={contentfulPost.nextSlug} className={contentfulPost.nextSlug === "/" ? postStyles.inactiveLink : null}>
              {contentfulPost.nextTitleAndAuthor}
            </Link>
          </div>
        </div>
        <div className={postStyles.mission2}>
            {documentToReactComponents(
              contentfulPost.bio.json,
              options
            )}
          </div>
      </Layout>
    </>
  )
}

export default Post