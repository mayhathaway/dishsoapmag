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
            <h3 className={indexStyles.postauthor}>Mac Murray</h3>
            <h1 className={indexStyles.posttitle}>Whirlpool</h1>
          <p className={indexStyles.posttext}>
          It was four in the morning. The building was mostly graduate students still weaning off undergraduate sleep habits. Erin was banking on none of them having the fortitude she did, at 32, with her fully developed brain sitting taut in her skull.
          <br></br>
          <br></br>Four a.m. had to work. Seven a.m. had not worked; nor had midnight, noon, or dinnertime. Each time she had dragged herself down the thirteen floors to the basement, she’d found every washing machine busily chugging.
          <br></br>
          <br></br>Now, her own and David’s clothes were squished into a stinking grave at the bottom of the hamper, which also contained the covers to every throw pillow and dog bed, three sets of crib sheets, seven baby blankets and burp cloths, and innumerable precious little onesies stained with shit or vomit. Phoebe was incontinent because she was a baby, and Daisy was incontinent because she was very old and had lost her mind, and was now prone to wandering room to room with vacant eyes and leaving little trails of urine around the apartment.
          <br></br>
          <br></br>No one else in the building seemed to be awake. All the motion-activated lights flickered to life as Erin walked through the halls, and she could hear nothing but the mechanical struggle of the elevator as it rose to meet her, lurching in the way that always made her feel bad for summoning it.
          <br></br>
          <br></br>The basement was an all-cement affair, with walls inexplicably washed in white acrylic paint, and a few bare fluorescent bulbs illuminating the washers. Five machines. They’d been in her dreams lately, always taunting her with their fullness. Now, she stood and blinked at them, eyes filmy. 
          <br></br>
          <br></br>Each washer was in use. Each timer reported 42 minutes left in the cycle. Each churned and rattled against the floor, sloshing waves of hot suds against the glass door. Her throat choked on a sob that contained no liquid.
          <br></br>
          <br></br>Each machine being at the same point in the cycle, their rhythms were synced. It was like a ballet, the way they would all jump to the left and then the right, then regurgitate a belly full of water, then begin a vigorous clockwise whorl. She realized she had never sat and watched a whole wash cycle, and suddenly that seemed like the only thing she was capable of doing. She perched herself on the old formica table in the back corner of the room, next to two mismatched socks someone had placed there long enough for them both to be covered in a scrim of dust.
          <br></br>
          <br></br>She watched the dance. She listened to the music – the roar, the plunging, the vibrato. Then she noticed the same pink thong press itself to the glass in each machine, then jeté offstage in the same graceful arc.
          <br></br>
          <br></br>She stared. In each soapy window, a striped sock appeared. Then a sheaf of brown fabric – a pair of khakis. Then the thong again. The sock. The khakis.
          <br></br>
          <br></br>She crossed the fluorescent expanse slowly and touched the handle of each machine. Locked, of course. The water kept surging against the door. Thong. Sock. Khakis. Thong. Sock. Khakis.
          <br></br>
          <br></br>She went to the dryers, which lined the adjoining wall, opaque and silent. She pulled one open. A dark heap of clothes inside. It was completely cool, like it had been sitting there for days. She gathered the load up in her arms and threw it on top of the machine. She would empty another one, too, she decided, for her own things, and when one load of thongsockkhakis was done, she would dump it in the dryer and leave it to mildew.
          <br></br>
          <br></br>She was scrounging in the back of the dryer for lint and underwear when she heard footsteps and yanked herself out of the machine. She was kneeling in front of it, clutching a pair of leopard-printed panties, when a girl appeared in the doorway. A graduate student, probably. She had a nose ring and blonde hair scrunchied on top of her head like she couldn’t be bothered.
          <br></br>
          <br></br>“That’s my stuff,” she said.
          <br></br>
          <br></br>“Oh.” Erin looked at the pile she’d just deposited on top of the dryer, then down at the underwear in her hands. “I’m sorry. I didn’t think anyone was coming back for it for a while.”
          <br></br>
          <br></br>The girl frowned at her, twisting her nose ring. Erin stayed frozen on the floor as the girl approached and scooped her laundry up. She didn’t have a hamper – just held the whole load in her arms.
          <br></br>
          <br></br>“Those too, thanks,” she said, eyeing the underwear. Erin flushed and laid them delicately on top of the pile.
          <br></br>
          <br></br>The girl turned to leave, her plastic slides scuffing through the dust. When she reached the doorway, she looked at Erin over her shoulder.
          <br></br>
          <br></br>“You’re not the only one who lives here,” she said. “You should think about other people before you touch their stuff.”
          <br></br>
          <br></br>“I’m sorry,” Erin said again. “I really didn’t think – I didn’t think you were doing laundry. I’m sorry.”
          <br></br>
          <br></br>The girl stared at her, narrowed her eyes.
          <br></br>
          <br></br>“Who would be doing laundry at a time like this?” she said.
          <br></br>
          <br></br>She left, and Erin heard the elevator start grumpling upwards. Something had fallen from the girl’s arms in the doorway – a striped sock.
          <br></br>
          <br></br>Erin looked back at the washers. Thong. Striped sock. Khakis. Each timer still displayed 42 minutes to go. A jet of water blasted against each door and streaked down. Thong. Sock. Khakis.
          <br></br>
          <br></br>She steadied herself on her hamper, trying to ignore the toxic pull of its contents, the ball sweat in David’s boxers mingling with her stiff sour jeans. She used to have nice clothes. How had she ever kept them clean?
          <br></br>
          <br></br>It was 4:30. In two hours, David would be needing his work clothes. And any minute now, Phoebe would be fussing, spitting onto her bare crib mattress. Once Phoebe started making noise, Daisy would start growling and pacing, a sentinel for nothing.
          <br></br>
          <br></br>She thought about David having to attend to the crying baby and the yapping dog before they pissed off the neighbors. If a neighbor knocked on the door, how would David answer it? In his bathrobe? No clean clothes anywhere. He’d have to have Phoebe on his hip and shoo Daisy back with his foot. He’d have to apologize.
          <br></br>
          <br></br>She picked up the striped sock the girl had dropped and pulled herself back onto the table. She laid down and closed one of her eyes. In front of the other, she held the sock so that it lined up exactly with the miniature distant copy in the leftmost washer. Every forty seconds or so, they would overlap. Thong, socksock, khakis. She thought about leaving her hamper here, returning to the twelfth floor with just a single striped sock.
          <br></br>
          <br></br>“Here,” she would say to David, “you can wear this to work. It’s clean.”
          <br></br>
          <br></br>She laughed to herself. Then she moved the sock under her ear, forming a thin pillow against the cold surface of the table. She was so tired. She watched the machines and their dance, watched them gyrating farther and farther away in the bright white light of the basement. The girl had been right – who would be doing laundry at a time like this?

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Mac Murray is a writer, dog walker, and gender upender currently living and working in NYC by way of Seattle. Their work has been published by Bricolage, Fish Barrel Review, and fifth wheel press. They earned their BA in creative writing from the University of Washington, where they were also awarded the Eugene Van Buren prize for fiction. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
