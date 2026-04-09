import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import Subheader from "../components/subHeader"
import mastheadStyles from "./masthead.module.scss"
import aboutStyles from "./about.module.scss"

import blueagave from "../images/blueagave.png"
import cheese from "../images/cheese.png"
import indexStyles from "./index.module.scss"
import soaphead from "../images/soaphead.png"
import ben from "../images/ben.png"
import trinity from "../images/trinity.png"
import cam from "../images/cam.png"
import mj from "../images/mj.png"
import lillie from "../images/lillie.png"




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
                <div className={mastheadStyles.name}>Zoe Reay-Ellers</div>
                <div className={mastheadStyles.role}>Editor-in-Chief</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Zoe Reay-Ellers (she/her) is a senior at Cornell University. She likes everything bagels and owns sixteen plants. Her work has appeared 
            in a number of different places, including HAD, ALOCASIA, Ninth Letter, Silly Goose Press, and Stone Circle Review.
            </div>
          </div>
        <div className={mastheadStyles.div6}>
            <div className={mastheadStyles.flex}>
              <img src={ben} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>Ben Starr</div>
                <div className={mastheadStyles.role}>Poetry Reader</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Ben lives in Los Angeles with his wife, a high school teacher, and three extremely powerful daughters. A proud member of the Bursky Collective, Ben's work has been featured or is forthcoming in Bending Genres, Bruiser Mag, Dodo Eraser, Gone Lawn, HAD, Maudlin House, Scaffold and other weird journals. Find more of his work on X @benjaminstarr and at <a href="https://benstarrwrites.com"> benstarrwrites.com</a>
            </div>
          </div>
        <div className={mastheadStyles.div2}>
            <div className={mastheadStyles.flex}>
              <img src={trinity} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>Trinity Richardson</div>
                <div className={mastheadStyles.role}>Poetry Reader</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Trinity Richardson (they/she) is a poet raising an evil cat. They have been nominated for the Pushcart Prize. Their poems can be found or are forthcoming in Gulf Stream, Moon City Review, Thimble, and more. Outside of writing, their interests include Magic, magic, claw machines, stories with ambiguous endings, and the fly from Breaking Bad.
            </div>
          </div>
        <div className={mastheadStyles.div3}>
            <div className={mastheadStyles.flex}>
              <img src={cam} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>Cameron Vernali</div>
                <div className={mastheadStyles.role}>Prose Reader</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Cameron Vernali is a writer and amateur puzzle maker. She wrote on a short-form branded web series through Say Studios and was a Stowe Narrative Labs Fellowship Finalist. She has been published in The Dry River, Syllabus and more. She takes advantage of living in California by hiking and camping often.</a>
            </div>
          </div>
      <div className={mastheadStyles.div4}>
            <div className={mastheadStyles.flex}>
              <img src={mj} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>M.J. Young</div>
                <div className={mastheadStyles.role}>Poetry Reader</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            M.J. Young (he/him) is a writer and MFA student at Florida International University, where he is a graduate instructor. His poetry can be found in Ninth Letter, phoebe, The Penn Review, and elsewhere. In his free time he enjoys listening to Philip Glass and exploring bookstores.
            </div>
          </div>
        <div className={mastheadStyles.div5}>
            <div className={mastheadStyles.flex}>
              <img src={lillie} alt="website logo" />
              <div className={mastheadStyles.badges}>
                <div className={mastheadStyles.name}>Lillie E. Franks</div>
                <div className={mastheadStyles.role}>Prose Reader</div>
              </div>
            </div>
            <div className={mastheadStyles.description}>
            Lillie E. Franks is an author and educator who lives in Chicago, Illinois, but is normal about it. You can read her work at places like Flash Frog, Hex, and HAD or follow her on Bluesky at @lilliekoi.bsky.social. She loves anything that is not the way it should be. </a>
            </div>
          </div>
        </div>
        <div className={aboutStyles.masthead}>
          <div className={aboutStyles.piecelink}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSerUP1Hf7_LxgCbvaN5MmoAgb_MUsrzNUH6u407YzONJcAxhw/viewform?usp=header">staff applications are currently open!</a>
        </div>
        </div>
      </Layout>
    </>
  )
}

export default Masthead













