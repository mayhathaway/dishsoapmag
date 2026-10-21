import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
import postStyles from "../templates/post.module.scss"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      contentfulPost(slug: { eq: "/10-20-26" }) {
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
        // Changed `props.data` to use local `data` variable fetched from useStaticQuery
        return (
          <img
            alt={alt}
            src={url}
            className={data.contentfulPost.type === "art" ? postStyles.art : null}
          />
        )
      },
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
            <span style={{ display: 'block', textAlign: 'left', textAlignLast: 'left', }}>{cleanLine}</span>
          ) : (
            cleanLine
          );

          return j > 0 ? [<br key={`br-${j}`} />, lineContent] : [lineContent];
        })
      ]).flat()
  }

 const { contentfulPost } = data
  return (
    <div>
      <Head title="home" />
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
          <div className={cx(layoutStyles.content, indexStyles.new)}>
            <div className={indexStyles.missiontwo}>
              <h3 className={indexStyles.postauthor}>Jordyn Damato</h3>
              <h1 className={indexStyles.posttitle}>Intruder</h1>
              <p className={indexStyles.posttext}>
                <div className={contentfulPost.justifyText ? postStyles.justify : undefined}>
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
                Jordyn Damato is a writer and lover from Michigan. She earned her MFA in fiction from Miami University in Oxford, Ohio. She's been nominated for Best Small Fictions and her work appears in Okay Donkey, Brilliant Flash Fiction, Ghost Parachute, BULL, fifth wheel press, trampset, and other cool places. She wants to keep lit weird and hold the people she loves close. 
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
