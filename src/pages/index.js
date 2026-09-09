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
import july22 from "../images/july22.jpeg"

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
            <h3 className={indexStyles.postauthor}>Chris Scott</h3>
            <h1 className={indexStyles.posttitle}>Watching 'Friday the 13th Part VIII: Jason Takes Manhattan' While My Life Falls Apart</h1>
          <p className={indexStyles.posttext}>        
My wife took the kids and left for her mother’s a week ago so there’s no one home to whom I can point out stuff like, see, the timeline is all fucked up in the franchise by this point so even though this was clearly shot in the late ‘80s, if you do the math of the preceding seven films, when they happened and how much time supposedly passed between each sequel, Part VIII should take place in like 2000. Which is absurd. Maybe even 2001 or 2002. And since you can clearly see the World Trade Center in the establishing shots of New York, you could even conclude that 9/11 never happened in the Friday the 13th universe. So in other words, even in a world where all this gruesome, terrifying stuff was going on, where there was an actual Camp Crystal Lake and a Jason Voorhees slaughtering dozens of people every other year, there wouldn’t have been a 9/11. And wouldn’t that be worth it? Wouldn’t that be a good trade-off, all things considered?
<br></br>
<br></br>My boss -- former boss now, I guess -- Mark texts, just checking in, seeing if I need any help with the job search and I text back that Jason kills an entire high school graduating class in this one. Or the viewer can assume he does, because they all get on the boat at the beginning, and only a few escape. So Jason killed them all, exceeding his highest body count by, what, fifty? Travis doesn’t reply. I never really cared for him, but that wasn’t his fault. That was all me.
<br></br>
An old friend -- or acquaintance, more accurately -- who I haven’t talked to in like fifteen years messages me on Facebook. I have to open up his profile pic and study it for a minute before I remember, Oh yeah, Jason. His name is actually Jason, if you can believe that. Hey man, he writes, I heard about what’s been happening and just wanted to say hang in there. I zoom in on his face on my phone, trying to imagine what he would look like in a hockey mask, but he doesn’t have the build to pull off Jason Voorhees. He’s too short and kind of scrawny, and also he looks extremely happy with his husband and baby in the picture, and Jason Voorhees was never happy. Or maybe he was happy, briefly, when he was a kid. Before he drowned and all of this started. Hey Jason, I write back. In this one, all the Crystal Lake scenes were shot in Vancouver, which explains why there’s suddenly a gorgeous, snow-capped mountain range bordering the lake, even though obviously Crystal Lake is in New Jersey. And there are no mountain ranges like this in New Jersey, right? Little bubbles appear indicating that Jason is responding but then they vanish. Are there mountains in New Jersey? Jason? Are there any beautiful mountains that look like this in New Jersey?

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
     Chris Scott's work has appeared in The New Yorker's Shouts & Murmurs, HAD, hex literary, Okay Donkey, Milk Candy Review, and Dishsoap Quarterly. He's a regular ClickHole contributor and elementary school teacher in Washington, DC. You can read his work at <a href="https://www.chrisscottwrites.com">www.chrisscottwrites.com</a>.
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
