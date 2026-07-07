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
            <h3 className={indexStyles.postauthor}>Ashley W. Cundiff</h3>
            <h1 className={indexStyles.posttitle}>Mom's Bigfoot</h1>
          <p className={indexStyles.posttext}>        
Four months before she died, my mother pushed away the soup I’d served her for lunch and informed me that Sasquatch was sleeping behind her garden shed. Dementia had forged Mom’s mind into a prism of fractured thoughts and impulses, but her body was still whole and spry, and she was quick to discard her spoon, put on my late father’s old rubber boots, and trip outside to show me where the bigfoot had bedded down. All I saw was a mound of fallen leaves that the wind had blown against the shed wall, but she maintained that a large indentation was proof a sleeping body had been there. There was no denying that something could have nested in the cradle of those sun-warmed leaves, curled in the fetal position. Imagining it made me want to curl up there myself. Maybe it was a deer, I offered, and yawned. I’d been living with Mom for a few weeks then. To view this time as a gift was the correct view, but I had not wanted to leave my home and my job (not because I would be needed in my absence, but because I knew my absence would reveal the lack of need). 
<br></br>
<br></br>Sasquatch appeared most often at twilight; Mom was restless in the in-between hours. Sasquatch was covered in long fur that was matted, but soft like a cat’s, the fur was sometimes gray and sometimes golden-brown. Sasquatch was the size of a large man, Mom told me, about as big as my father (my father had not really been a large man, but she described him so with a fondness that defied questioning). She sometimes saw it in the yard hunting. (Hunting what, I said. The neighbor’s ferret, she said. The neighbor doesn’t have a ferret, I said. Not anymore, she said.) She spied on it while it was sleeping, watching the waves of its breaths and viewing its face in the sweet slackness of sleep. (When? I asked. When you’re also sleeping, she said. You’re sleeping then, too, I said. I never sleep, she said.) 
<br></br>
<br></br>I didn’t believe she was really visiting the bigfoot in the night until the morning I awoke early, chilled, to find the front door wide open and Mom gone. My eyes were forced closed by the surprise harsh brightness of the sun and by the time I opened them she’d walked in, her hair tangled and the snowmen on her flannel nightie dirtied by bits of dried leaves. She told me where she’d been before I formed the question: sitting in the leaf pile behind the shed watching Sasquatch dance as the sun rose. I asked what kind of dancing. A lot of falling down and rolling, she said. You know, modern. And you watched that, I asked incredulously. My mother had loved Fred Astaire and Gene Kelley and Baryshnikov and was particular about what constituted art. She shrugged and flipped on the TV. A morning talk-show host was conducting an interview with a celebrity chef. There are two types in this world, Mom said as she flipped channels. The ones that live to be seen and the ones who are seers. Which are you, I asked. The second one, she said. Obviously. Okay, which one am I, I asked. She petted my hand gently and didn’t answer. My phone spat out several notifications then and I tried hard not to look at it. I don’t remember you being all that observant, I said. I was indignant because my brain had lit up at the thought that the notifications were to notify me of my importance and she seemed to know this. I never sleep, she said in the direction of the television, her pupils reflecting its flickering colors. 
<br></br>
<br></br>After that morning I tried to lock Mom in at night, but her brain was wily, remembering how to work locks and keys while forgetting why they might be in place. Her hands and feet were chilled and she picked up ticks from the leaves. You’ll get Lyme disease, I told her as I surveyed the contours of her body with a pair of tweezers at the ready. Or that other one where you can’t eat meat. She said she didn’t like meat much, anyway. And she didn’t get Lyme. When the trees grew bare and the leaves on the ground were dry and crunchy with frost my mother stopped going outside to look for the bigfoot. She vomited and complained of pain in her stomach and back. The scans showed that the inside of her body was full of shattered glass, cancer splintering into her pancreas, her spleen and liver, and when she said she wanted to go home, they let her. 
<br></br>
<br></br>If Mom saw Sasquatch from the hospital bed set up in her living room she didn’t say so. She mistook me for her own mother twice, chastising me for putting the wrong socks on her feet and bringing her soup she didn’t want, and she spoke to my father of his great aunt’s apple pie recipe and complained that his large frame made a dent in the mattress that caused her to roll to one side. She stared out the window as flurries fell from the sky and marveled that it would snow on the Fourth of July. Or was it ashes, she wondered. When my mother slept, I sat and watched the waves of her breaths and studied her face, sweet and slack as that of a child. And when my mother was no longer there I went behind the shed, where the leaf pile was still indented with the shape of a large sleeping form. I curled up there and felt the residual warmth of a soft solid body while the unique forms of a million snowflakes fell from the vast gray sky.




            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Ashley W. Cundiff is a musician and writer of essays and fiction. She has placed work in numerous literary journals, most recently Swing and Raleigh Review, and she is a reader and collaborator with Wild Roof Journal.  Ashley lives in rural Virginia with her family and can be found at <a href="https://www.thedomesticwilds.com"> www.thedomesticwilds.com</a> and <a href="https://ashleywcundiff.substack.com"> ashleywcundiff.substack.com</a>.
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
