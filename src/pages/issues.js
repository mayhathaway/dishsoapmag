import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import Subheader from "../components/subHeader"
import layoutStyles from "../components/layout.module.scss"
import issueStyles from "./issues.module.scss"

const Issues = () => {
  return (
    <>
      <MobileNav />
      <Nav />
      <Subheader title="issue two" />
      <Layout>
        <Head title="issues" />
        <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>charlie blodnieks</h2>
              <Link to="/issue2/ode-to-desperate-housewives">
                <p>Ode to Desperate Housewives</p>
              </Link>
              <h2>alex dang</h2>
              <Link to="/issue2/mac-miller-georgia-o-keeffe-collaboration-track">
                <p>Mac Miller &amp; Georgia O’Keeffe COLLABORATION TRACK</p>
              </Link>
              <h2>kavi kshiraj</h2>
              <Link to="/issue2/constructed-grief">
                <p>Constructed Grief</p>
              </Link>
            </div>
            <div className={issueStyles.bottomMargin}>
            <h2>norah brady</h2>
              <Link to="/issue2/beowulf">
                <p>beowulf</p>
              </Link>
              <h2>rhiannon mcgavin</h2>
              <Link to="/issue2/pith">
                <p>Pith</p>
              </Link>
              <Link to="/issue2/empty">
                <p>Empty</p>
              </Link>
              <h2>rl wheeler</h2>
              <Link to="/issue2/ars-poetica-open-composition">
                <p>Ars Poetica: Open Composition</p>
              </Link>
            </div>
          </div>
          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>martin greenacre</h2>
              <Link to="/issue2/sunshine-on-marchmont">
                <p>Sunshine on Marchmont</p>
              </Link>
              <h2>blake chernin</h2>
              <Link to="/issue2/typhoid-mary">
                <p>Typhoid Mary Would Like to Address You From Her Lonely Bungalow on North Brother Island, Where She Was Imprisoned During the Years 1907-1910 and Again from 1915 Until Her Death in 1938</p>
              </Link>
            </div>
            <div>
              <h2>norah brady</h2>
              <Link to="/issue2/time-bomb">
                <p>Time Bomb</p>
              </Link>
            </div>
          </div>
          <h1 className={issueStyles.heading}>play</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>julia beecher</h2>
              <Link to="/issue2/end-of-days">
                <p>End of Days</p>
              </Link>
            </div>
          </div>
          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue2/fabrice-poussin">
                <h2>fabrice poussin</h2>
                <p>Yet Another Story</p>
                <p>Modern Couple</p>
                <p>Illusion</p>
              </Link>
              <Link to="/issue2/carly-chan">
                <h2>carly chan</h2>
                <p>Trichotomy</p>
              </Link>
            </div>
            <div>
            <Link to="/issue2/adina-guo">
                <h2>adina guo</h2>
                <p>Wai Gong</p>
              </Link>
          </div>
        </div>
        
        </div>
      </Layout>
    </>
  )
}

export default Issues
