import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import anaphora from "../images/anaphora.jpeg"
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
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Chris Scott</h3>
            <h1 className={indexStyles.posttitle}>Tests to Determine Whether Moonboy Has a Soul</h1>
          <p className={indexStyles.posttext}>
         I can’t tell anyone I was born on the moon. That’s the biggest test. Roger says if people found out it would create all kinds of problems for him. I can’t be going to school and all of a sudden deciding I need to impress my friends by telling them there’s a secret moon colony and I was born there and then transported back to Earth and studied as I grew up to see whether or not people conceived outside of Earth’s atmosphere have souls. Roger’s higher-ups at NASA would have his ass if that happened, he says. Roger was assigned to be my guardian on Earth to run tests determining if I have a soul.
<br></br>
<br></br>Walking to school I see a frog on the sidewalk, all of its legs broken. When I turn back I spot Roger ducking behind a bush. I wonder what a kid who didn’t have a soul would do to the frog. Probably bite its head off and spit it at somebody. Or just stomp on it. Of course putting it out of its misery is also what someone with a soul would do, I think. I end up hiding it under a bush so it can be alone. I wonder if frogs have souls, where their souls go.
<br></br>
<br></br>When we’re around other people I call Roger dad and he calls me Eric, but when it’s just him and me I call him Roger and he calls me Moonboy, even though he knows I hate that name. I asked Roger exactly once where my mom is and he said she’s still on the moon, but she was too sick to come home with me. He says it’s a real shitshow on the moon, lots of radiation and decompression issues all the time. He says they’re doing the same experiment with my mom but reverse, to see what happens to someone’s soul when they die not on Earth. I asked him why they can’t just use the same technology monitoring her soul to also check for my soul and he just chuckled like, wish it was that simple.
<br></br>
<br></br>Tests are always happening to me and all of them can be traced back to Roger. Like one time this guy came up while I was raking our yard and he had a briefcase and a box wrapped in aluminum foil with a button glued onto it and he said if I pressed the button he’d give me a million dollars in cash but a stranger somewhere would die. I said no thanks. Then I saw the same guy a couple months later on Roger’s softball team.
<br></br>
<br></br>Roger gave me a telescope two birthdays ago. I use it to look at the moon most nights and some night I will see the faintest little ball of light departing from it, like a bubble in the breeze. It won’t ascend or descend, just return to Earth, come back home. I won’t tell a soul.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
          Chris Scott's work has appeared in The New Yorker, Maudlin House, New Flash Fiction Review, Gone Lawn, Flash Fiction Magazine, Flash Frog, Bending Genres, and elsewhere. He is a regular contributor for ClickHole, and an elementary school teacher in Washington, DC. You can read his writing at <a href="https://www.chrisscottwrites.com/"> https://www.chrisscottwrites.com</a>.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
