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
                send us your finely-crafted dishes through our <a href="https://forms.gle/nCnwkUUuZudsEAL37"> submissions form</a>. we prefer docx
                format unless you've got some cool formatting to preserve. unfortunately, we don't have the staffing to reply to off-season submissions,
                  or those sent by email instead of by form. cover letters are cool; please keep your bios short
                and sweet (≤150 words) and when listing publications, please
                list the ones that you feel are most representative of your
                work. long bios will be cut to fit.{" "} <br />
                <b> from april the 16th-17th (EST), we'll be responding to all submissions within 24 hours!</b>
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
                <br /> <b>
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
                we do nominate for Pushcart and Best of the Net.
              </li>
              <li>for inquiries, please email dishsoap.mag@gmail.com. To <b>withdraw</b> a piece, 
              please edit your initial submission to <b>check the box at the bottom of the form.</b> 
              (An editable copy of your submission should be sent to you after you've filled in the form!) </li>
              <li>thank you for trusting us.</li>
            </ol>
          </p>
<br />
        </div>
        <div className={layoutStyles.pinkLineBottom}></div>
      </Layout>
    </>
  )
}

export default Masthead
