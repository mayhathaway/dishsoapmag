import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Subheader from "../components/subHeader"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soaphead from "../images/soaphead.png"

const Masthead = () => {
  return (
    <> 
      <MobileNav />
      <Nav />
      <Subheader title="submission guidelines" />
      <Layout>
        <Head title="submission"/>
        <div className={layoutStyles.title}>
          <h2>hello! thank you for considering us as a home for your work :)</h2>
        </div>

        <div className={layoutStyles.pinkLineTop}></div>

        <div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>general info</p>
                </strong>
              </i>
            </h3>
              <li>
              we publish one piece per week, on Tuesdays. our submissions will remain perpetually open, so feel free to send us work whenever you’d like.
                </li>
                <li>
                typical response time is 2-4 days. all submissions will be responded to within 2 weeks.
                </li>
                <li>
                submissiona are free! but we're also not a paying market. we hope to someday be though :)
              </li>
              <li>
                send your work to us through our <a href="https://forms.gle/nCnwkUUuZudsEAL37"> submissions form!</a></li>
          </p>
          </div>
         <p></p>
          <div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>genre guidelines</p>
                </strong>
              </i>
            </h3>
            <strong>flash fiction/nonfiction</strong>
            <li>
            tell us about that time that… and how… or an old bike that… or your next door neighbor who… or a fake guy named Ralph who loves… up to 3 pieces / up to 1200 words per piece.
            </li>
          <div></div>
            <strong>micro fiction/nonfiction</strong>
          <li>
          send us your little drabbles, meditations, glimpses, fortune cookie fortunes, journal entries, horoscopes, etc. up to 3 pieces / up to 300 words per piece.
          </li>
          <div></div>
          <strong>poetry/prose poetry</strong>
          <li>
          hit us with funktastic imagery and permeating voice. up to 3 poems / no word limit.
          </li>
          <div></div>
         <strong>hybrid</strong> 
         <li>
          all your weird. we want it. up to 3 pieces / up to 1200 words per piece.
          </li>
          </p>
          </div>
          
<p></p>

<div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>nitty gritty</p>
                </strong>
              </i>
            </h3>
            <li>
            we typically prefer for Dishsoap to be the first place your work has appeared, but are more than happy to give a new home to work stuck in any defunct/discontinued journal or magazine.
            </li>          
            <li>
            simultaneous submissions are accepted, but please notify us promptly if your work is accepted elsewhere.
            </li>
            <li>
            we encourage and enjoy work that tackles tough topics, but we will reserve the right to ignore a submission if it includes anything nsfw, racist, homophobic, ableist, transphobic, sexist, or anything generally involving discrimination or hate speech.
            </li>
            <li>
            we're not down to publish anything that's written by AI or is AI-assisted
            </li>
            <li>
            if your work is rejected, we ask that you wait 1 month before submitting again. if your work is accepted, we ask that you wait 2 months before submitting again. 
            </li>
            <li>
            to withdraw your work, email us at dishsoap.mag@gmail.com
            </li>
            <li> 
            if you somehow don't have a google account yet and can't access our form, feel free to email us your submission with an optional informal cover letter and a bio.
            </li>
            <li>
            if your work is accepted, you retain all rights, but we request that you credit us when sending it to other places in the future.
            </li>

          </p>
          </div>
        <div className={layoutStyles.pinkLineBottom}></div>
      </Layout>
    </>
  )
}

export default Masthead
