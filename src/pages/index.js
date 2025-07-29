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
  // if just putting &nbsp; doesn't work, use <span>&nbsp;</span
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
            <h3 className={indexStyles.postauthor}>Tracie Adams</h3>
            <h1 className={indexStyles.posttitle}>For the Love of Hot Mustard</h1>
          <p className={indexStyles.posttext}>
    I walk into Chen’s, our favorite Chinese Restaurant, and the owner flashes a toothy grin at me across the counter, his eyebrows raised with recognition. He asks about you, “Why nephew not come, feeling okay?”
<br></br>
<br></br>“Great, never better,” I say. I do not say that I was flying on Spirit Airline when you passed me in the clouds. I was on my way to vacation in Florida, and you were on your way to Paradise. I do not say that you died before your birthday, that you flew away to the Spirit in the sky and won’t be coming back, won’t be eating kung pao chicken. 
<br></br>
<br></br>I don’t order the hot and sour soup because that was your thing, but I order extra of the chicken egg rolls we both craved along with some veggie lo mein. I try to love what you loved, always hoping I might find you there among garden gnomes and Looney Tunes, matcha smoothies and dinosaurs. At the zoo, I searched for you in a dark exhibit of beetles and exotic bugs. I imagined you pressing your hands to the glass, your face a deep well of wonder.
<br></br>
<br></br>Chen hands me the brown paper bag, warm on the bottom, ginger and sesame memories escaping through the stapled top. I choke down a sob. I’m regretting not getting the soup. What if my palate has changed or what if I just do something hard for once, something to honor your bravery, the way you fought for your life against cancer in your blood. But I do not get the soup. 
<br></br>
<br></br>Instead, I’m standing here thinking about you, how when I asked you where it hurt, you said, “My blood, my blood hurts.” You would slurp spoonfuls of that soup, moaning and nodding with each gulp as if you had already crossed through the veil to heaven. I’m lost in visions of you bathing those egg rolls in hot mustard, your lips puckered like you bit a lemon. Visions of you shaking your head back and forth as the heat pricks your nasal passages and stuns your brain with fire. Visions of your hospital bed littered with dropped bits of cabbage and soy sauce.
<br></br>
<br></br>When Chen looks at my eyes, glassy and shimmering, he knows everything. I know that he knows because he bends his lanky body at the waist, a bow in honor of your memory, in honor of the empty space you left behind, in honor of everything you ever loved. He hands me another small bag full of his special hot mustard, and as I open my mouth to say <i>sorry, so sorry I cannot love hot mustard</i>, he presses it into my open palms anyway and whispers empathy as pure as new birth, “You try, maybe you like.”

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
        Tracie Adams is a retired educator and playwright who writes short fiction and memoir from her farm in rural Virginia. She is the author of the essay collection, Our Lives in Pieces. Her work was nominated for the Pushcart Prize and appears in over sixty literary journals and anthologies including Cleaver, BULL, Frazzled Lit, Trash Cat, Brevity Blog, SoFloPoJo, Fictive Dream, and more. Visit <a href="https://www.tracieadamswrites.com/"> tracieadmaswrites.com</a> and follow her on X @1funnyfarmAdams. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
