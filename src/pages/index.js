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

  // if just putting &nbsp; doesn't work, use <span>&nbsp;</span>
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Christy Hartman</h3>
            <h1 className={indexStyles.posttitle}>The Other Side of Town</h1>
          <p className={indexStyles.posttext}>
My blue-collar husband hates this side of town because he thinks hipsters are contagious and he’s afraid he’ll spontaneously grow a mustache proselytizing to strangers about mung-bean milk and old-growth forests—but I lived here once, in a basement suite with ceilings so low I had to crouch in the bathtub to wash my hair—but it was worth it for the Ethiopian restaurant on the corner and spoken word open mic nights at the Laughing Oyster Book Shoppe.
<br></br>
<br></br>This morning I’d driven right past my office, overwhelmed by the need to order a honey-matcha in this new coffee shop where my favourite bookstore used to be. Here the mugs don’t match and the denim-and-flannel-clad couple sitting at the next table look like they leave the lights on when they fuck. I once had a boyfriend who demanded eye contact while we made out and sulked when I said it felt like a threat. Years later I saw on Facebook that he’d married the author of a children's book series about a piglet with two moms that I’d bought for my niece’s fifth birthday, so the next time I visited I drew tiny horns on the picture of the sleek-haired woman holding a stuffed pig on book’s back cover. In my twenties I’d written half a novel, a coming-of-age thriller that went nowhere so I saved it to a thumb drive that I keep in a drawer with my tax returns, then took a copywriting job for a company that sells health supplements I’d never buy---but the extra income pays for a Mexican vacation every winter and a carton of Haagen Dazs on Friday nights.
<br></br>
<br></br>The beautiful couple has their fingers laced together on the table top, her nails are chewed
down to ragged nubs and he’s running his thumb up and down the meaty part of her palm while
they talk about the war in Gaza and a pothole that needs to be fixed near their house because one
day they might forget it’s there and end up with a flat tire. My husband texts me I love you on his coffee break and I leave my three-quarters-full latte on the reclaimed-wood table—the grassy
taste was not for me and my head is pounding from caffeine withdrawal. The barista behind the
counter tells me to have a nice day and I duck onto the street without a word and head to work.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Christy Hartman pens short fiction from her home between the ocean and mountains of Vancouver Island Canada. She writes about the chasm between love and loss and picking out the morsels of magic in life’s quiet moments. Christy has been shortlisted for Bath and Bridport Flash Fiction prizes and is a New York City Midnight winner. She has been published by Elegant Literature, Sci-Fi Shorts, Fairfield Scribes, and others.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
