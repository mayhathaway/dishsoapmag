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
            <h3 className={indexStyles.postauthor}>Marc Simon</h3>
            <h1 className={indexStyles.posttitle}>The Sea of Tranquility</h1>
          <p className={indexStyles.posttext}>
    Nobody knew where it came from, the baby blue Airstream trailer with the mirrored windows, sitting in front of the abandoned shed at the end of 14th Street. It just appeared last Tuesday morning with the trailer hitch resting on two four by fours.
<br></br>
<br></br>We watched as Toby Craig, the town cop knocked on the door. There isn’t much for a cop to do around here except to tell kids on Saturday nights to break it up and go home, but no one listens to Toby, and if you asked him he’d rather spend his time fishing with his droopy-bellied blood hound Mr. Waggles.
<br></br>
<br></br>There was no answer from the Airstream so after a few minutes Toby got out his cell phone. I guess he was calling the missing trailer hotline. He left with Mr. Waggles and told us to stay the hell away.
<br></br>
<br></br>Tuesday night, a bunch  of the kids I sometimes hang out with went by the trailer, just to see what was what. Tommy Hargrove, who thinks he’s my boyfriend pounded on the door so hard his knuckles bled. Tommy wants me and him to move to Oklahoma and get jobs and go to some dinky junior college where his cousin went. I told Tommy forget it, if I was going anywhere it would be somewhere cool and different, like Venice, Italy. Tommy said I was immature—as if he'd know.
<br></br>
<br></br>The other boys shot their Beebee guns and tossed cherry bombs at the trailer but it didn’t do anything. Junior Carter smashed his ATV into the side of the trailer and blew out two tires.
<br></br>
<br></br>The next night my Mom was working at the 7/11 and it was my Dad’s bowling league, so Tommy came over and wanted to “get jiggy.” I told him when was the last time you took a shower. I guess he got insulted because he called me a bitch and left.
<br></br>
<br></br>I started watching this old movie from the 1950’s on the science fiction channel, called The Day The Earth Stood Still. It’s about this flying saucer that lands in Washington, D.C. but it just sits there, doing nothing, and everyone is freaked out but no one knows what to do. Then this guy gets out and says he’s Klatu and he comes in peace, but eventually they shoot him anyway. The only way to save Klatu is to get him back to the space ship, to get this robot named Gort to come for him and bring him back to life. So this one woman, the only one that actually gets it goes to the space ship and says the words Klatu told her to say before he dies: Klatu barada nikto, which I guess means, Klatu needs help. 
<br></br>
<br></br>The next night my mom and dad got into this huge, glass-breaking fight about some woman name Kelli. I couldn’t stand it so I went to the blue Airstream and said, “Klatu barada nikto.”
<br></br>
<br></br>I was just about to walk away when the door opened. The guy inside looked a lot like the guy in movie, but with gray hair and glasses. He said, “Hi, Jennifer.”
<br></br>
<br></br>I asked him how he knew my name but he just smiled. I asked him, “Do you come in peace?”
<br></br>
<br></br>He said that he did. He asked me where I desired to go.
<br></br>
<br></br>Now the trailer is parked on The Sea of Tranquility. The Earth looks so peaceful from here.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
        Marc Simon’s short fiction has appeared in over fifteen iterary magazines. Five of his one-act plays have been winners in new works contests. His debut novel, The Leap Year Boy was published in December, 2012. His novella, According to Isaac, is now published on Amazon.com. See more at <a href="https://marcsimonwriter.com/">https://marcsimonwriter.com</a>.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
