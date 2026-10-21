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
            <h3 className={indexStyles.postauthor}>Jordyn Damato</h3>
            <h1 className={indexStyles.posttitle}>Intruder</h1>
          <p className={indexStyles.posttext}>        
There may or may not be someone in my house. Someone besides me. I know I'm in here the same way I know I'm not the one moving things on the walls. I have art on my walls, not real art, art by me and by friends who were kind enough to gift me their creations after painting together. It’s like no one wanted proof we did something together so I get all of the proof. I’m happy and sad about it at the same time even though that’s not important. The shifting is important. I also have pictures on the wall, pictures I took, more not-art. Mostly pictures of nature, like the sky and trees, pictures I got developed at CVS because I don’t like the grey walls looking at me. I really don’t like it. Too much space means too much emptiness. Not everyone is like this, I know that, but I am and it’s my house. 
<br></br>
<br></br>Well, half mine. 
<br></br>
<br></br>I think someone else is in here. 
<br></br>
<br></br>It’s not half mine, my therapist assures me, it’s all mine. Who pays the rent? Me. Who hangs up the not-art and pictures? Me. Who took the pictures? Still me. I really like my therapist, so I should trust her, but then I wonder if letting my guard down is a dangerous thing. She says it’s not but of course she would say it’s not. It’s her job. 
<br></br>
<br></br>I’ve been seeing her for over two years now so I know that I do like her and I do trust her. I really wanted a therapist and I got really lucky that I like her so much. I hear it’s not like that for everyone, for most people, though I don’t know anyone personally who it’s not like that for. It’s just what I hear. I told her before, in the beginning, that maybe I could’ve found anyone at that point of my life and been satisfied because I really just want to talk. I remember how her nose scrunched when I said that, like I had maybe offended her or like she was holding back a sneeze. She told me that was okay. She says that a lot to me: “that’s okay” and I really enjoy hearing it. It’s good to hear because sometimes I’m not so sure. And then she sneezed. 
<br></br>
<br></br>I know it’s not her in here. I asked her once to come scope out the place for me but she said that would be inappropriate and that I should trust myself. More things she says to me pretty often. It’s good for me to know what’s appropriate and what’s not because that’s a line I’ve crossed in the past a couple times and it’s not a good line to cross. She recommends I have a friend over, or my brother, or my mom. Someone I trust. 
<br></br>
<br></br>I’m not always very honest with her. I feel bad about it but at the same time I don’t think that stuff is important. I haven’t hung out with friends since graduating college a few years ago. Since shady apartment buildings and stinky dorm rooms. Since I locked Isabelle in my room for over an hour crumpled at her feet begging her not to leave because I was afraid of sleeping alone. I know now, I know now. 
<br></br>
<br></br>I have several cameras angled around my home in an attempt to catch the intruder in their shifting but I fear they are too smart and know how to evade security, considering they’re already in. I check them nightly. Keep them hidden atop the fridge, peeking from the sock drawer. 
<br></br>
<br></br>I did ask mom to come look at my place for me. She said she lives too far away and wishes I could understand how all the travel is bad for health. How the car makes her head spin which isn’t good for her neurons. And the chemicals, all the chemicals on the plane. She lets me take videos and send them to her so I do that. Show her how the mountain landscape is leaning to the right. How the orangy-pink sunset hugging the hills fell off the wall. She isn’t sure what’s happening either but stays on the phone while I check under my bed. 
<br></br>
<br></br>I’m worried work will realize the cameras are missing but my coworkers won’t suspect me because I’ve heard them call me skittish and strange which isn’t true but makes for a good cover. Plus I’m usually alone on my shift, other than John the Janitor who I exchange nods with. John the Janitor had to be the one who put the dusty box of old cameras in the basement because they’re old, and we use newer ones, ones with better eyes but these eyes are good enough and they make me feel better just being near. 
<br></br>
<br></br>Scottie isn’t as nice as mom is. He doesn’t stay on the phone when I’m scared so I don’t ask him to visit. I think about it, but I know he’s still mad about those pictures I took of him and his friend when we lived together. I threw them away but then he found the recording after I said everything was gone. He called me a nasty fucking freak and I told my therapist that before without telling her the reason why and she still told me that I was okay and people don’t aways mean their words, especially family. I don’t know how to not mean the words I say because if I don’t then I don’t say them. 
<br></br>
<br></br>I don’t know what to do when I catch them, the intruder. I think I’ll ask them to please stop messing with my not-art. I’ll tell them it’s not very nice to mess with other people’s things. I’m sure they’ll be confused and probably upset, not understanding how it makes me feel wrong and bad, and it’ll be hard to say, hard to hear certainly, but then I’ll take their hand. Look in their eyes. Tell them it’s okay, they’re okay. 
<br></br>
And then they can stay. For as long as they’d like. They can sleep next to me, we can practice knowing the sound of each other’s breathing and we can touch our toes. We can interlock elbows and knees. Take photos together. Hang them up. Shift them around. Never leave each other’s side again. 

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
Jordyn Damato is a writer and lover from Michigan. She earned her MFA in fiction from Miami University in Oxford, Ohio. She's been nominated for Best Small Fictions and her work appears in Okay Donkey, Brilliant Flash Fiction, Ghost Parachute, BULL, fifth wheel press, trampset, and other cool places. She wants to keep lit weird and hold the people she loves close. 
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