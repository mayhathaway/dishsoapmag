import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Subheader from "../components/subHeader"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"

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
                  <p>General Info</p>
                </strong>
              </i>
            </h3>
              <li>
              We publish one piece per week, on Tuesdays. Our submissions will remain perpetually open, so feel free to send us work whenever you’d like.
                </li>
                <li>
                Typical response time is 2-4 days. All submissions will be responded to within 2 weeks.
                </li>
                <li>
                Submissions are free! But we're also not a paying market. We hope to someday be though :)
              </li>
              <li>
                send your work to us through our <a href="https://forms.gle/nCnwkUUuZudsEAL37"> submissions form!</a></li>
          </p>
          </div>
          <p></p>
          <p></p>
          <div className={layoutStyles.pinkLineTop}></div>
          <div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>Genre Guidelines</p>
                </strong>
              </i>
            </h3>
            <strong>Short Fiction/Nonfiction</strong>
            <li>
            Tell us about that time that… and how… or an old bike that… or your next door neighbor who… or a fake guy named Ralph who loves… Up to 3 pieces / up to 1200 words per piece.
            </li>
          <div></div>
            <strong>Micro Fiction/Nonfiction</strong>
          <li>
          Send us your little drabbles, meditations, glimpses, fortune cookie fortunes, journal entries, horoscopes, etc. Up to 4 pieces / up to 300 words per piece
          </li>
          <div></div>
          <strong>Poetry/Prose Poetry</strong>
          <li>
          Give us your funktastic imagery and permeating voice. Up to 3 poems / no word limit.
          </li>
          <div></div>
         <strong>Hybrid</strong> 
         <li>
          All your weird. we want it. Generally up to your discretion given the length requirements outlined for other categories. Hard limit of 4 pieces / 1200 words though.
          </li>
          </p>
          </div>
          <p></p>
          <p></p>
          <div className={layoutStyles.pinkLineTop}></div>

<div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>Nitty Gritty</p>
                </strong>
              </i>
            </h3>
            <li>
            We typically prefer for Dishsoap to be the first place your work has appeared, but are more than happy to give a new home to work stuck in any defunct/discontinued journal or magazine.
            </li>          
            <li>
            Simultaneous submissions are accepted, but please notify us promptly if your work is accepted elsewhere.
            </li>
            <li>
            We encourage and enjoy work that tackles tough topics, but we will reserve the right to ignore a submission if it includes anything nsfw, racist, homophobic, ableist, transphobic, sexist, or anything generally involving discrimination or hate speech.
            </li>
            <li>
            If your work is rejected, we ask that you wait 1 month before submitting again. if your work is accepted, we ask that you wait 2 months before submitting again. 
            </li>
            <li>
            To withdraw your work, email us at dishsoap.mag@gmail.com
            </li>
            <li> 
            If you somehow don't have a google account yet and can't access our form, feel free to email us your submission with an optional informal cover letter and a bio.
            </li>
            <li>
            If your work is accepted, you retain all rights, but we request that you credit us when sending it to other places in the future.
            </li>

          </p>
          </div>
        <div className={layoutStyles.pinkLineBottom}></div>
      </Layout>
    </>
  )
}

export default Masthead
