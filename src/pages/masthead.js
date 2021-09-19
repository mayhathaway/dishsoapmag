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
import emo from "../images/emo.png"
import iris from "../images/iris.png"
import jocky from "../images/jocky.png"
import mae from "../images/mae.png"
import may from "../images/may.png"
import psych from "../images/psych.png"
import soapy from "../images/soapy.png"
import tato from "../images/tato.png"
import yongs from "../images/yongs.png"

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
            <img src={yongs} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>yong-yu huang</div>
              <div className={mastheadStyles.role}>editor-in-chief</div>
            </div>
          </div>

          <div className={mastheadStyles.description}>
            Yong-Yu Huang is a Taiwanese student living in Malaysia.
            Her work is featured or forthcoming in <i> Waxwing </i>, <i> Frontier Poetry </i>,
            and <i> Passages North</i>, among others, and has been recognised by
            Princeton University, The Kenyon Review, and Columbia College Chicago,
            among others. In her free time, she enjoys listening to Studio Ghibli
            soundtracks and sitting by bonfires on the beach.
          </div>
        </div>

        <div className={mastheadStyles.div2}>
          <div className={mastheadStyles.flex}>
            <img src={blueagave} alt="website logo" />
            <div className={mastheadStyles.badges}>
              <div className={mastheadStyles.name}>ran zhao</div>
              <div className={mastheadStyles.role}>managing editor</div>
            </div>
          </div>

          <div className={mastheadStyles.description}>
          Ran Zhao is a student from Hong Kong. She is an alumna of the Adroit
          Journal’s summer mentorship, and her writing has been recognized by
          the Foyle Young Poets award. Outside of writing, she loves art and
          space, and her goal in life is to become a crazy cat lady.
          </div>
        </div>

          <div className={mastheadStyles.div3}>
            <div className={mastheadStyles.flex}>
              <img src={bianca} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>bianca layog</div>
                <div className={mastheadStyles.role}>prose editor</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Bianca Layog is an English student at King’s College London.
            As of this moment, she has listened to Good News by Mac Miller
            1,008 times. Her Spotify username is @kirschenmanfruit and no,
            she will not tell you why.
            </div>
          </div>

          <div className={mastheadStyles.div4}>
            <div className={mastheadStyles.flex}>
              <img src={tato} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>jennifer chiu</div>
                <div className={mastheadStyles.role}>prose editor</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Jennifer Chiu is from Memphis, TN. Her prose and poetry are published
            or forthcoming in <i> wildness </i>, <i> Pidgeonholes </i>, <i> Hobart
            Pulp </i>, and elsewhere. When she’s not writing, she enjoys
            afternoon walks and making playlists.
            </div>
          </div>



          <div className={mastheadStyles.div5}>
            <div className={mastheadStyles.flex}>
              <img src={may} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>may hathaway</div>
                <div className={mastheadStyles.role}>nonfiction editor</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
              May Hathaway is a high school senior from New York City. Her work
              appears or is forthcoming in <i>Blue Marble Review</i>,{" "}
              <i>perhappened mag</i>, and <i>Sanpiper Magazine</i> and has been
              nationally recognized by the Scholastic Art & Writing Awards. She
              is a 2020
              <i> Adroit Journal</i> Creative Nonfiction Mentee, an Iowa Young
              Writers’ Studio student, and a crossword enthusiast.
            </div>
          </div>

          <div className={mastheadStyles.div6}>
            <div className={mastheadStyles.flex}>
              <img src={jocky} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>poem</div>
                <div className={mastheadStyles.role}>prose editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Poem is a high-school student living in the cookie-cutter suburban
              outskirts of Las Vegas. She has been recognized nationally by the
              Scholastic Art & Writing Awards and the YoungArts Foundation, and
              is an alumni of the Adroit Journal Summer Mentorship. Some of her
              favorite themes to write about include body-centric surrealism,
              grief and longing. When not writing, Poem spends her time playing
              with her dog Freddie, loitering in bookstores, and reading web
              serials.
            </div>
          </div>

          <div className={mastheadStyles.div7}>
            <div className={mastheadStyles.flex}>
              <img src={mae} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>amour maorie ellis</div>
                <div className={mastheadStyles.role}>prose editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Amour (with a heavy emphasis on her middle name) Maorie Ellis
              lives in New Jersey. She is a sophomore at Phillips Academy and is
              the Prose Editor for her school’s literary magazine,{" "}
              <i>The Courant</i>. Her work appears in <i>The Aurora Review</i>{" "}
              and she is a 2020
              <i> Adroit Journal</i> Creative Nonfiction Mentee.
            </div>
          </div>

          <div className={mastheadStyles.div8}>
            <div className={mastheadStyles.flex}>
              <img src={psych} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>miriam alex</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
            Miriam Alex is from southern New Hampshire. Her work is published
            or forthcoming in <i> Frontier Poetry </i>, <i> Gigantic Sequins </i>,
            <i> Gone Lawn </i>, and <i> Uncanny Magazine </i>. She is a 2021
            Youth Poet Laureate of NH. At the moment, she is likely playing word
            games on her phone or rewatching her favorite sitcoms. She hopes
            you have a lovely day.
            </div>
          </div>


          <div className={mastheadStyles.div9}>
            <div className={mastheadStyles.flex}>
              <img src={iris} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>iris yu</div>
                <div className={mastheadStyles.role}>
                  managing editor
                </div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Iris Yu is a Chinese-American student from Ohio. Her work can be
              found or is forthcoming in Sine Theta, Blue Marble Review, and The
              Heritage Review. She is an alumna of the Sewanee Young Writers
              Conference (‘19) and the Iowa Young Writers Studio (‘20), as well
              as a finalist in the Pulitzer Center Poetry Contest. She enjoys
              persimmons and soup (not together).
            </div>
          </div>
          <div className={mastheadStyles.div10}>
            <div className={mastheadStyles.flex}>
              <img src={cabbages} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>corine huang</div>
                <div className={mastheadStyles.role}>poetry editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Corine  Huang is a high school junior from Hong Kong. Her work has been
              recognized by the Scholastic Art and Writing Awards and is in or
              forthcoming from <i>Rust + Moth</i>, <i>Eunoia Review</i>,{" "}
              <i>Rising Phoenix Review</i>, and others. She enjoys most
              vegetables, but she has a specific love for cabbages. She hopes
              that you’re having a wonderful day!
            </div>
          </div>
          <div className={mastheadStyles.div11}>
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
            Janet (Jay) Li is a student from Ohio who loves creativity over all else. When not starting another work-in-progress at one in the morning, they enjoy playing with their bird, Ikea.
            </div>
          </div>


          <div className={mastheadStyles.div12}>
            <div className={mastheadStyles.flex}>
              <img src={blossom} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>dana blatte</div>
                <div className={mastheadStyles.role}>poetry editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
            Dana Blatte is a high school student from Massachusetts. Her work
            has been recognized by YoungArts, <i> The New York Times </i>, and
            the Massachusetts Poetry Festival, among others. She’s an alumna of
            the Adroit Mentorship, the Iowa Young Writers’ Studio, and the Alpha
            Young Writers Workshop. Besides writing, she loves illustration,
            linguistics, and honey almond butter.
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
