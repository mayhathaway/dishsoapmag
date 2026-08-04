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
            <h3 className={indexStyles.postauthor}>Daniel Ditty</h3>
            <h1 className={indexStyles.posttitle}>Tigers</h1>
          <p className={indexStyles.posttext}>        
Beth didn’t have a dad so she had to ask me about cars. Walking back from the meeting, the heat was fading and a cool breeze rushed up the avenues from the water. She told me she needed a car. It was time she had one again. A good car is hard to find, I told her. And any car is hard to park. Junkies break into cars all the time.
<br></br>
<br></br>The bus came up behind us and we ran to the next stop. I paid her fare.
<br></br>
<br></br>I didn’t know shit about cars so I had to ask Dale from work. Dude, just get a Toyota, man, he said. So, for two weeks, Beth and I went to the library after I got home and scoured the internet, looking for something she could afford. We found nothing.
<br></br>
<br></br>Then, on the bus home from work, I spotted a Camry with a hand-painted For Sale sign in the parking lot of the convenience store on Twelfth and Washington. I roused her from the couch and walked her back. She was excited.
<br></br>
<br></br>Burgundy with a silver rear bumper. Tan interior and a moon roof. Tires that, to me, looked close to new. The sign had no number so we walked into the store and asked the guy behind the counter. He said nothing but nodded and made a call.
<br></br>
<br></br>A few moments later a short man with sunglasses came in, his cell phone to his ear.
<br></br>
<br></br>You want the car, he said. He had an accent but I couldn’t tell from where.
<br></br>
<br></br>Can we drive it, I asked.
<br></br>
<br></br>We go, he said. We all go. Come on. He handed me a ring full of keys and I handed them to Beth.
<br></br>
<br></br>Oh, she drives, he said. Okay.
<br></br>
<br></br>The short guy took the passenger seat and I sat in the back. Beth pulled out into traffic. She accelerated then braked hard. She twiddled with the stereo. She opened the moonroof. She drove down Lincoln toward the freeway with one hand atop the wheel and her elbow out the window. But there, right before the entrance, she flipped a u-turn.
<br></br>
<br></br>Is this the kind of car you’d want to die in, she asked.
<br></br>
<br></br>I don’t want to die in any car, I said.
<br></br>
<br></br>My dad died in an Oldsmobile Cutlass Cierra, she said.
<br></br>
<br></br>No one dies, the short guy said. Four airbags, he said and he held four fingers up over the dash for us all to see. Good brakes. No one dies, he said again.
<br></br>
<br></br>He didn’t crash, Beth said. He OD’ed.
<br></br>
<br></br>We didn’t buy the car. We told the guy we’d think about it.
<br></br>
<br></br>For a week I rode the bus to work and saw the Camry there, unmoved. Windblown trash collected under its tires. Its windows fogged with dust.
<br></br>
<br></br>One night, I asked Beth if we should invite the neighbors over for dinner. They were our age with no kids and sometimes woke us with their loud sex. She said she didn’t know how to cook. I told her I did. I could make enchiladas, vegetarian, I said. Sounds messy, she said. So I let it lie.
<br></br>
<br></br>I told Dale about the Camry. Sounds like a good one, he said. I told him I was worried about break-ins. Just leave it unlocked and empty and get a club, he said. What else you gonna fuckin’ do? Take the bus everywhere for the rest of your life?
<br></br>
<br></br>Beth told me once that she’d been to lots of churches but only for programs, for meetings. I told her we should go. I hadn’t been since I was a child. I couldn’t remember what kind I had gone to so I picked the best looking one that was easy to get to. We treated it like the prom and got as dressed up as we could. She wore this silky, floral dress. White with orange and blue flowers that looked like tigers when I squinted. We smiled and nodded to the man in robes that smiled and nodded to us. We sat in the pews. People stood up and sat down and the priest spoke interminably in a language I didn’t think was English. Beth smiled then turned to me and said she’d never felt more like getting high. We never went back.
<br></br>
<br></br>After work, I went to the fancy market and bought everything I needed for enchiladas. I figured I could just make them and if they were good and Beth was up for it, we could just ask the neighbors over spontaneously. It all barely fit in one bag. I felt oddly proud, smiling at the other busriders over the cilantro. People smiled back, like I was a dad with a small child on his lap.
<br></br>
<br></br>Out of habit I turned around as we passed the convenience store. The Camry was gone. We’d run out of time to get her what she’d wanted.
<br></br>
<br></br>Beth wasn’t home when I got there and I felt lucky for the opportunity to surprise her. I got to work on the enchiladas. I sauteed the vegetables. I shredded the cheese. I set the oven to heat. I got lost in the process. I put them in the oven and sat on the couch. When the windows went dark and the enchiladas were done and she still wasn’t back, I knew she was gone.
<br></br>
<br></br>A few weeks later, the Camry was back. In the store I asked, where’s the girl that bought the car?
<br></br>
<br></br>No one bought it.
<br></br>
<br></br>I want it, I told him.
<br></br>
<br></br>He doesn’t want to sell it anymore.
<br></br>
<br></br>Call him. Tell him it’s me.
<br></br>
<br></br>The short guy showed up without his sunglasses or cell phone. His left eye was grey.
<br></br>
<br></br>You want the car?
<br></br>
<br></br>Can we drive it again?
<br></br>
<br></br>Sure, he said.
<br></br>
<br></br>I pulled out onto Lincoln, strangely empty. I sped toward the freeway entrance. The light turned yellow, he reached for the dash. I floored it. In this car, no one dies.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Daniel Ditty's most recent works have appeared in <i>Pictura Journal, Two Hawks Quarterly,</i> and <i>The Barcelona Review</i>. He lives in Oakland with his wife and two children and is currently at work on a full-length play about ghosts in the woods.
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
