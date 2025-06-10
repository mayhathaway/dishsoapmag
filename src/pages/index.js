import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import anaphora from "../images/anaphora.jpeg"
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
            <h3 className={indexStyles.postauthor}>Bob King</h3>
            <h1 className={indexStyles.posttitle}>Would You Bring Me Back to Life if I Got Bitten by a Dead Blue-eyed Bear?</h1>
          <p className={indexStyles.posttext}>
       There are questions we all want to ask,
<br></br>but we don’t want the answers to, at all:
<br></br><i>Am I attractive to you, still, after all these
<br></br>years?</i> Am I the type of person you still
<br></br>don’t mind sleeping with? Give it to me
<br></br>straight. Don’t give it to me. More soberly,
<br></br>would you try to identify my remains
<br></br>if you got that call you’d never want to
<br></br>get & were asked to identify my remains?
<br></br>Would you cry right away or try to hold it in
<br></br>until you hung up, agreeing to be there soon?
<br></br>Do you know that I already know the answer
<br></br>to that question? Would you drive yourself
<br></br>to the morgue? Would you call one of our
<br></br>daughters to drive you there? Even if it
<br></br>took them a while or a day to get here,
<br></br>here to their home, to their once-home,
<br></br>to take you to that cold steel slab with
<br></br>me on it? Or maybe you’d call your sister
<br></br>in part so you’d feel less guilty about not
<br></br>talking to her as much as you should talk
<br></br>to her, but she’s moved further away & that
<br></br>might be a hassle for everyone involved,
<br></br>even if everyone is only really two people
<br></br>that need to get over themselves, even if
<br></br>you know that so many have died
<br></br>not being able to get over themselves
<br></br>or someone else, & grudges are very much
<br></br>like souls, because once you physically die,
<br></br>is there really anything left to hold,
<br></br>from flesh to ideas, ideas about ideas, dirt
<br></br>& resentments & misplaced reverences
<br></br>& rightly placed grievances? Do you
<br></br>know how much I like the texture of you?
<br></br>Not just your underwear or skin, but
<br></br>even the things that might evaporate?
<br></br>Which is to say, most things. Did you
<br></br>know I’ve been working on a country song
<br></br>& it starts, <i>Did you know the kitchen smells
<br></br>like popcorn & the bedroom smells like weed?</i>
<br></br>Would you die all at once, or maybe die in
<br></br>smaller bites so it might take longer to die,
<br></br>or try your hardest not to die at all? Wait—
<br></br>might you call my brother? My sister? My
<br></br>dad, who, I think at this point does see you
<br></br>as a daughter because sometimes small
<br></br>distinctions evaporate into no distinctions
<br></br>& while that persistent mist can lead to
<br></br>black mold, it just as easily can lead to an
<br></br>end-of-summer rainstorm in the grocery store’s
<br></br>parking lot, steam rising from the graying
<br></br>asphalt, your neck craning around because
<br></br>it’s just the type of August heat & incoming
<br></br>relief that might produce a rainbow?
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
         Bob King is a professor at Kent State University. His poetry collection And & And came out in August 2024. And/Or is forthcoming in September 2025. New work appears in CrayfishMag, Ink in Thirds, Anti-Heroin Chic, Ink Sweat & Tears, & Allium: A Journal of Poetry & Prose. He lives in Fairview Park, Ohio.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
