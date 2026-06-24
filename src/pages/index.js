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
            <h3 className={indexStyles.postauthor}>Tara Manshon</h3>
            <h1 className={indexStyles.posttitle}>Waiting on a Dream</h1>
          <p className={indexStyles.posttext}>        
My grandfather visits everyone but me in their dreams. He comes to alleviate their simmering grief, appearing in the kitchen of their subconscious. My grandfather was always in the kitchen, always busy stewing meat and potatoes for hours on end, so it makes sense for him to spawn next to the tiled backsplash, dhaniya in hand. He throws the green leaves in, folding them into the food until the Athaan rings and it’s time to wake up.
<br></br>
<br></br>My grandmother tells me he came to her wearing the sweater I knitted as a child, the incomplete one with only one sleeve. He modelled it for her, his hand on his hip, turning this way and that to an imaginary soundtrack while she washed the dishes. She laughed so hard, she peed herself. In the dream, she clarifies. She was dry in real life. I haven’t seen my grandfather since he was carried away, laid to rest before the sun ebbed below the horizon. I wasn’t allowed to follow the men to the kubis. 
<br></br>
<br></br>I wait for my grandfather, for him to grace my dreams with his presence, but he never shows. The next day, the neighbor shares his dream with me. My grandfather appeared in his garden and helped cut down the full, drooping branches of his mango tree. They cleaved the heavy limbs until the tree, finally free from the weight of its fruit, snapped back to its original height. 
<br></br>
<br></br>I dream of a childhood friend, now grown and standing on the edge of a dam. She is tired from life and I beg her not to let go of the railing. She smiles in that playful way she did as a child, when she would catch geckos and throw them down my shirt. And then she lets go. I watch her drop down, down until she disappears into the depths. I am inconsolable. Howls slip from my diaphragm, echoing into the empty night. On waking, despite knowing she is alive and well, I remember my sadness and mourn her again. Unable to fall back asleep, I rummage through old photos until the seagulls begin to call and it’s time to take the bins out. 
<br></br>
<br></br>The garbage man is already waiting for me at the curb, his hands shaky, his eyes red rimmed from crying. He tells me my grandfather visited him the night before. He rolled out the bins whistling the only song he could, ‘Frère Jacques,’ and the two talked about cricket. He was a good man, he tells me and I nod. I miss him terribly, he goes on, I saw him every Thursday for fifteen years, you look more and more like him every time I see you. His voice falters and I pat his arm, wondering if I should say something. I decide against it. Instead, we stand there, me and this uncle whose name I can’t remember, stuck in our varying grief, listening to the far-off gulls across the endless blue.



            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Originally from Cape Town, South Africa, Tara Manshon has lived in the United States for twenty years and still looks the wrong way when crossing the street. She’s currently listening to the wind knock at her window. He’s saying something that sounds like an apology, but clearly isn’t one because what’s the point of saying “sorry" if you don’t even know why you’re sorry? Her work has appeared in 805 Lit+Art, Monkeybicycle, The Los Angeles Review, Prime Number Magazine and After Happy Hour Review's Work & Labor Contest where it received an honorable mention.
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
