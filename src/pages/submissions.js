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
      <Subheader title="submissions" />
      <Layout>
        <Head title="submissions" />
        <div className={layoutStyles.title}>
          <h2>hello! thank you for considering us as a home for your work :)</h2>
        </div>

        <div className={layoutStyles.pinkLineTop}></div>

        <div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>submission guidelines</p>
                </strong>
              </i>
            </h3>
              <li>
              we publish one piece per week, on tuesdays. our submissions will remain perpetually open, so feel free to send us work whenever you’d like.
                </li>
              <li>
              <strong>poetry.</strong> max 3 poems per submission & no word limit. <br />
              &emsp; &nbsp;<strong>prose.</strong> max 2 pieces per submission & no piece should exceed 1200 words
              </li>
              <li>
              simultaneous submissions are accepted, but please notify us promptly if your work is accepted elsewhere.
              </li>
              <li>
              we typically prefer for dishsoap to be the first place your work has appeared, but are more than happy to give a new home to work stuck in any defunct/discontinued magazine or work that's only been posted to a personal blog/social media.
              </li>
              <li>
              we encourage and enjoy work that tackles tough topics, but we will reserve the right to ignore a submission if it includes anything nsfw, racist, homophobic, ableist, transphobic, sexist, or anything generally involving discrimination or hate speech.
              </li>
              <li>
              if your work is accepted, you retain all rights, but we request that you credit us when sending it to other places in the future.
              </li>
              <li>
              if your work is rejected, we ask that you wait 1 month before submitting again. if your work is accepted, we ask that you wait 2 months before submitting again.
              </li>
              <li>
              we will generally aim to respond within one week. If you haven’t heard from us after two weeks, feel free to email dishsoap.mag@gmail.com with as much horrific language as you deign necessary.
              </li>
              <li>
              to withdraw your work, please email the titles of the pieces you would like to withdraw to dishsoap.mag@gmail.com
              </li>
              <li>
              we are currently not a paying market-- though we hope one day to be :)
              </li>
              <li>
              we will be nominating for awards and prizes again starting in the 2025 cycle!
              </li>
              <li>
                send your work to us through our <a href="https://forms.gle/nCnwkUUuZudsEAL37"> submissions form!</a></li>
                <li>
              if you somehow don't have a google account yet and can't access our form, feel free to email us your submission with an optional informal cover letter and a bio.
              </li>
          </p>
          </div>
<br />
        <div className={layoutStyles.pinkLineBottom}></div>
      </Layout>
    </>
  )
}

export default Masthead
