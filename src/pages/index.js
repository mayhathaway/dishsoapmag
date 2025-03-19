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
            <h3 className={indexStyles.postauthor}>Ziqr Peehu</h3>
            <h1 className={indexStyles.posttitle}>Portrait of a Skeleton</h1>
          <p className={indexStyles.posttext}>
          It’s a farmhouse. Or a motel. Or a gas station lost in the desert heat. Maybe it’s the apartment you
<br></br>ived in during college, the one with the cracked ceilings and the windows that wouldn’t open, no
<br></br>matter how hard you pushed. Someone is sitting on the roof. Someone is curled up in the bathtub.
<br></br>Someone is pacing the hallway, their shadow spilling down the staircase like water. Maybe it’s you.
<br></br>Maybe it’s someone you used to be. The fridge is empty except for a half-melted popsicle and a
<br></br>Polaroid you don’t remember taking. Upstairs, your bedroom is still pink. The closet door creaks
<br></br>open. Something inside breathes, wheezes, laughs. Your father, maybe. Or his shadow. Or the
<br></br>version of you that hid there, waiting for him to leave. There’s a light flickering in the attic. A lantern,
<br></br>a dying bulb, or maybe the ghost of a star. Underneath it: a box full of teeth that don’t belong to
<br></br>anyone you remember. Someone calls your name from down the hall, but when you turn, there’s no
<br></br>one there. Only a door with a padlock the size of your fist and a key that’s been missing for twenty
<br></br>years. You press your ear to the wood. A voice says, <i>Don’t go in there</i>. You ask, <i>Why not?</i> The voice
<br></br>doesn’t answer. You open the door. Inside is a lake, or a fire, or the edge of a cliff. Inside is the girl
<br></br>who kissed you and laughed when you cried. Inside is the car you rolled into a ditch and never told
<br></br>anyone about. Inside is the knife your brother held to your throat when he swore he didn’t mean it.
<br></br>You shut the door and leave. Or try to. The boy in the corner spits out the paper and smiles. <i>You’re
<br></br>still here?</i> he asks, like it’s funny. Like it’s the punchline to a joke you’ve been telling yourself for
<br></br>years. Back downstairs, the girl—or the woman, or your mother—is sitting at the kitchen table.
<br></br>She’s humming that same song. She’s holding a knife. Or a bird. Or nothing at all. You can’t tell.
<br></br>The sunlight hits her face and turns her eyes into black holes. “You’re late,” she says. “For what?”
<br></br>She doesn’t answer. Instead, she leans forward and whispers something you can’t quite hear. Or
<br></br>maybe you can. Maybe you just don’t want to. You leave the house. Or you don’t. Maybe you’ve
<br></br>been there the whole time. Maybe the house isn’t a house at all. Maybe it’s a cage. Or a memory. Or
<br></br>a body, and you are the ghost rattling its bones.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Ziqr is grieving, yearning and hoping. They write for the thrill of rejection emails and the occasional ‘we regret to inform you.' Their works have appeared in places like Scholastic, Rattle, and Trampset among others. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
