import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import mike from "../images/mike.jpeg"
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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)
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
            <h3 className={indexStyles.postauthor}>Shayla Frandsen</h3>
            <h1 className={indexStyles.posttitle}>We Strangers</h1>
          <p className={indexStyles.posttext}>
          Thing is I feel like some sort of freak because I love group experiences so much that sometimes when I’m experiencing something with a group I prefer the experiencing of the thing more than I love the thing itself. Say I’m seeing a movie in the theater which I do often. I’ll watch anything, pay for a ticket, grab a small popcorn, whatever, because I don’t really care about seeing the movie. I care about being with other people, seeing the movie. The movie can be absolute sucko green-screened garbage and I’ll still be happy, happy and glad to be surrounded by others, because at least we’re all lapping up the CGI’d remake-of-a-remake together. 
<br></br>
<br></br>When I took my niece and nephew to the zoo my brain practically shot to the moon, and remember I haven’t been to the zoo since I was a little stinker so I didn’t realize or maybe had forgotten over time it’s the ultimate group experience. (If I’m being honest surviving a plane crash and working together to survive in a remote wooded location is the ultimate group experience but zoos are more feasible and perhaps more immediate and possibly safer.) This one flamingo slipped and fell into the little pond and immediately shot to its feet and ruffled its feathers in embarrassed indignation acting like the slip didn’t happen and we all collectively lost our shit, we strangers, it was bright pink joy. And don’t get me started on the otters because I don’t have time to do them justice here. 
<br></br>
<br></br>Actually I will talk about the otters and how the two of them shot through the water like dark oily cats, smooth and spinning and long-tailed and maybe lovers but maybe siblings. Or a mother and her adult son. Or a father-daughter situation or two best friends. Cute carnivores with toothy smiles like they knew we were all watching and in love with them, we adoring audience with dizzy lovesick faces comparing notes, we giggling with the zoo-goer next to us as the otters tore into the bloody raw fish heads, we swapping stories of otters we’ve seen in the past. Yes I wanted to fly into the clouds at the zoo and I must say this is perhaps the only time I loved the thing itself more than watching the thing with a group and that’s because it’s difficult not to love otters. 
<br></br>
<br></br>It’s also difficult not to love traffic jams, and you might think I’ve really lost it because I am aware people usually say traffic jams are about as fun as a gut punch so it will surprise you to know I’d happily wait in traffic for up to a day and half because at least we’re all there experiencing it together, the highs and lows, or better yet the stops and gos, the blips of music from each car bubbling into a sound stew, our little rows of cars like Legos arranged by a fastidious hand. When it’s bumper to bumper I want to turn to the man in the dented blue Honda next to me and tell him if he simply took a second to look around he’d see the beauty of it all, he’d see that the two of us could be perfect together and could even have a pet together or a child, a baby who’d wake in the middle of the night crying and could only be calmed with mama’s milk and after drinking from me until she was full the baby would fall asleep on my chest and I would fall asleep too and the man could admire the image of us, of mother and child sleeping cuddled close and he could brush my hair off my eyes and gently carry the baby back to her little crib without waking her, which is a real skill, and then he’d lie down next to me and sleep would carry the three of us through the night and drop us on the shore of dawn where we would wake and do everything all over again.





            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Shayla Frandsen's writing can be found in New England Review, Iron Horse Literary Review, Flash Frog, Pithead Chapel, and in other places, too. In 2024 she won first place in the Smokelong Quarterly Award for Flash Fiction. In 2023 she won The Plentitudes Prize in Fiction. Her writing has been nominated for Best of the Net, Best Small Fictions, and the Pushcart Prize. Read more at shaylafrandsen.com. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
