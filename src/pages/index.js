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
import mar10 from "../images/mar10.jpeg"
import spt15 from "../images/spt15.jpeg"

export const query = graphql`
  query {
    contentfulPost(slug: { eq: '/10-13-26' }) {
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
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className={props.data.contentfulPost.type === "art" ? postStyles.art : null} />
      }
    },
    renderText: text =>
      text.split("[sp]").flatMap((segment, i) => [
        i > 0 && <span key={`sp-${i}`}>&nbsp;</span>,
        segment.split("\n").flatMap((line, j, linesArray) => {
          const isLastLine = j === linesArray.length - 1;
          const hasLeftAlignToken = line.includes("\\L");

          // Clean the token out of the text if it's present
          const cleanLine = hasLeftAlignToken ? line.replace("\\L", "") : line;

          const lineContent = hasLeftAlignToken ? (
            <span style={{ display: 'block', textAlign: 'left', textAlignLast: 'left', }}>{cleanLine}</span>
          ) : (
            cleanLine
          );

          return j > 0 ? [<br key={`br-${j}`} />, lineContent] : [lineContent];
        })
      ]).flat()
  }


  // if just putting &nbsp; doesn't work, use <span>&nbsp;</span>
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)//
  return (
    <div>
      <Head title="home" />
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
          <div className={cx(layoutStyles.content, indexStyles.new)}>
            <div className={indexStyles.missiontwo}>
              <h3 className={indexStyles.postauthor}>Amy Allen</h3>
              <h1 className={indexStyles.posttitle}>Let’s Keep it Online</h1>
              <p className={indexStyles.posttext}>
                <div className={contentfulPost.justifyText ? postStyles.justify : undefined} style={{ width: `${contentfulPost.width}%` }}>
                  {documentToReactComponents(
                    contentfulPost.body.json,
                    options
                  )}
                </div>
              </p>
            </div>
          </div>
          <div className={layoutStyles.content}>
            <div className={indexStyles.missiontwo}>
              <p>
                Amy Allen writes in Shelburne, Vermont, where she serves as the town's Poet Laureate. Her work has appeared in numerous literary journals and includes a story selected for Best Microfiction 2026. It has also been nominated for the Pushcart Prize and Best of the Net. She is the author of the poetry chapbook Mountain Offerings. When she's not writing, you can find her outside, looking for stories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
