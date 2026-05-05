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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)/
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Gretchen Uhrinek</h3>
            <h1 className={indexStyles.posttitle}>Limerence Dingus</h1>
          <p className={indexStyles.posttext}>        
I fantasize about running into my ex at the grocery store. In this fantasy, I am very metropolitan and thin. I do not wear a puffy, practical Lands End coat with grease stains at the neck. I am holding a basket instead of pushing a buggy (thus establishing my superiority through strength and lack of want/need/etc.). When he turns the corner he sees me standing there with great posture, reading the ingredients on a bottle of some exotic sauce. It probably has truffles and algae in it. He watches me from afar. He is quietly impressed. He sees that I have become formidable. 
<br></br>
<br></br>Eventually, he says my name. This breaks me out of my deeply intelligent reverie. I look around—<i>who, me?</i>—wide-eyed and ethereal. A doe in fog. A doe shattering fog with Kevlar under her tawny hide. He is amazed because I look younger than the last time we met, five years ago, even under the store’s twitching, humming fluorescent lights. The only shadows on my face are the sexy kind. 
<br></br>
<br></br>It doesn’t make sense for us to bump into each other like this; he, career military. Me, not that. I stride up to him with unfamiliar confidence and he thinks I’m gearing up to hug or kiss, and so he opens his arms to me, but instead I poke him right in the sternum with a finger that definitely doesn’t have an unidentifiable crescent of brown gunk stuck under the nail, and I say: “You’re an asshole. You know that?”
<br></br>
<br></br>He dips his head down like a punished dog. Sometimes I fantasize that his hair is thinning at the crown (it would serve him right), but usually I imagine that he is also much more handsome than would be realistically possible, given time and testosterone and genetics and war. He certainly doesn’t have a beer gut, a girlfriend, and a wife. That’s the old him.
<br></br>
<br></br>I trace my finger up his chest and to his chin, tilt his face toward mine. Eye contact the likes of which this world has never seen. “Don’t do it again,” I tell him. 
<br></br>
<br></br>“I won’t do it again,” he says.
<br></br>
<br></br>My brain won’t let it go any further. Whether out of self preservation or a failure of the imagination, I couldn’t say. Probably both. Or neither; maybe I’m just waiting for him to round the corner and say my name. 


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Gretchen Uhrinek lives in the woods north of Pittsburgh, Pennsylvania, where she spends an inordinate amount of time combing her dog for ticks. She is a fiction editor at The Hopper and writes across genres, with work appearing in Folklore Review, Rat Bag Lit, and elsewhere. Her website is www.gretchenuhrinek.com. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
