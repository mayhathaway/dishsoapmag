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
            <h3 className={indexStyles.postauthor}>Raymond Brunell</h3>
            <h1 className={indexStyles.posttitle}>Forty-Seven Angles</h1>
          <p className={indexStyles.posttext}>        
I have painted forty-seven portraits in green, and I am beginning to understand what they want to tell me.
<br></br>
<br></br>The condition began the night Constance drowned. Before that night, green was green. After, green became the scent of Dawn dish soap, the kind she poured into the bathtub until the water frothed like the sea.
<br></br>
<br></br>Synaesthesia, the neurologist said. Trauma-induced cross-wiring. As if grief were a technical malfunction.
<br></br>
<br></br>I paint only in green now. Viridian, jade, celadon, olive, sage. My studio reeks of artificial cleanliness, that chemical approximation of lemon. Gallery visitors think it's conceptual. When I tried crimson once, I vomited for an hour, tasting soap bubbles and bathwater.
<br></br>
<br></br>Tobias Grath sold the first portrait for eight thousand dollars. Moss and malachite rendered Edmund Poole. Poole sat for three sessions while I worked to capture something I couldn't name. His eyes—I needed to get them exactly right.
<br></br>
<br></br>Two weeks later, Poole called. "I keep dreaming," he said. "Every night. I'm underwater. There's soap in the water. I'm drowning in a bathtub."
<br></br>
<br></br>I told him that paint could not transmit dreams.
<br></br>
<br></br>I hung up and stared at my current work—Diane Holst, her face taking shape in bottle green. Something in the angle of her head. I had positioned her exactly so, adjusted the lamp three times until the shadows pooled spot on, until some unconscious arithmetic in my mind resolved into rightness.
<br></br>
<br></br>I had not realized I was recreating anything.
<br></br>
<br></br>Diane Holst called three weeks later. Same dream. Same bathtub. Same soap choking her lungs.
<br></br>
<br></br>That was when I examined the portraits.
<br></br>
<br></br>I laid them out in a timeline—all seventeen I had painted—and stood back.
<br></br>
<br></br>The pattern was there. Had always been there.
<br></br>
<br></br>Each portrait captured a different angle of the same scene. Edmund Poole's eyes looked at something, and the angle matched exactly with what Diane Holst's portrait revealed in the background—tile, porcelain, and chrome fixtures. The next portrait showed a hand emerging from frame-left, and when I cross-referenced it with Poole's, the angles aligned like puzzle pieces.
<br></br>
<br></br>I was reconstructing the bathroom. The moment. The night I was eight years old and Constance was sixteen.
<br></br>
<br></br>Not with intent. But my hands knew. The pattern-making part of my brain, the part that finds connections others miss, that completes sequences, that cannot rest until the picture is whole—that part was painting what I had seen from every angle of a child's fragmented memory.
<br></br>
<br></br>I've painted thirty more portraits since that realization. I cannot stop. The compulsion is exquisite, precise. Each subject sits where I position them, and I paint what I see through them—another piece of that night, another fragment of what I have been assembling all along.
<br></br>
<br></br>The subjects dream because something passes between us during the sitting. I watch them until I find the angle, and in that moment of recognition—when their position resolves into rightness—they see what I saw. Not an explanation. Transference. The portraits are nothing more than proof that the transfer occurred.
<br></br>
<br></br>Gallery visitors ask why all my subjects look so haunted. Tobias says it's my gift. He has sold forty-seven portraits now. I am famous due to my grotesque nature.
<br></br>
<br></br>But I am close.
<br></br>
<br></br>The portraits, assembled in digital space, form a complete panorama. I have mapped every inch of that bathroom from every possible angle except for two. The view from above, looking down. The view from inside the water, looking up.
<br></br>
<br></br>I know now what I am painting toward. The final portrait will show me what I could not let myself see that night—whether Constance pulled herself under the water, if her hand reached up for help, or another hand pushed her down.
<br></br>
<br></br>If I stood in the doorway and watched, eight years old and paralyzed.
<br></br>
<br></br>Laurence Grieve sat for me yesterday. Nervous, asking why I needed him to tilt his head back at such an uncomfortable angle. I didn't tell him he was looking up from the position of someone
<br></br>
<br></br>submerged in a bathtub. I didn't tell him his portrait would reveal the water line, the underside of soap foam, and the distortion of light through liquid.
<br></br>
<br></br>When I finished, I could see her hand in the background. Fingers spread.
<br></br>
<br></br>He called me this morning. Three a.m. His voice was shaking. "I need to know—did something happen to you? In a bathroom? Because I can't stop seeing it. I can't—" He was crying. "It feels like I'm remembering something that isn't mine to remember. Please. What did you do to me?"
<br></br>
<br></br>I told him it would fade. I do not know if that is true.
<br></br>
<br></br>I have one portrait left to paint.
<br></br>
<br></br>I have searched for months. They must be the correct height, the precise build. They have to hold stillness the way a child holds it—frozen and watchful. The angle of view must be from somewhere near four feet off the ground, looking through a doorway into a bathroom.
<br></br>
<br></br>I found her last week. A college student, pale and slight, with dark hair like mine. She occupies space the way I occupied it at eight years old—with reservation, as if apologizing for existing.
<br></br>
<br></br>She sits for me tomorrow.
<br></br>
<br></br>I have prepared the canvas. Triple-primed. The green I will use is the darkest I have ever mixed—a green so deep it approaches black, the color of water in the moment before drowning, the color of the empty dish soap bottle I found later on the bathroom floor.
<br></br>
<br></br>I know what this portrait will show me. The pattern has been building toward this revelation for forty-seven iterations. Every previous angle has pointed to this final perspective, the one I have been avoiding and approaching in tandem.
<br></br>
<br></br>The portrait will show what the child in the doorway saw. Whether Constance's eyes were open or closed. Had she turned her face toward the door. If she saw me standing there.
<br></br>
<br></br>Whether she was reaching toward me.
<br></br>
<br></br>Had I turned away?
<br></br>
<br></br>The girl arrives at nine tomorrow morning. I have arranged the easel, mixed the paint, and positioned the lamp. The studio already reeks of soap, that artificial clean scent that has become the smell of my entire adult life. I will position her in the doorway. I will paint what I see through her eyes, what I saw through my own eyes that night, the last piece of the pattern my hands have been working toward for years.
<br></br>
<br></br>And when I finish the portrait, when I complete the sequence, when all forty-eight angles resolve into one panoramic moment of absolute clarity—I will finally know what happened.
<br></br>
<br></br>The green will tell me. The green tells me everything now. It is the only language I have left.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Raymond Brunell writes speculative fiction that explores the physics of loss and transformation. His flash and short fiction has appeared in Skeleton Flowers Press, Brilliant Flash Fiction, and The Drift. He curates his broader literary projects at www.unbound-atlas.com.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
