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
      <Subheader title="issue one" />
      <Layout>
        <Head title="issues" />
        <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>heath wooten</h2>
              <Link to="/issue1/summer-heroes">
                <p>Summer Heroes</p>
              </Link>
              <Link to="/issue1/elegy-for-all-stingrays">
                <p>Elegy for All Stingrays</p>
              </Link>
              <h2>alina stefanescu</h2>
              <Link to="/issue1/the-krakow-nude">
                <p>The Krakow Nude</p>
              </Link>
              <Link to="/issue1/red-chair-with-potential">
                <p>Red Chair With Potential</p>
              </Link>
              <h2>darnell "deesoul" carson</h2>
              <Link to="/issue1/forgive-me-if-i-say">
                <p>Forgive Me If I Say</p>
              </Link>
              <h2>jonny teklit</h2>
              <Link to="/issue1/notes-on-anger">
                <p>Notes on Anger</p>
              </Link>
              <Link to="/issue1/one-night">
                <p>
                  One Night, When the Dread is Hard to Shake, I Ask Whoever Is
                  Up There
                </p>
              </Link>
            </div>
            <div className={issueStyles.bottomMargin}>
              <h2>gaia rajan</h2>
              <Link to="/issue1/poem-inside-a-locker-room">
                <p>Poem Inside a Locker Room</p>
              </Link>
              <Link to="/issue1/prayer-for-doomed-girls">
                <p>Prayer for Doomed Girls</p>
              </Link>
              <h2>poppy rosales</h2>
              <Link to="/issue1/the-age-old-struggle-of-being-a-woman-in-love-that-still-plagues-the-21st-century">
                <p>
                  the age-old struggle of being a woman in love that still
                  plagues the 21st century
                </p>
              </Link>
              <h2>taylor garrison</h2>
              <Link to="/issue1/joan-of-arc-invented-the-bob">
                <p>Joan of Arc Invented the Bob</p>
              </Link>
              <h2>william doreski</h2>
              <Link to="/issue1/fustian">
                <p>Fustian</p>
              </Link>
              <Link to="/issue1/strangers">
                <p>Strangers</p>
              </Link>
              <Link to="/issue1/cultures-vultures-bereft">
                <p>Cultures Vultures Bereft</p>
              </Link>
            </div>
          </div>
          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div>
              <h2>katie grierson</h2>
              <Link to="/issue1/good-daughter">
                <p>Good Daughter</p>
              </Link>
              <h2>darnell "deesoul" carson</h2>
              <Link to="/issue1/dog-days">
                <p>Dog Days</p>
              </Link>
            </div>
            <div>
              <h2>youngseo lee</h2>
              <Link to="/issue1/autopsy-but-flourished-with-prayer">
                <p>autopsy, but flourished with prayer</p>
              </Link>
              <h2>liz wride</h2>
              <Link to="/issue1/have-you-seen-this-bird">
                <p>Have you seen this bird?</p>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Issues
