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
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Oluwanifemi Bakare</h3>
            <h1 className={indexStyles.posttitle}>My Father Bought a Generator in 1997 and It Is Still Running</h1>
          <p className={indexStyles.posttext}>        
The generator's name is Mike. I named it this when I was six because it was loud and it came on at night and it smelled like something working hard, which seemed like a Mike kind of thing. My father thought the name was funny and then forgot he thought it was funny and started calling it Mike too, and then my mother started calling it Mike, and now when NEPA takes the light — which is always, which is every day, which is the basic grammar of existence in this country — someone shouts Mike! from wherever they are in the house and my uncle who is actually named Mike no longer flinches because he has learned that the house has two of him and one of him requires petrol.
<br></br>
<br></br>Mike the generator is twenty-seven years old. I have friends who are younger than Mike the generator. Mike has survived three house moves, two floods, a thunderstorm that bent the zinc roof of the outdoor shed at a forty-five degree angle, and my father's periodic conviction that he could fix Mike himself, which always ends the same way: my father crouched over Mike's open body with a wrench and a look of deep personal betrayal, and then the mechanic from down the road arriving on his okada and fixing it in eight minutes flat for five hundred naira.
<br></br>
<br></br>The mechanic is also named Mike. We pay him in cash and sometimes in fried plantain and he has never once commented on the coincidence.
<br></br>
<br></br>What I am trying to tell you is something about reliability. About the way that in the absence of reliable things, the things that do work become sacred. Mike the generator is sacred. We do not speak harshly in Mike's presence. We do not run Mike dry. We check Mike's oil with the seriousness of a man checking his own pulse. When Mike coughs — and Mike coughs sometimes, a low diesel cough that means the petrol is getting low or the air filter needs cleaning — there is a quality of attention in the house that I have never felt in any other context. Everyone listens. No one moves.
<br></br>
<br></br>My mother says Mike has a spirit. She says this lightly, the way she says things she knows sound absurd but means completely. My father says the spirit is German engineering, because the brand is German, because my father trusts German things with a faith that no church has ever inspired in him. My uncle Mike — the human one — says nothing because he has made peace with sharing his name with a machine and this peace is a kind of spiritual achievement that I respect enormously.
<br></br>
<br></br>NEPA came back permanently in 2019 to the street two blocks over. Permanently means most of the day, which is not what the word means in English but is what it means in Lagos, where language has learned to be realistic. When this happened the neighbours bought fridges and stopped rationing ice. They stopped tensing when clouds gathered. They learned, slowly and then all at once, what it felt like to not be listening for the generator.
<br></br>
<br></br>We still have Mike. My father cannot imagine not having Mike. He says: you never know. He says this in Yoruba and in English and sometimes in both at once. He says it the way a person says something they have tested against reality for so long that the testing has become indistinguishable from believing.
<br></br>
<br></br>Last month the light went for four days because something happened to something and no one was sure which something. The whole street ran generators. The whole street smelled like petrol and heat and that particular quality of noise that means everyone is paying to be alive right now, everyone is burning something to stay on.
<br></br>
<br></br>Mike ran for four days without complaint.
<br></br>
<br></br>My father patted the casing when it was over. Just once, with his open palm. The way you'd put a hand on someone's shoulder after they'd done a hard thing well.
<br></br>
<br></br>I watched him do it and did not say anything because there was nothing to say. Some things that happen in a house are not for words. They are for silence and for the memory of the silence and for the person you eventually become who carries them.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Oluwanifemi Bakare is a Nigerian writer currently in school. His work investigates the human condition with a strange and particular eye — drawn to the absurd, the overlooked, and the things people do when they think no one is watching. He writes fiction, essays, and the occasional thing that refuses to be either. He loves films and the filmmaking process with an embarrassing sincerity. His work has appeared in Claudine, Afreada, and Akpata Magazine.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
