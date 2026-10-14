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
      width
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
        //Fix
      text.split("[sp]").flatMap((segment, i) => [
        i > 0 && <span key={`sp-${i}`}>&nbsp;</span>,
        segment.split("\n").flatMap((line, j, linesArray) => {
          const isLastLine = j === linesArray.length - 1;
          const hasLeftAlignToken = line.includes("\\L");

          // Clean the token out of the text if it's present
          const cleanLine = hasLeftAlignToken ? line.replace("\\L", "") : line;

          const lineContent = hasLeftAlignToken ? (
            <span style={{ display: 'block', textAlign: 'left' }}>{cleanLine}</span>
          ) : (
            cleanLine
          );

          return j > 0 ? [<br key={`br-${j}`} />, lineContent] : [lineContent];
        })
      ]).flat()
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
          <div className={contentfulPost.justifyText ? postStyles.justify : undefined} style={{ width: `${contentfulPost.width}%` }}>
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