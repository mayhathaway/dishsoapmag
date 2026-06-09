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
            <h3 className={indexStyles.postauthor}>Nicole Davis</h3>
            <h1 className={indexStyles.posttitle}>A brief obsession, and how to form one.</h1>
          <p className={indexStyles.posttext}>        
Go a bit loopy. You were susceptible anyway, and now the world is fucked. Cut your fringe too short and wonky. Knit a bonnet. Ferment things. Rhubarb, cabbage, wort, dreams. Gorge on whole cobs of sourdough bread and salty butter like a death row peasant. Prod the new flesh of your stomach. Get into collage. Wonder if you wouldn’t be a happier person if you could just make time, all the time, for the simple art of cutting, arranging, sticking.
<br></br>
<br></br>Download the app. Crop pictures from your pre-cropped fringe era, where you’re smiling, posing, dancing, living. Oh to be that woman again. Swipe, scroll, despair, delete, redownload, swipe, swipe, swipe, match, talk small and sometimes dirty, realise you have nothing interesting to say about yourself at this moment in time, unmatch, swipe, swipe, like, offer opening gambits like ‘not much on paper, but great on wood.’
<br></br>
<br></br>Start talking to a man whose name sounds made-up, and who, you’re pretty sure, without invitation, begins sending you pictures of ducks. First there is the emerald-headed mallard, iridescent at certain angles, with a jawline that shines Prussian blue. It comes without context, or fanfare.
<br></br>
<br></br>Nice duck, you say. Is it yours?
<br></br>
<br></br>He gives you a thumbs up.
<br></br>
<br></br>The next day, he sends you its brown-feathered female companion, whose beauty you have to search for, and you appreciate that about her. You wonder if he’s taking the pictures himself, and if, by asking for more, you’re sending him on some kind of wild duck chase.
<br></br>
<br></br>Don’t question it. These are unprecedented times, normal coping mechanisms need not apply.
<br></br>
<br></br>Click on a link to a bird sounds website. It’s Wednesday afternoon and he has sent you a picture of a widgeon.
<br></br>
<br></br>A whatgeon? You texted back.
<br></br>
<br></br>He bypassed this and responded with a website where you listen to almost two minutes of their striking high-pitched whistle. Almost like a serenade.
<br></br>
<br></br>Two weeks pass like this. Midnight duck pics that have you foraging for your phone in the dark, angling it so you can look at them in all their majestic glory, horizontally.
<br></br>
<br></br>The eider is your favourite. Provider of duvet fluff and warmth, elegant in high contrast black and white.
<br></br>
<br></br>Now that’s a bird you’d take home to your mother, you write, one hand stirring a risotto.
<br></br>
<br></br>The radio silence that attends to responses of this kind only eggs you on.
<br></br>
<br></br>Sometimes he asks why you like the ducks.
<br></br>
<br></br>The Hook Bill for the downwards droop of his beak, and the deep melancholy, or wisdom, it suggests. As if the burden of time and knowledge itself sits atop it.
<br></br>
<br></br>Tell him so. Then add, A duck for our times.
<br></br>
<br></br>Close second is the goosander, with its punk-rock backwards blowdry hairstyle. He sends you a picture with five afroed babies trailing behind and you fantasise about what it might feel like to scoop one up in your hands and hold it close. To feel anything like that kind of intimacy again.
<br></br>
<br></br>Tell him that too, and then add, A dick pic could never.
<br></br>
<br></br>When he sends you ducks from further afield, question whether this signals a new level to your correspondence. Something more exotic. Something more expansive.
<br></br>
<br></br>The Indian Runner and the Muscovy are ugly. You can do better, you text. You’re losing your edge.
<br></br>
<br></br>He sends a Saxony duck, golden-feathered and stolid and Aryan. Chastise him for his narrow-minded definition of beauty.
<br></br>
<br></br>He sends a Bufflehead, brilliantly named. It looks like a Pac-Man devouring a white ghost.
<br></br>
<br></br>The blue-winged teal is what seals the deal. Leopard-chested and navy-beaked. Something about its beauty softens you. Let it. Revel in it. That some evolutionary process created such a being, and for what purpose, other than beauty?
<br></br>
<br></br>Ask whether he’d ever want to see some ducks together, IRL.
<br></br>
<br></br>He suggests a Zoom date first.
<br></br>
<br></br>Put on deodorant and blusher and tracksuit bottoms. Feel oddly erotic, dressed this way. Your bottom half could be naked. His could be. Think of Jemima Puddleduck, completely bare beneath her shawl and bonnet. Wrap a bandana around your fugitive-on-the-run fringe.
<br></br>
<br></br>Sustain conversation for a good ninety minutes, mostly without any awkward pauses. Discuss your sanity-maintaining activities, and what you do for work. Listen to him ramble on about a drama he thinks is ensuing between argumentative next-door neighbours. Bristle somewhat at his lack of questions. Don’t mention the ducks. As if calling to attention this strange delight might make it disappear altogether. Like a raccoon grappling with candyfloss. He’s not your type, and he’s not interested in you, but you’re not ready to give up the pleasure they bring you.
<br></br>
<br></br>Buy some back issues of a birding magazine on eBay and make a collage; a series of floating duck heads, trinkets of days now gone.
<br></br>
<br></br>A week later, meet in an actual park, a halfway point between your houses. His suggestion. Walk three laps around it, each time circling a pond that has frozen over and is now freckled with fallen leaves and a coterie of ducks, learning to skate.
<br></br>
<br></br>Dare to remove a glove in order to film them, stumbling and stalling, and falling gracefully, before resuming their stances. Offer to send it to him. He looks at you coolly and it’s hard to know if this is just his face. A park date gives little opportunity to gaze deeply into each other’s eyes, to pick up a vibe. He shrugs, then says, Sure.
<br></br>
<br></br>But a spell has been broken. A contract breached. Or maybe your hands are too cold and your insides too sober, and a spark was never going to alight under these circumstances.
<br></br>
<br></br>Go your separate ways. Don’t exchange numbers.
<br></br>
<br></br>Carry on collaging. Ducks and mushrooms and bisected fruit. Grow out your fringe. Delete the app, and with it, all the pictures.
<br></br>
<br></br>A year or so later, attend an art exhibition commemorating 17th century Dutch painters. Stand in front of a tableau of exotic birds and let your eye be drawn first to the monstrously large pelican. Marvel at the hairpin bend in the neck of the flamingo. Then, point out to your friend, in the bottom right half of the frame, the widgeon, the Eurasian teal, the goosander.
<br></br>
<br></br>Didn’t know you had a thing for ducks, your friend says.
<br></br>
<br></br>A brief obsession, you reply.

            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Nicole Davis is a film and audio producer for Brock Media and based in London. Her short stories have been long-listed for the 2024 Desperate Literature Prize, the 2023 Bridport Prize and the 2022 Brick Lane Bookshop Short Story Prize. She has been selected for the 2023-4 edition of The London Library’s Emerging Writers Programme and the 2024 Granta Short Fiction Workshop. 
<br></br>
<br></br>She is currently working on a short story collection centred on hard-to-define relationships - the strange and the estranged - that lurk in, and mould, her characters’ psyches.
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
