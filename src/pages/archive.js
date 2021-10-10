import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import MobileNav from "../components/mobileNav"
import issueStyles from "./issues.module.scss"
import { Link } from "gatsby"

const Masthead = () => {
  return (
    <>
    <MobileNav />
    <Nav />
    <Subheader title="dish museum" />
    <Layout>
      <Head title="archive" />
      
      <h1 className={issueStyles.heading}>Issue 2</h1>
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

      <h1 className={issueStyles.heading}>Issue 1</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>heath wooten</h2>
              <Link to="/issue1/summer-heroes">
                <p>Summer Heroes</p>
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
            <div className={issueStyles.bottomMargin}>
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
          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue1/karl-zuehlke">
                <h2>karl zuehlke</h2>
                <p>Earth</p>
                <p>Forest</p>
              </Link>
              <Link to="/issue1/vivi-niya-gao">
                <h2>vivi niya gao</h2>
                <p>The City of Individuals</p>
                <p>Expressions of Still Life I</p>
              </Link>
              <Link to="/issue1/ashley-cai">
                <h2>ashley cai</h2>
                <p>Please Remain Calm</p>
              </Link>
            </div>
            <div>
            <Link to="/issue1/janelle-cordero">
                <h2>janelle cordero</h2>
                <p>Bell</p>
                <p>Mina</p>
                <p>Anika</p>
              </Link>
              <Link to="/issue1/stephane-vereecken">
                <h2>stephane vereecken</h2>
                <p>The Garden 22</p>
              </Link>
          </div>
        </div>
        </div>
    </Layout>
    </>
  )
}

export default Masthead
