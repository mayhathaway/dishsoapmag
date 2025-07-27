import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import Subheader from "../components/subHeader"
import mastheadStyles from "./masthead.module.scss"

import blueagave from "../images/blueagave.png"
import cheese from "../images/cheese.png"
import indexStyles from "./index.module.scss"
import soaphead from "../images/soaphead.png"



const Masthead = () => {
  return (
    <>
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
      </div>
      <MobileNav />
      <Nav />
      <Subheader title="rubber duckie crew" />
      <Layout>
        <Head title="masthead" />
        <div className={mastheadStyles.bannerContainer}>
          <div className={mastheadStyles.banner}>
            meet the staff!
          </div>
        </div>
        <div className={mastheadStyles.parent}>

          <div className={mastheadStyles.div1}>
            <div className={mastheadStyles.flex}>
              <img src={blueagave} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>zoe reay-ellers</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Zoe Reay-Ellers (she/her) is a junior at Cornell University. She likes everything bagels and owns sixteen plants. Her work has appeared 
            in a number of different places, including HAD, ALOCASIA, Ghost City Review, and Stone Circle Review.
            </div>
          </div>


          <div className={mastheadStyles.div6}>
            <div className={mastheadStyles.flex}>
              <img src={cheese} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>aster haviland</div>
                <div className={mastheadStyles.role}>editor</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
              Aster (they/them) is a junior at Princeton University studying Comparative Literature and always questioning their life decisions. They enjoy dogs, robots, mermaids, and learning new languages. Their work has been published in Okay Donkey, Ninth Letter Web Issue, and the Nassau Review.
            </div>
          </div>
        </div>
        <div className={mastheadStyles.role}>
          currently, there are no open positions on staff.
        </div>
      </Layout>
    </>
  )
}

export default Masthead
