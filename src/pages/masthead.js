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
              <img src={psych} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>miriam alex</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
            Miriam Alex is from southern New Hampshire. Her work is published
            or forthcoming in <i>Frontier Poetry</i>, <i>Gigantic Sequins</i>,
            <i>Gone Lawn</i>, and <i>Uncanny Magazine</i>. She is a 2021
            Youth Poet Laureate of NH. At the moment, she is likely playing word
            games on her phone or rewatching her favorite sitcoms. She hopes
            you have a lovely day.
            </div>
          </div>

        <div className={mastheadStyles.div2}>
          <div className={mastheadStyles.flex}>
            <img src={tato} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>jennifer chiu</div>
              <div className={mastheadStyles.role}>managing editor</div>
            </div>
          </div>
          <div className={mastheadStyles.description}>
          Jennifer Chiu is from Memphis, TN. Her prose and poetry are published
          or forthcoming in <i> wildness </i>, <i> Pidgeonholes </i>, <i> Hobart
          Pulp </i>, and elsewhere. When she’s not writing, she enjoys
          afternoon walks and making playlists.
          </div>
        </div>

        <div className={mastheadStyles.div3}>
          <div className={mastheadStyles.flex}>
            <img src={cheese} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>janet (jay) li</div>
              <div className={mastheadStyles.role}>
                hybrid and prose editor
              </div>
            </div>
          </div>

          <div className={mastheadStyles.description}>
          Janet (Jay) Li is a student from Ohio who loves creativity over all
          else. When not starting another work-in-progress at one in the
          morning, they enjoy playing with their bird, Ikea.
          </div>
        </div>

        <div className={mastheadStyles.div4}>
          <div className={mastheadStyles.flex}>
            <img src={mwitta} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>catherine mwitta</div>
              <div className={mastheadStyles.role}> prose editor</div>
            </div>
          </div>

          <div className={mastheadStyles.description}>
          Catherine Mwitta has a Bachelors in creative writing from Kwantlen
          Polytechnic University, and a certification in Journalism from
          Langara College. While she isn’t posting on her blog theaquilla.com,
          Catherine is volunteering at local Vancouver literary magazines
          such as <i>Malahat Review, Prism International, Room magazine </i>
          and <i>Mags BC</i>. She has short stories published in <i>Quarantine
          Reviews, Random Photo Journal</i>, and <i>Otis Nebula.</i> She
          likewise has bylines at <i>Stir Vancouver, RoyalTee Magazine,
           SAD Mag</i> and <i>Malahat Review. </i>
          </div>
        </div>

        <div className={mastheadStyles.div5}>
          <div className={mastheadStyles.flex}>
            <img src={dhwanee} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>dhwanee goyal</div>
              <div className={mastheadStyles.role}>poetry editor</div>
            </div>
          </div>

          <div className={mastheadStyles.description}>
          Dhwanee Goyal is sixteen and getting through life one donut at a time.
          An editor-in-chief of <i>Indigo Literary Journal</i>, her work appears
          or is forthcoming in <i>Variant Literature</i>, <i>Heavy Feather Review</i>,
          <i>Honey Literary</i>, and more. Her Twitter handle is @pparallell,
          and her micro-chapbook, ‘Kasauli Daydreams,’ is out from Ghost City Press.
          </div>
        </div>

        <div className={mastheadStyles.div6}>
          <div className={mastheadStyles.flex}>
            <img src={blueagave} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>ran zhao</div>
              <div className={mastheadStyles.role}>managing editor, art editor</div>
            </div>
          </div>
          <div className={mastheadStyles.description}>
          Ran Zhao is a student from Hong Kong. Outside of writing, she loves art,
          outer space, and 1-minute microwave recipes. Her goal in life
          is to become a crazy cat lady.
          </div>
        </div>

        <div className={mastheadStyles.div7}>
          <div className={mastheadStyles.flex}>
            <img src={marnie} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>marnie russell</div>
              <div className={mastheadStyles.role}>prose editor</div>
            </div>
          </div>

          <div className={mastheadStyles.description}>
          Marnie Russell is an English Literature and Theatre Studies graduate
          from Glasgow, Scotland. She predominantly writes plays and prose while
          working on various creative projects as a script advisor and dramaturg.
          Over the past year, she co-wrote and created 'EAT WORMS' with her
          production company False Starts Productions, an episodic digital
          theatre piece showcased at Scottish Youth Theatre's Making Space
          festival. She also wrote 'returning (the act of)', a nine-part
          collaborative digital serial that received the Digital Award at the
          Scottish Emerging Theatre Awards. Marnie was also a member of the
          Traverse Young Writers spring cohort. She is currently working on
          a novel and eating far too much bread.
          </div>
        </div>

          <div className={mastheadStyles.div8}>
            <div className={mastheadStyles.flex}>
              <img src={oneill} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>catherine o'neill</div>
                <div className={mastheadStyles.role}>prose editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
            Catherine hoards books and cats in her corner of England. She writes
            prose, plays, and poems with peculiar twists and characters. She was
            shortlisted for <i>Streetcake Magazine’s Experimental Writing Prize</i>
            and by <i>Northern Gravy</i> for poetry; she’s had a play staged at
            <i>Live Theatre</i>, a short story broadcast on <i>BBC Radio</i>,
            and her monologue <i>'Keep Granny's Clock'</i> is on YouTube. She
            has a degree in English Literature, an MA in Creative Writing, and
            taught and examined for oodles of years. Shakespeare haunts her.
            </div>
          </div>

          <div className={mastheadStyles.div9}>
            <div className={mastheadStyles.flex}>
              <img src={norah} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>norah laughter</div>
                <div className={mastheadStyles.role}>poetry editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
            Norah Laughter is a student from Russellville, Kentucky. She is a
            creative writing alumna of the Kentucky Governor's School for the
            Arts and her poetry has been recognized by Scholastic Art & Writing
            Awards. She spends most of her time working with the Kentucky
            Student Voice Team, where she uses storytelling to push for
            education justice and amplify youth voices. She has two cats,
            two dogs, and a healthy sum of chickens.
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
