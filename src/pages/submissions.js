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
          <h2>do you see your work finding its home at dishsoap?</h2>
        </div>

        <div className={layoutStyles.pinkLineTop}></div>

        <div className={layoutStyles.mission}>
          <p>
            <h3>
              <i>
                <strong>
                  <p>Ten Commandments for Soaping</p>
                </strong>
              </i>
            </h3>
            <ol>
              <li>we accept all genres.</li>
              <li>
                simultaneous submissions are fine, but tell us if you get
                accepted elsewhere!
              </li>
              <li>
                send your finely-crafted dishes to dishsoap.mag@gmail.com with
                the subject line [name]-[genre]-[title]. for optional feedback,
                please begin your email title with "Opt-In". we prefer docx
                format unless you've got some cool formatting to preserve. all
                submissions sent between reading periods will be left unread and
                discarded. cover letters are cool; please keep your bios short
                and sweet (≤150 words) and when listing publications, please
                list the ones that you feel are most representative of your
                work. long bios will be cut to fit.{" "}
                <b> we are open for submissions until the end of august.</b>
              </li>
              <li>
                <strong>poetry.</strong> at most 4 poems per submission & no
                word limit. <br />
                <strong>prose.</strong> at most 3 per submission & 5000 words in
                total.
                <br />
                <strong>art.</strong> at most 3 per submission. feel free to
                attach a brief explanation!
                <br />
                <strong>other.</strong> as many as you'd like :).
              </li>
              <li>
                please don't submit anything explicit!
                <b>
                  we reserve the right to ignore a submission if we find any
                  nsfw, racist, homophobic, etc. notions, even if not explicity
                  stated.
                </b>
              </li>
              <li>
                if your work is accepted for publication, we ask that you credit
                us as its first home when sending it to other places in the
                future
              </li>
              <li>
                throughout the submissions window, we would prefer it if
                dishsoap could be your pieces’ first home, but we will consider
                work that has been housed elsewhere before. please let us know
                in your cover letter.
              </li>
              <li>
                please note that we currently cannot pay our contributors.
              </li>
              <li>we do nominate for Pushcart and Best of the Net.</li>
              <li>thank you for trusting us.</li>
            </ol>
          </p>
<br />

            <h3>
              <i>
                <strong>
                  <p>We are currently open for staff applications!</p>
                </strong>
              </i>
            </h3>
        <p>
           All positions are volunteer-based and will require a few hours of time per week. Feel free to apply to more than one position!
          <br /> <br /> 

             <strong>
               Poetry/Prose editor*
             </strong> <br /> 
            *note that we don't differentiate between readers and editors.
          <br /> 
         As an editor, you’ll provide your opinion on a handful of submissions each week. Submitters have the option of requesting feedback, so each week, you’ll also be writing short paragraphs of commentary for a few of the pieces we assign to you.
         <br /> <br /> 
           <strong> To apply </strong> <br /> 
To apply, send us up to three poems, or three pages of prose, along with your name and the genre you'd like to edit for. We’re so excited to hear from you!

           </p>
        </div>
        <div className={layoutStyles.pinkLineBottom}></div>
      </Layout>
    </>
  )
}

export default Masthead
