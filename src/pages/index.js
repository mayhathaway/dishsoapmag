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
            <h3 className={indexStyles.postauthor}>Jan Hassmann</h3>
            <h1 className={indexStyles.posttitle}>Dude, I went to Mario’s last night and there was this journalist guy interviewing iShoVel</h1>
          <p className={indexStyles.posttext}>
          “So you just started right there and then?”
          <br></br>
<br></br>“Right there and then, in Mrs. Acker’s backyard.”
<br></br>
<br></br>“And she was okay with that?”
<br></br>
<br></br>“Yeah, you know, her husband had passed away a couple years earlier, and he had always sent me down the road to get cigarettes, that was when his leg was pretty bad already, and they never had kids and he was standing outside by the front gate all day smoking, and I talked to him. I thought he was a pretty interesting guy, he told me about his grandpa building the house and how he was digging with him, and the slide that smashed his leg. And she was at the window, smiling, guess she was happy the old man had someone to talk to. And one day she came out with a plate of cookies she had made, and she said, <i>you ever need a place to dig, son, you got it</i>, and we all stood there eating cookies, Michigan Rocks—real good, still warm, and they looked at each other like <i>Harry and Sally</i>, man, you’ve seen that movie?”
<br></br>
<br></br>“Classic.”
<br></br>
<br></br>“And he was dead, like, nine months later.”
<br></br>
<br></br>“How hard was it in the beginning?”
<br></br>
<br></br>“I started digging in October, and that was probably not the best idea. You know how shit the weather can be up here, and we had frost real early that year, and that was no fun at all. But I was broke, and I felt I had to get going. And now I think, you know, if you find out early how bad things can get, you’re prepared, and you know how to deal with shit later. I learned a lot those days. And, man, Margret, Mrs. Acker, she fed me cookies and brought out tea and she was always watching from the kitchen window. <i>Don’t fight the clay! Dig with your hands!</i> But, you know, topsoil is easy. The hard stuff comes much later. Most people have already dropped out before they get to that.”
<br></br>
<br></br>“Tell me about Broc.”
<br></br>
<br></br>“Broc was a good guy. Is a good guy. We had grown up a few streets apart and went to elementary together, roaming the tailings, getting our hands dirty. We were like the kids from <i>Stand by Me</i>, man, you know that movie?”
<br></br>
<br></br>“Classic.”
<br></br>
<br></br>“I hadn’t seen him for, like, nine or ten years before he showed up again. His parents were still living in the same house, just down the road, and they told him I was digging in the Acker’s backyard. I was doing a lot of trenching and shoring those days, and people had started to show up. And, well, yeah, we had a few beers one night, talked about our childhood dreams I guess and, yeah, he was in. We were digging together for almost three years.”
<br></br>
<br></br>“You once said that without Broc, you never would’ve made it.”
<br></br>
<br></br>“I never said that.”
<br></br>
<br></br>“You also said that he was instrumental for the early development of your very, well, distinct, style.”
<br></br>
<br></br>“Listen man, I don’t wanna talk about Broc, he’s got his own dig now and he’s doing great stuff and he’s making a lot of money, I wish him all the best, I really do.”
<br></br>
<br></br>“So what is it?”
<br></br>
<br></br>“What is what?”
<br></br>
<br></br>“The secret. A lot of people are digging, some are deeper than you, but nobody… well, you’re a star.”
<br></br>
<br></br>“Ah, I don’t know if there’s a secret, man, you tell me, why are you here, why are you interested?”
<br></br>
<br></br>“I’m here because my boss told me to write an article about you.”
<br></br>
<br></br>“Nice.”
<br></br>
<br></br>“Just kidding. They say it’s the way you extend.”
<br></br>
<br></br>“Yeah man, you gotta extend, of course, you can’t just go deep, the deeper you go the more likely your walls will collapse and it all comes down on your head. That’s what happened to Mr. Acker. You extend all the time anyway, but sometimes you gotta go big, and that shapes the whole future of your dig. You gotta go where the soil takes you, <i>Don’t fight the clay!</i> And then you get these patterns and these vibes and streams and that resonates with people.”
<br></br>
<br></br>“And that took you to Mrs. Acker’s house.”
<br></br>
<br></br>“And that was unfortunate. But at that time I had almost a hundred people every day and I knew I had something special, so a decision was made to take down the house and continue digging.”
<br></br>
<br></br>“<i>Was made?</i>”
<br></br>
<br></br>“Listen, I had sponsors at that time, and I had an agent, and a decision was made that I had very little to do with. I communicated where I thought the digging should go and they made all the arrangements with Margret.”
<br></br>
<br></br>“She says she is still fighting for compensation…”
<br></br>
<br></br>“What is this man, you wanna talk about this old shit? That was settled a long time ago and if you have any questions about that, you should probably talk to my legal guys.”
<br></br>
<br></br>“Avani joined you right after you signed with SubTerra.”
<br></br>
<br></br>“Yeah… Yeah, that was a good year, that first year with SubTerra. I dug some intricate stuff that year, and the audience exploded. I had just reached 250 meters, and yeah, there she was, the incredible Avani. Some guy from SubTerra had seen her dig in Goa, small dig, C Horizon, but man, she feels the veins like very few people do, I had never seen anyone wield a trowel like that. She’s a slow digger, but it was just what I needed. Broc’s all about the mattock, and I’m mostly hands, of course, but when Avani and I got together, man… You’ve seen <i>Before Sunrise</i>?”
<br></br>
<br></br>“Classic.”
<br></br>
<br></br>"She’s special. She knows where patterns go. She understands them. We were a good team.”
<br></br>
<br></br>“And she saved your life.”
<br></br>
<br></br>“I don’t know about that man, I had turned to stone before—way before Avani—and I managed to dig myself out, it just took a bit longer. The fucking papers were all over that, and then the breakup, you know… sorry man, but you guys are like vultures sometimes.”
<br></br>
<br></br>“She’s with Broc now, right?”
<br></br>
<br></br>“Yes. I heard.”
<br></br>
<br></br>“So, the new stadium. Tell me about that.”
<br></br>
<br></br>“Yeah, it’s gonna be great, I'm gonna have 80,000 seats, centered on the dig, a lot of screens and cameras deeper down so you won’t miss anything, it’s like my own movie, man, it's gonna be great. I'm gonna have side pits, small side pits, and I’m gonna invite some very exciting new artists, I think, and… we’re on schedule, I'm gonna open in July and I will probably hit a thousand meters in September, it’s gonna be great.”
<br></br>
<br></br>“And you just had your hands replaced with shovels.”
<br></br>
<br></br>“Yeah man, look at them, aren’t they something. It took some getting used to of course, the metal gives off a bit of a chill all the time so I’m always a bit cold, and there are some daily life things that are a bit complicated, but, you know, I hire people for that, man, I can afford it. I’m a star.”

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Jan Hassmann’s tailings have appeared in <i>Seaside Gothic, WireWorm Magazine, Stone Circle Review, Sparks of Calliope, PoemAlone,</i> and elsewhere. He is currently digging in Plovdiv, Bulgaria, and thinks you should read <a href="https://dishsoap-quarterly.com/12-17-24/landlord/"> <i>Mike (landlord)</i></a> by Aiden Blasi—right here, right now. It’s also about a hole. He’s on X: @ItsJanHassmann. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
