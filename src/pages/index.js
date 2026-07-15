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
            <h3 className={indexStyles.postauthor}>Emily Rinkema</h3>
            <h1 className={indexStyles.posttitle}>Pull It Together, Wilson</h1>
          <p className={indexStyles.posttext}>        
Our job is to keep people away from the backpack until the squad gets here to destroy it.
<br></br>
<br></br>“We should check it before they get here,” Wilson says. It’s his first week on security.
<br></br>
<br></br>“No,” I say. The backpack is outside the bathrooms on the first floor and we are about 20 yards away blocking the main entrance in case anyone wanders in three hours before the show. The only people around are vendors setting up and ticket-takers clocking in early.
<br></br>
<br></br>“But there could be a baby in there,” Wilson says.
<br></br>
<br></br>“In the backpack?” 
<br></br>
<br></br>“Yeah,” he says. “You never know.” 
<br></br>
<br></br>“There’s no fucking baby in there.” Sometimes I think I was paired with Wilson as punishment for not retiring, that they gave me the guy who can’t even grow a mustache, who spends his breaks scrolling on his phone, who still lives with his mother. 
<br></br>
<br></br>“How can you always be so sure of things?” he asks, and it’s like he’s really asking me, like he sees me as some kind of sensei. I shake my head.
<br></br>
<br></br>We wait. No one tries to get past us.
<br></br>
<br></br>“It’s just,” he says, “What if there is a baby?” 
<br></br>
<br></br>“Oh for fuck’s sake,” I say. “Why on earth would there be a baby in a backpack at the biggest rock venue in the city?” The squad should be here any minute and then they can just blow this thing up and we can be back to walking in circles all night busting fifteen-year-olds for smoking weed. Wilson was probably one of those fifteen-year-olds a few years ago.
<br></br>
<br></br>“Young mother panics,” Wilson says, “Puts her baby in the backpack, and sets it where she knows someone will find it. Because she loves it, just can’t take care of it.” He looks around like he might see her, this young mother of his. He’s shifting from leg to leg, the way my old partner used to do when he was nervous. 
<br></br>
<br></br>I look at the backpack, which is a pretty good-sized pack. 
<br></br>
<br></br>“If there was a baby in there, it would be crying,” I say. Three guys come through the main entrance, laughing. They turn our way, but I plant my legs and cross my arms over my chest and shake my head at them. They turn around. 
<br></br>
<br></br>“Not if it’s asleep,” says Wilson, staring at the bag. 
<br></br>
<br></br>I actually think he’d be good in a crisis, despite that nervous rocking thing. He’s focused. Or maybe he would just freeze like Gordy did on his last night, standing outside the school while I screamed at him to pull it the fuck together.
<br></br>
<br></br>“Go ahead,” I say to Wilson. “Quick,” I add, and he runs to the backpack, risking his stupid life, and unzips it. 
<br></br>
<br></br>“No baby,” he says, with so much relief that I want to hug him.




            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Emily Rinkema lives in northern Vermont. Her stories have recently appeared in Cutleaf, Moon City Review, Milk Candy, and Wigleaf, and have been selected for Best Small Fictions, Best Microfiction, and Best American Nonrequired Reading anthologies. You can read more at <a href="https://www.emilyrinkema.com/"> https://www.emilyrinkema.com/</a> or follow her on BS or IG @emilyrinkema.
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
