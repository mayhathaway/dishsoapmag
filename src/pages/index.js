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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>What Work</h3>
            <h1 className={indexStyles.posttitle}>Stephanie Rick</h1>
          <p className={indexStyles.posttext}>        
   Epigraph: "Clarity in the sense of silence." — Oppen
<br></br>
<br></br>
<br></br>Tonight, I'm coughing again. Long, racking coughs that leave green mucus in the sink and raw bumps coating the back of my tongue. My top left molar aches from suctioning against the airflow. The kettle clicks off. Steam rises in a long white column like a ghost that wanted a body but forgot how.

<br></br>
<br></br>I pull down the translucent orange glass mug. There used to be two. I assume we kept one each like some symbolic arrangement, but the truth is smaller: he poured coffee in his one morning because I hadn't bought him disposable cups yet, carried it out the door, and never brought it back. Practical migration. I should have asked him to return it, but I never ask for things back, not even myself.

<br></br>
<br></br>The first time we drank tea from these mugs, he pretended he wasn't an alcoholic and I pretended I wasn't anxious. Orange and turmeric bags from the inexpensive grocery store. Paper lantern in the corner glowing faintly, the same warmth. 

<br></br>
<br></br>We went to bed without having sex. Eventually we fell asleep facing each other, small breaths shared like a secret, his arm under my pillow. At some point he rolled onto his stomach to keep from snoring. There was something beautiful in that caution, the way sleep was a performance too. Later, when we knew each other worse, he would snore so loud it sounded like a truck idling in the room, nights shaking with noise, but somehow, safety. Sometimes I'd jolt him awake with a shove, and sometimes I'd bury my face in his chest like he was purring. It was easier to accept disruption if I turned it into tenderness.

<br></br>
<br></br>A friend at work gave me a sandwich bag labeled Grief Medley after she saw my Instagram story about the breakup: chamomile, rose, lemon balm, skullcap. "For your heart or whatever," she said. I think <i>this is the whatever</i>. The herbs rise, sink, rise again, small aquatic gestures. Occurrence, a part of an infinite series. Oppen is there like background radiation — silent but measurable.

<br></br>
<br></br>Steam curls from the mug like something trying to stand, then forgetting why.

<br></br>
<br></br>Sometimes I imagine a warehouse of departed objects: single socks, salt shakers without their twins, spare keys without the original, mugs separated by accident. 

<br></br>
<br></br>Orange glass, handle facing east, 
<br></br>
<br></br>Orange glass, handle facing east,
<br></br>
<br></br>Orange glass, handle facing me.

<br></br>
<br></br>In the apartment above me, one of the neighbors drags a chair across the floor. A floorboard gives, then quiets. I drink. Rose first, then bitterness, then warmth — not comfort, just temperature, like touching the spot where a cat just slept.

<br></br>
<br></br>He once said, "I'm so glad I did the work to find you, for us to be together." 

<br></br>
<br></br>I asked, "What work?" And I waited the way you wait for someone to confess an impossible quest, waiting for him to echo exactly what I'd done — books read in solitude, journals filled, old wounds tended. But he just shrugged, a gentle shoulder lift, like the work was invisible labor performed in a dream and I should already understand.

<br></br>
<br></br>I picture his cabinet sometimes: my mug beside other mugs, maybe ones he stole from his other ex-girlfriends, pressed between Lisa and whoever the next one is. Meanwhile this mug sits in my cabinet next to cough syrup and the herbs labeled grief, as if the two of them could see each other through the dark space between one cabinet and another.

<br></br>
<br></br>Nothing resolves. The tea cools. I tilt the mug toward me, checking its surface to see if I can catch the other one looking back. I cough again, startling, as if my body is insisting on its own presence. A small panic flares: <i>what if no one ever truly returns anything</i>?

<br></br>
<br></br>Steam rises once more and disappears before I can finish watching. Clarity, yes — but only in the sense of holding something translucent to the light and then, silence.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Stephanie Rick is a writer, mother and teacher who wants to adopt an adult husky dog who understands why she cried on the way to the Colosseum. You can find her online at <a href="https://www.stephanierick.com">www.stephanierick.com</a>.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
