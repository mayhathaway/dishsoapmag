import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import Subheader from "../components/subHeader"
import mastheadStyles from "./masthead.module.scss"

import bianca from "../images/bianca.png"
import blossom from "../images/blossom.png"
import blueagave from "../images/blueagave.png"
import cabbages from "../images/cabbages.png"
import cheese from "../images/cheese.png"
import iris from "../images/iris.png"
import jocky from "../images/jocky.png"
import mae from "../images/mae.png"
import may from "../images/may.png"
import psych from "../images/psych.png"
import soapy from "../images/soapy.png"
import tato from "../images/tato.png"
import yongs from "../images/yongs.png"
import mwitta from "../images/mwitta.png"
import oneill from "../images/oneill.png"
import dhwanee from "../images/dhwanee.png"
import norah from "../images/norah.png"
import marnie from "../images/marnie.png"


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
                <div className={mastheadStyles.name}>kel</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              add your bio here!
            </div>
          </div>


          <div className={mastheadStyles.div6}>
            <div className={mastheadStyles.flex}>
              <img src={psych} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>miriam alex</div>
                <div className={mastheadStyles.role}>assistant editor-in-chief</div>
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
