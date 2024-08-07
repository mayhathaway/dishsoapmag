import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import Subheader from "../components/subHeader"
import mastheadStyles from "./masthead.module.scss"

import blueagave from "../images/blueagave.png"
import psych from "../images/psych.png"



const Masthead = () => {
  return (
    <>
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
              <div className={mastheadStyles.description}>
            Zoe Reay-Ellers is a junior at Cornell University. She likes everything bagels and owns sixteen plants. Her work has appeared 
            in a number of different places, including Kissing Dynamite, HAD, Fish Barrel 
            Review, and Eunoia Review.
            </div>
            </div>
          </div>


          <div className={mastheadStyles.div6}>
            <div className={mastheadStyles.flex}>
              <img src={psych} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>miriam alex</div>
                <div className={mastheadStyles.role}>assistant eic</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
              Miriam Alex is a lover of all things slice-of-life. Her work has been published
              or is forthcoming in Best New Poets 2023, OSU's The Journal and Frontier Poetry,
              among others.
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
