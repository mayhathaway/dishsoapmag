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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)///
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Alex Blake</h3>
            <h1 className={indexStyles.posttitle}>Pleasure, Family, Romance, Knowledge, Fortune, Popularity</h1>
          <p className={indexStyles.posttext}>        
James only has eyes for Patrick. To keep up appearances, he lives with Sandy. Sandy works as a Lab Technician. She goes to work, comes home, watches TV, makes dinner, and sleeps. James is an artist. Patrick loves that about him. He’s quiet and reserved, but passionate. Patrick works in Law Enforcement. He is really fit. He only wears athleisure, unless I’ve got him in his formalwear. He has a home gym at his property, but I don’t spend much time there. Instead Patrick comes over to see James while Sandy is at work. They sometimes flirt or tell a joke. Sometimes other stuff happens. One time, James started getting a bit too flirty with Christie, and I locked her in her kitchen by deleting the doors. She doesn’t come round anymore, but James started calling her on the phone. I deleted her phone. That’s the problem with the Romance aspiration. 
<br></br>
<br></br>Patrick came over earlier. I had him go and see James’s art studio upstairs. His beautiful paintings cover the walls. I had to remove a window to make them fit. I just know that he’s thinking, “Wow. I’m so in love.” I think it’s time tonight. My sister is out and mum and dad are watching Holby City downstairs. James is walking downstairs. I didn’t even have to ask him. Patrick stands up from his position on the couch. They meet in the living room and Patrick gives James a hug. They’re doing it without me even clicking. I send James to the bed upstairs. He travels up the staircase, walks to the bed, and positions himself on top of the duvet cover. Then I ask him to ask Patrick to join. He does. They make out. I let go of the mouse and just watch for a minute. I check Sandy isn’t due home. No, she’s still got hours left of her shift. The TV is loud downstairs. Patrick and John are still making out. Maybe one day they can have their own house. A house with an art studio room. Maybe even their own family. I think they’d like that. Patrick earns a decent salary. They could have a nice house, and they could have a nice bed. When they finish making out, I make them do it again. I think they’re thinking about that life. I know that Sandy is a good person. I think she’d understand. They could invite her round for dinner sometimes, or call her on the phone. If I get an expansion for Christmas, they could meet at a bar. Patrick and James could have a candlelight meal like they’ve always dreamed of. 
<br></br>
<br></br>They finish making out and return to their positions on the bed. All upright against the headboard, legs outstretched. There’s a creak on the staircase and I spin in the chair. James is saying something to Patrick and he nods excitedly. Someone is coming up the stairs. James and Patrick are getting under the covers. I didn’t ask them to do that. I reach for the mouse and click frantically to cancel the action. It doesn’t work. They’re still making love. Someone is almost at the top of the stairs as I’m trying to close the window. They call “John.” The screen has frozen in this position and my mouse no longer works. Cancel action. I feel my clothes stick to my armpits and my face flush. I press the power button on the monitor and it still remains on. I press it again and again. I look at the extension cord and the computer’s power cable, but it’s too late. The only thing left to do is cover the screen with my hands. The light makes my fingers look red. It wasn’t my fault. I didn’t click that. I don’t know what is happening. I don’t want to lose you, Patrick. 

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
Alex Blake (He/Him) is a fiction writer and artist based in Sheffield, UK. His short fiction has appeared in Chthonic Lit and is forthcoming in Table Salt Press and Pfielstorch. 
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