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


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPost(slug: { eq: "/7-22-25/pastoral/" }) {
        title
        author
        body {
          json
        }
        bio {
          json
        }
      }
    }
  `);

  const options = {
      renderNode: {
        "embedded-asset-block": node => {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} src={url} className={props.data.contentfulPost.type === "art" ? postStyles.art : null} />
        }
      },
      renderText: text =>
        //text.split("[sp]").flatMap((text, i) => [i > 0 && <span>&nbsp;</span>, text]) // put [sp] in contentful to add a non-removable space
        //text.replace(/\[tab\]/g,'&emsp;').split("\n").flatMap((text, i) => [i > 0 && <br />, text])
        text.split("[sp]").flatMap((text, i) => [i > 0 && <span>&nbsp;</span>, text.split("\n").flatMap((text, i) => [i > 0 && <br />, text])]).flat()
    }

  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
          <div className={cx(layoutStyles.content,indexStyles.new)}>
            <div className={indexStyles.missiontwo}>
              <h3 className={indexStyles.postauthor}>{data.contentfulPost.author}</h3>
              <h1 className={indexStyles.posttitle}>{data.contentfulPost.title}</h1>
              {/* Render rich text body using Contentful's rich text renderer */}
              {/* You may need to import documentToReactComponents if not already */}
              {data.contentfulPost.body &&
                require("@contentful/rich-text-react-renderer").documentToReactComponents(
                  data.contentfulPost.body.json, options
                )}
            </div>
          </div>
          <div className={layoutStyles.content}>
            <div className={indexStyles.missiontwo}>
              {/* Render bio if available */}
              {data.contentfulPost.bio &&
                require("@contentful/rich-text-react-renderer").documentToReactComponents(
                  data.contentfulPost.bio.json, options
                )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage
