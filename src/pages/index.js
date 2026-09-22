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
            <h3 className={indexStyles.postauthor}>Kevin Snyder</h3>
            <h1 className={indexStyles.posttitle}>A-Frame Gorillas</h1>
          <p className={indexStyles.posttext}>        
The afterlife is a wrestling match. Greco-Roman, body-on-body skin jousting. Two at a time on a single matted podium flanked by dual lines of disrobed challengers. The A-frame shape of bodies comes into view about a mile back from the stage, perched against each other like tentpoles.
<br></br>
<br></br>Very few of us are professional, of course. Most of the matchups are one-sided. Being younger and bigger is an obvious advantage. The geriatrics are bruised before they even hit the mat. No feeding tubes, no oxygen. Canes sidelined. The tennis balls on the ends of dropped walkers roll out like guts.
<br></br>
<br></br>I’m close enough now to count both lines of us—to figure out who I’ll be up against. The first ten of the opposite row are a medley of eightys and ninetys, shambling along from failed bouts. I was lucky to die at sixty-five. I’m not much of a fighter but I’ve got the split lip and white callouses to be convincing. It’s a mind game, really. At least until I’m laying someone out flat.
<br></br>
<br></br>I tally my number and then do the same for the other line and standing there across from me is an unseemly guy squared ahead with a blown-out cheek and welted up forehead. I hate him the moment I see him. I have to fight him, after all. But he’s young: early thirties. I have to hate him even more.
<br></br>
<br></br>A lanky priest goes headfirst from the podium and we all take a big step forward, except my opponent and I take two because we both walk like we’re saddled over something.
<br></br>
<br></br>He touches his cheek which is purple and glowing. The tree root architecture of his hand pops. I rub my shoulder. He rubs his. Same wide brow. Sunk chin. His one eye is green when he flashes it. Hawk nose but without the deviation. Less bald. Scars on his hands and feet instead of his forearms or face. We walk like gorillas.
<br></br>
<br></br>He’s my height, I think. I despise him for it. Ballooned up head: a blueberry. We take two more steps. Two, two, two. On the mat, somebody’s arm breaks. Nobody winces.
<br></br>
<br></br>A 30-something man, but I recognize his nose-tip glare and the way he knuckles that vacant spot on his third finger. I see a man that I know. A tenderness and a brute. And I’m looking up at him suddenly from my tricycle on the family lawn. From around hallway corners in the dark. From over my mother’s shoulder. And from our approaching corners of the mat, I could touch him if I wanted. Two long steps and I could rest my hand around his bulbous cheek. He could hit me like it was Sunday morning.
<br></br>
<br></br>When gorillas fight, they posture before battering each other. They put their chest out in front of their chin, lock eyes, aim their ego like a weapon. It’s a peacock tactic. Fluff. Brothers, cousins, fathers and sons. The tradition of maleness. And when it’s over—when all the dishes have been thrown, the dictionary exhausted, skid tires in the driveway—they go back to being apes. Hominids.
<br></br>
<br></br>It’s our turn on the mat. We begin in embrace. Bent over one another. He calls me ugly. He spits. His swollen eye bleeds a little on my cheek. My crooked nose is buried intimately in his shoulder. We’re nearly newborn-naked and he’s warm and he smells like my mother’s closet.
<br></br>
<br></br>When we set off, he pushes away and I clasp him closer. He wriggles, shoves. I pull and pull. He’s bigger than I am now and I remember being young, being small. I remember learning the tenets of manhood from wound up backhands in the parking lot before church. I’m tougher than he is. I can take more. He fights like a man who’s never been hit back. I remember never hitting back.
<br></br>
<br></br>He thumbs at the ring on his other hand. I buried one like it with my father and he buries it now in my ribs. The whistle hollers and he backs off his fist like he’s reloading.
<br></br>
<br></br>I’ve got my eyes sunk into him, my nose sunk into him. He feels like lazy days on the couch. Like the squeal of the hose along the wall outside my bedroom. My hands find each muscle in his back and I trace them the way my mother used to trace mine. Both arms wrapped around him, both of his braced away. I have him.
<br></br>
<br></br>But I lay down instead and I tap out and he doesn’t know I’ve done it on purpose, so he hurrahs for himself and shoves me a little and gets down off the podium, unwound, whining. He’s smaller from up here.
<br></br>
<br></br>I’m cold on the mat, and I’m being shooed along. The way he hit me left some impression—the branding of his ring on my rib and something like contempt and the sheen of blood on teeth, but he’s young and I’m old and he’s mean and we’ll always be that way now. And when I get back in line I can’t see the fighters anymore but I can hear the pummeling and I hate it more than him.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
   Kevin Snyder is currently pursuing a Master of Arts in Writing at Johns Hopkins University. He is based out of Seattle. His previous work has been published in January House.
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
