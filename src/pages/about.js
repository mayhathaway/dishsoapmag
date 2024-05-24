import React from "react"

import layoutStyles from "../components/layout.module.scss"
import { Link } from "gatsby"
import Head from "../components/head"
import Subheader from "../components/subHeader"
import Nav from "../components/nav"
import aboutStyles from "./about.module.scss"
import Footer from "../components/footer"
import MobileNav from "../components/mobileNav"


const AboutPage = () => {
  return (
    <>
    <MobileNav />
      <Nav />
      <Subheader title="dishsoap quarterly" />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Head title="about" />
          <div className={aboutStyles.title}>
            <h2>welcome! we're so excited to get to know you.</h2>
          </div>
          <div className={aboutStyles.pinkLineTop}></div>
          <div className={aboutStyles.mission}>
            <h2>
              <center>mission statement</center>
            </h2>
            <p>
              Dishsoap wasn't founded by a group of teenagers hailing from all over
              the world. In our various forays into the literary world, we have
              all witnessed or experienced our fair share of elitism and
              professionalism. Dishsoap strives to be the antithesis of that
              exclusivity. So often the world of publication seems difficult,
              strict, and harsh; Dishsoap is the opposite of all of this - it’s
              goofy and unpretentious and pokes fun at itself. It makes terrible
              puns. It doesn’t try to be anything other than what it is.
            </p>
            <p>
              Here at Dishsoap, one of the best things is that we disagree on
              ideas. We argue over organization and take votes on editing
              strategies. Instead of pigeonholing, we truly accept and consider
              anything and everything, no matter how outrageous or spunky.
              Dishsoap doesn’t try to fight for the lowest acceptance rates; we
              cater to everyone, whether you’re a musician who plays songs at
              live events or a teenager who writes poems at midnight in their
              bedroom.
            </p>
            <p>
              We are interested in the young, the
              perhaps-not-completely-finished, the work-in-progress. Inclusivity
              and openness is at the core of Dishsoap’s values. Not easy, but
              for the diligent, not lenient, but kind. Too often people think
              that you must have a certain laundry list of accomplishments to be
              able to do important things. Dishsoap is evidence against that. We
              are ordinary people, striving for a true sense of freedom.
            </p>
            <p>In less formal terms, we really just did that. You can, too.</p>
          </div>
          <div className={aboutStyles.pinkLineBottom}></div>
        </div>
      </div>
      <div className={aboutStyles.masthead}>
        <Link to="/masthead">get to know all our staff here !</Link>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
