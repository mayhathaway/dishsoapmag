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
      
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Ewen Glass</h3>
            <h1 className={indexStyles.posttitle}> Turning up the volume on my rain app to drown out the rain</h1>
          <p className={indexStyles.posttext}>
    <br></br>We always thought Lorch spoke with marbles in his mouth – never understandable, like someone talking underwater while skipping every third word. And yet, he was brilliant. The best budget analyst Perkins, Seinfeld, and Clausen ever had.
<br></br>
<br></br>Eventually, we gave up on attempting verbal communication with him. No more roundtables. No more team huddles. We just Slacked him. We were literally on the other side of him – or right next to him – in an open bay office. We could look each other in the eye over the short divider. But typing just seemed to work better.
<br></br>
<br></br>On Slack, he was electric. Sharp. Dryly funny in a way that suggested a wit that had been both suppressed and distilled. He quoted Rilke, had an eagle eye for numbers, and even his gif game had a certain elegance.
<br></br>
<br></br>Then one Tuesday, he keeled over.
<br></br>
<br></br>No warning. One moment, he was typing. The next, his chair tilted back like it was sighing. He folded slowly to the carpeted floor, limbs curled like a question mark.
<br></br>
<br></br>Brad from HR bounded out of his office and dropped to his knees. He tilted Lorch’s head back and forced his mouth open to make sure the airway was clear.
<br></br>
<br></br>“What the hell – ?”
<br></br>
<br></br>He reached in with a puzzled look on his face and fished around.
<br></br>
<br></br>Brad removed his hand and opened his palm above the dingy grey carpet.
<br></br>
<br></br>Out they rolled. First one. Then another. Then a third marble.
<br></br>
<br></br>They were heavy-looking things. One was cloudy white, with a long blue ribbon trapped inside like a frozen scream. The second was green and gold, swirled like a storm. The last was black – just black – dense and glinting like volcanic glass.
<br></br>
<br></br>“They were in his mouth,” he said, as if we hadn’t been looking the whole time.
<br></br>
<br></br>Brad went back to CPR, but Lorch was already gone. When it’s your time, it’s your time.
<br></br>
<br></br>After they wheeled him out, someone noticed the marbles were still lying there. No one knew what else to do, so we dropped them in a paper cup and set it next to his mouse.
<br></br>
<br></br>Two days later, his sister arrived. She wore a once-expensive navy coat, now threadbare, her blonde hair pinned in a bun. She gave the impression of someone who'd already cried what there was to cry. We gave her a banker’s box with the few personal things he kept at his workstation, including his absurdly elaborate ergonomic mouse. Then Brad stepped forward, holding the cup.
<br></br>
<br></br>“These,” he said. “We found them … in his mouth.”
<br></br>
<br></br>She didn’t flinch. Just nodded once, slowly. Then she looked inside.
<br></br>
<br></br>“Oh,” she said. “Right. The marbles.”
<br></br>
<br></br>She turned the cup gently in her hands.
<br></br>
<br></br>“They were our father’s. And his father’s before that. Three marbles.”
<br></br>
<br></br>There was a pause. Not uncomfortable – just the kind where the air goes still with the anticipation of a mystery about to be unraveled.
<br></br>
<br></br>“Thanks for not letting him swallow any,” she said. “There used to be seven at some point, but that was a long time ago.”
<br></br>
<br></br>We waited for her to elaborate. She didn’t.
<br></br>
<br></br>After the silence stretched into awkwardness, Brad asked, “What happens now?”
<br></br>
<br></br>“They go to my brother,” she said. “He lives in Atlanta. Fortunately, he’s a patent
attorney, so he should still be able to function.”
<br></br>
<br></br>We nodded.
<br></br>“Better him than me.”
<br></br>
<br></br>We kept nodding, as if we understood.
<br></br>
<br></br>She gave a quick “thanks again,” tucked the cup into the box, and walked out without another word.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
         Tom Busillo (he/his) is a writer from Philadelphia who's written a completely unpublishable 2,646 page conceptual poem composed of 11,111 nested 10-item lists. He's still recovering from the ordeal and is now focusing on much shorter work.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
