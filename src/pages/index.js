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
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab)//
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>William Alexis</h3>
            <h1 className={indexStyles.posttitle}>Proof of Life</h1>
          <p className={indexStyles.posttext}>        
My brother keeps texting me pictures of his fridge. Not the outside, the inside. Just the shelves with the food on them. Yogurt. Leftover Chinese. A thing in tupperware that might be soup. He doesn't say anything, just sends the pictures, and I don't know what I'm supposed to do with this information but I look at them every time, really look, like there's a code I'm supposed to crack. 
<br></br>
<br></br>This started after his divorce. 
<br></br>
<br></br>Before the divorce he sent normal texts. "Running late." "Did you talk to Mom." "Happy Birthday" three days after my birthday. Now it's just fridges. Sometimes two a day. Once, seven in one night, like a flip book of refrigeration, and I could see the beer disappearing shelf by shelf. 
<br></br>
<br></br>I asked him about it once. I said, "Why are you sending me these," and he said, "I don't know, proof of life I guess," and I didn't ask what he meant because I thought I knew but also I didn't want to know. 
<br></br>
<br></br>Our father died in a refrigerator accident, which sounds like a joke but isn't. He was a repairman. Something about a compressor and faulty wiring and being in the wrong place at the wrong moment, which is really all death is if you think about it. 
<br></br>
<br></br>My brother never brings this up but I think about it every time my phone buzzes. 
<br></br>
<br></br>His ex-wife's name was Donna and she was nice in that way people are nice when they're keeping score. She laughed at the right times. She remembered everyone's allergies. At their wedding she cried during the vows and I thought: oh good, she really loves him. But later I realized some people cry at weddings the way other people cry at funerals—not because they're moved but because they've just understood something terrible about time. 
<br></br>
<br></br>The thing is, my brother was never good at talking. Even as kids. He'd just hand you stuff instead. A rock he found. Half his sandwich. Once, his favorite toy truck, and I knew that meant he was sorry for breaking my collarbone, which he'd done on purpose, which we both knew but pretended was an accident because our mother couldn't handle more truth that year. 
<br></br>
<br></br>So maybe the fridges are him handing me things. Maybe I'm supposed to understand: Look, I'm eating. Look, I have condiments. Look, I'm still here. 
<br></br>
<br></br>I started sending him pictures back. Not of my fridge—that felt too obvious, like mocking. Instead I send him pictures of other things. A broken parking meter. Graffiti that says "RICK WAS HERE" even though neither of us knows a Rick. A dog I see on my street who always looks disappointed, like he thought being a dog would be different.
<br></br>
<br></br>He never responds to these either but he keeps sending the fridges so I figure we have an understanding. 
<br></br>
<br></br>Sometimes I worry he's going to get in the fridge. Just climb in there and close the door. People do that, don't they? Kids playing hide and seek who get stuck. Drunk people who think it'll be funny. Depressed middle-aged men who've run out of other ideas. 
<br></br>
<br></br>I asked my therapist about this and she said, "Have you considered calling your brother?" and I said, "We don't do that," and she said, "Do what," and I said, "Calls," and she wrote something down and I knew it was bad, the kind of observation that costs extra. 
<br></br>
<br></br>Last Tuesday he sent me a picture of his fridge completely empty except for a single egg. Just one egg, sitting there on the middle shelf like an art installation about loneliness. I stared at it for maybe ten minutes. I thought about calling him. I thought about driving over there, which would take forty minutes, and saying something like, "Let's go get breakfast," which would be weird because it was 9 PM but maybe that's what you do, maybe that's what being a brother means—showing up at weird times and pretending it's normal. 
<br></br>
<br></br>Instead I texted back: "That egg looks lonely." 
<br></br>
<br></br>Three dots appeared. Disappeared. Appeared again. Then: "Yeah." 
<br></br>
<br></br>Our mother says I should be more worried. She says, "He's not himself," and I want to say, "Who is?" but I know what she means. She means he used to have a wife and a house with carpet and now he has an apartment with that fake wood flooring that's actually plastic and a fridge he documents like evidence. 
<br></br>
<br></br>She wants me to intervene but I don't know how to intervene with someone who's not actually doing anything wrong. He goes to work. He pays his bills. He just also takes a lot of pictures of dairy products. 
<br></br>
<br></br>I think about Donna sometimes. Whether she's taking pictures of her fridge. Whether she's happier now, or just different. Whether she ever loved him the way he loved her, which was silent and constant, like refrigeration. 
<br></br>
<br></br>This morning he sent me a new picture and the fridge was full. Really full. Like he'd gone shopping. Vegetables. Cheese. A whole rotisserie chicken still in the container. Orange juice. Milk. Eggs—plural this time. I zoomed in. Everything was organized, labels facing out, like someone who's trying. 
<br></br>
<br></br>I texted: "Looks good." 
<br></br>
<br></br>He wrote back: "I'm making dinner tonight if you want to come over."
<br></br>
<br></br>I said yes even though I hate his cooking. He only knows how to make three things and two of them are variations of pasta. But I'll go because that's what the fridges have been saying all along, I think. Not "look at my food" but "look, I have food" but really "look, I'm still trying" but really just "look." 
<br></br>
<br></br>I'll go over and we won't talk about the divorce or Dad or the fridges or why he stopped being able to use words. We'll eat his bad pasta and watch whatever game is on and I'll stay too late and say I should go and then stay another hour because leaving is always harder than arriving. 
<br></br>
<br></br>And maybe before I go I'll open his fridge, just to see it in person, to understand what the pictures have been trying to tell me. Maybe I'll see my own reflection in the vegetable drawer. Maybe I'll finally understand what proof of life looks like. 
<br></br>
<br></br>Or maybe I'll just close it and say, "Your fridge is nice," and he'll say, "Thanks," and that will be enough, that will be the whole conversation, that will be love.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
William Alexis is a writer from Georgia, United States, whose work has been recognized by the New York Times and the Alliance for Young Artists & Writers. When not writing, he can be found with a Baldwin novel in hand or losing a quiet, ongoing battle with math. 
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