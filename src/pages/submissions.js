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
                although we would love for dishsoap to be the first place that your work has appeared in, we will accept pieces that have appeared elsewhere previously as long as you indicate that to us in your submission.
              </li>
              <li>
              we encourage and enjoy work that tackles tough topics, but we will reserve the right to ignore a submission if it includes anything nsfw, racist, homophobic, ableist, transphobic, sexist, or anything generally involving discrimination or hate speech.
              </li>
              <li>
              if your work is accepted, we request that you credit us when sending it to other places in the future.
              </li>
              <li>
              if your work is rejected, we ask that you wait 2 months before submitting again. if your work is accepted, we ask that you wait 6 months before submitting again.
              </li>
              <li>
              we will enerally aim to respond within one week. If you haven’t heard from us after two weeks, feel free to email dishsoap.mag@gmail.com with as much horrific language as you deign necessary.
              </li>
              <li>
              to withdraw your work, please email the titles of the pieces you would like to withdraw to dishsoap.mag@gmail.com
              </li>
              <li>
              we are currently not a paying market-- though we hope one day to be :)
              </li>
              <li>send your work to us through our <a href="https://forms.gle/nCnwkUUuZudsEAL37"> submissions form!</a></li>
          </p>
          </div>
<br />
        <div className={layoutStyles.pinkLineBottom}></div>
      </Layout>
    </>
  )
}

export default Masthead
