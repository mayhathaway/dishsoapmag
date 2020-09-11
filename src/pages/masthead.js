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
              <img src={bianca} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>bianca layog</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Bianca Layog is a high school senior at Interlochen Arts Academy.
              She is an <i>Adroit Journal</i> 2020 summer mentee,{" "}
              <i>COUNTERCLOCK</i> Arts Collective Creative Writing Fellow and{" "}
              <i>Stanford Daily</i> intern. Her work has appeared in The
              Stanford Daily and <i>Eunoia Review</i> and has been recognized by{" "}
              <i>The Kenyon Review</i> and Princeton University, among others.
              She is from the Philippines and owns 17 Winter hats.
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
              Jennifer Chiu is a student at White Station High School in
              Memphis, TN. She is an <i>Adroit Journal</i> 2020 summer fiction
              mentee, and her prose and poetry are published or forthcoming in
              <i>Rust + Moth</i>,<i>Blue Marble Review</i>, and 
              <i> perhappened mag</i>, among others. When she’s not writing, she
              can be found admiring the sky or bullet journaling with one of her
              twenty-one 0.38mm black pens.
            </div>
          </div>
          <div className={mastheadStyles.div3}>
            <div className={mastheadStyles.flex}>
              <img src={yongs} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>yong-yu huang</div>
                <div className={mastheadStyles.role}>poetry editor</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Yong-Yu Huang is a Taiwanese teenager who has lived in Malaysia
              for most of her life. Her work has been previously published by
              <i>The Heritage Review</i>, <i>Eunoia Review</i>, and{" "}
              <i>The Rising Phoenix Review</i>, among others. In her free time,
              she can be found humming the Doctor Who theme song.
            </div>
          </div>
          <div className={mastheadStyles.div4}>
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
          <div className={mastheadStyles.div5}>
            <div className={mastheadStyles.flex}>
              <img src={jocky} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>estlle</div>
                <div className={mastheadStyles.role}>prose reader</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Estelle (going by her middle name) is a high school junior living
              in the suburbs of Las Vegas. She has been nationally recognized by
              the Scholastic Art and Writing Awards, the Belin-Blank Center, and
              the Wilbur 21nd Niso—Smith Foundation. Her work also appears in a
              published anthology of short stories. Apart from writing, Estelle
              enjoys playing Stardew Valley and obsessively rewatching the best
              TV show of all time, Avatar: The Last Airbender.
            </div>
          </div>
          <div className={mastheadStyles.div6}>
            <div className={mastheadStyles.flex}>
              <img src={emo} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>nikita bhardwaj</div>
                <div className={mastheadStyles.role}>prose reader</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Nikita Bhardwaj is a high school senior from New Jersey. She is an Iowa
              Young Writers’ Studio student Whose work has been recognized by
              NCTE, the Scholastic Art and Writing Awards, the Pulitzer Center,
              and others. She enjoys long walks in beautiful places and playing
              volleyball.
            </div>
          </div>

          <div className={mastheadStyles.div7}>
            <div className={mastheadStyles.flex}>
              <img src={psych} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>miriam alex</div>
                <div className={mastheadStyles.role}>poetry reader</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Miriam Alex is a writer and high school junior from New
              Hampshire. Through art, she often explores heritage, identity,
              family, and surreal aspects of the mundane. Her work has been
              recognized by the Scholastic Art & Writing Awards and the Pulitzer
              Center and is published or forthcoming in <i>Rising Phoenix Review</i>
              and <i>Sandpiper Mag</i>, among others. In addition to writing, she
              enjoys music and was a 2020 COUNTERCLOCK Arts Collective Music
              Fellow.
            </div>
          </div>
          <div className={mastheadStyles.div8}>
            <div className={mastheadStyles.flex}>
              <img src={soapy} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>sophie zhu</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Sophie Zhu is an avid poet, mathlete, and pianist from New York.
              An <i>Adroit Journal</i> 2020 summer mentee and a COUNTERCLOCK
              Arts Collective 2020 music fellow, she has work published or
              forthcoming in <i>Half Mystic Journal</i>,
              <i>The Heritage Review</i>, <i>Sine Theta Magazine</i>, and
              <i>Eunoia Review</i>.
            </div>
          </div>
          <div className={mastheadStyles.div9}>
            <div className={mastheadStyles.flex}>
              <img src={iris} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>Iris Yu</div>
                <div className={mastheadStyles.role}>
                  executive manager, fiction editor
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
              recognized by the Scholastic Art and \Writing Awards and is in or
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
                <div className={mastheadStyles.name}>janet li</div>
                <div className={mastheadStyles.role}>
                  hybrid editor, prose reader
                </div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Janet Li is a high schooler from Ohio and a passionate creative.
              She uses all types of art as a medium for expression and
              conversation: from poetry and prose to songwriting and design.
              When not starting another work—in-progress at one in the morning,
              she can be found creating playlists and helping to advocate for
              social justice issues.
            </div>
          </div>
          <div className={mastheadStyles.div12}>
            <div className={mastheadStyles.flex}>
              <img src={mae} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>amour maorie ellis</div>
                <div className={mastheadStyles.role}>prose reader</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Amour (with a heavy emphasis on her middle name) Maorie Ellis
              lives in New Jersey. She is a sophomore at Phillips Academy and is
              the Prose Editor for her school’s literary magazine,{" "}
              <i>The Courant</i> . Her work appears in <i>The Aurora Review</i>{" "}
              and she is a 2020
              <i>Adroit Journal</i> Creative Nonfiction Mentee.
            </div>
          </div>
          <div className={mastheadStyles.div13}>
            <div className={mastheadStyles.flex}>
              <img src={blueagave} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>ran zhao</div>
                <div className={mastheadStyles.role}>poetry reader</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Ran Zhao is a student from Hong Kong. Her work has been recognised
              by the Hong Kong Young Writers’ Awards and the Hong Kong Budding
              Poets Award. Outside of writing, she loves art and space, and her
              goal in life is to become a crazy cat lady.
            </div>
          </div>
          <div className={mastheadStyles.div14}>
            <div className={mastheadStyles.flex}>
              <img src={blossom} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>dana blatte</div>
                <div className={mastheadStyles.role}>editor-in-chief</div>
              </div>
            </div>

            <div className={mastheadStyles.description}>
              Dana Blatte is a student from Massachusetts. Her work is published
              or forthcoming in <i>The Heritage Review</i>, <i>Eunoia Review</i>, and <i>The Incandescent Review</i>, and she has been recognized by NaNoWriMo’s
              Young Writer’s Program and the Pulitzer Center, among others. An
              aspiring illustrator, author, and polyglot, she has a penchant for
              magical realism, oil paint, and Mandarin. And yes, she is a
              vegetarian who hates salad.
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
