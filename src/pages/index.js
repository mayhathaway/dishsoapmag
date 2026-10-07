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
            <h3 className={indexStyles.postauthor}>Nick Porisch</h3>
            <h1 className={indexStyles.posttitle}>Keep This Machine Running</h1>
          <p className={indexStyles.posttext}>        
And I said, okay I can do that. And they said, okay then you have the job. Can you start on Monday? And I said, okay I can do that. And they said, okay great. So, I start on Monday!
<br></br>
<br></br>The hours and pay aren’t knock-out, but it sounds like it’s pretty stressful, too. But I’m a blue-collar man from a blue-collar family, y’know? We work hard and play harder, but first we work hard. The only “benefits” I need are a paycheck and a cold beer at the end of every bi-weekly pay period. And the benefit of knowing I’ve done good, of course.
<br></br>
<br></br>What does the job “entail?” I keep the machine running, simple as the day is hot.
<br></br>
<br></br>What is the “machine?” Well, that’s the funny thing, and the funny thing is that I don’t need to know. The foreman described it as a “labyrinthine network of pneumatic pipes, steam, hydraulic pressure plates, grinders, gears, teeth, nuts, bolts, coal-fired ovens, blasting vents, cooling vents, and input chutes and output chutes.” When I saw it during my tour of the floor, I thought it looked like a McDonald’s PlayPlace from H-E-double hockey sticks. 
<br></br>
<br></br>Now, the great thing about this job is that it’s a hands job and not a brains job. I don’t have to worry about “products” or “sales numbers” or “what the machine is for.” I show up in the morning, and the foreman gives me a set of maintenance instructions. For example,
<br></br>
<br></br>

<ul>
  <li>Turn knob 24024 to the right 19 degrees.</li>
  <li>Lower the pressure in tank 7B by 218 PSI.</li>
  <li>Raise the pressure in tank Alpha by 4 PSI.</li>
  <li>Flip levers 9.A and 4.C up, but do not touch levers 9.B or 8.A.</li>
</ul>

<br></br>And so forth! All in a day’s work.
<br></br>
<br></br>Some perks of the job include working alone. I like people as much as the next guy, but not as much as someone who likes people a lot like the mayor or a rock star. I see the foreman when I clock in and clock out, and he tells me there’s a night shift employee too, but between the hours of 9 AM and 5 PM it’s just me and the machine in that big ole concrete-and-corrugated-metal facility down by the railyard. Me and the machine. I think I’ll listen to a lot of baseball on my radio headphones, if the foreman approves it. 
<br></br>
<br></br>Another perk is that I get a 30 minute lunch break once a day, when I can sit down in the employee break room next to the vending machines and eat a hand-packed sack of magnificent home-cooked food made with love by my sweetheart, if I find a sweetheart. I’ll probably just eat from the vending machines for now til I find her. With a job like this I’m a catch, so I don’t need to think about finding a sweetheart too much because my sweetheart will probably find me.
<br></br>
<br></br>The foreman said, listen, at the end of my interview, and then he said, your 30 minute lunch break is your time. The rest of the day, you gotta be doing your tasks, man. And I said, okay I can do that. And he said, but during your lunch break, you can do whatever you want. I said, okay that sounds great. The foreman said, I’m serious. Those 30 minutes… if you want to try to figure out what the machine does, you can “investigate” instead of eating. If you want to. I do it sometimes. And I said, I like to work I don’t like to investigate, because sometimes when you investigate you find stuff that’s just plain scary and confusing and why would I do that if I could just sit down and enjoy a hand-packed meal cooked with love by my sweetheart once I find a sweetheart or maybe once she finds me? And the foreman said, okay. I just wanted to let you know. That’s one of the “perks” of the job. And I said, investigating? And the foreman said, yeah. If you want.
<br></br>
<br></br>Maybe if I never end up finding or being found by a sweetheart and I get tired of eating chips and sandwiches and drinking soda all from the vending machines I’ll try my hand at “investigating” but I don’t see that happening anytime soon, they got so many flavors of soda and types of cheese and meat on the sandwiches. They don’t pay me to investigate and I do what I’m paid to do, which is to keep this machine running so that it can create or destroy or re-constitute all the live long day and through the night, Monday through Friday, and if I hear any screaming or mournful wailing or curses against God echoing through the machine’s corroded pipes, well, the foreman said, try not to think about it, not until you’re on your lunch break at least, and then if you’re looking at your ham and cheese and grape soda and you can’t stop hearing desperate, rot-hearted pleas for an ounce of compassion and a moment’s relief coming from the bowels of the Gordian knot made of copper and steel and rust on the other side of the break room door, then you can check the time and maybe you still have 25 minutes left to do whatever you want and maybe what you want is to investigate, investigate until it’s time to clock back in and keep this machine running, keep it running all the live long day. And I said, okay I can do that.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
Nick Porisch lives, writes, and sometimes does other stuff in Minneapolis. You can follow him on Instagram (@porisch.writes) or find more of his work in Chatterbox Literary, Gone Lawn, MENACE Magazine, and more.
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
