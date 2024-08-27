import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MailchimpForm from "../components/MailchimpForm"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
import soapadish from "../images/soapadish.png"
import soaphead from "../images/soaphead.png"
import layoutStyles from "../components/layout.module.scss"
import aboutStyles from "./about.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 4
      ) {
        edges {
          node {
            title
            slug
            thumbnail {
              title
              resize(width: 290, height: 165) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Head title="home"/>
      <div className={indexStyles.soapheader}>
            <img src={soaphead} alt="website logo"/>
          </div>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br><strong>For Venessa</strong>
            <br></br><i>by Jacob Jing</i>
            <br></br>
            <br></br>
            <br></br><strong>Other Lyle</strong>
            <br></br><i>by Angela Townsend</i>
            <br></br>
            <br></br>We called him Other Lyle because we already had a Lyle. We never meant for him to hear it. But he started signing the UPS delivery confirmations “Other Lyle.” He left sticky notes on my desk, reading, “Daisy – The donor with the large proboscis asked you to call. XO, Other Lyle.” He asked the Volunteer Director to reprint his nametag, “Other Lyle."
            <br></br>
            <br></br>We never meant for him to hear it, but he heard it as a reprieve. It is hilarious to have two Lyles at one cat shelter. It is considerably less hilarious if you are the follow-up Lyle. 
            <br></br>
            <br></br>Other Lyle volunteered potential titles. He could be Lyle the Lesser, New Jersey’s answer to Pliny the Younger. He could be High Style Lyle, so long as tongues remained firmly in cheeks for the duration of the ride. He could be The Lyle Strikes Back, although there might be concern for copyright infringement.
            <br></br>
            <br></br>Other Lyle is a retired Fordham business law professor. He submitted a curriculum vitae when he applied to scrub litter boxes. The inaugural Lyle had been here two decades. He was eighty-six years old. He waylaid the UPS man to explain the presence of God in the domestic cat. The erstwhile Lyle wore T-shirts reading WIDE LOAD and drenched cat necks with tears. He fell asleep in the lobby, and the Volunteer Director tucked him in with cat blankets. He hid $20s in treat bags for the staff. He called the staff “my lil gals.” He was West Virginia in New Jersey, with a touch of outer space. 
            <br></br>
            <br></br>He was the Lyle everyone meant when they said “Lyle.” Other Lyle was glad to become Other Lyle.
            <br></br>
            <br></br>Other Lyle waited six months to laugh in the presence of humans. It was another six months before he stopped wearing button-down shirts. By the time the primordial Lyle moved to assisted living, Other Lyle held his tail in the air. 
            <br></br>
            <br></br>Other Lyle tells visitors that the Hertz of the purr is the frequency associated with healing ligaments. Other Lyle tells new volunteers that cats lack receptors for sweetness, so their interest in your yogurt is pure protein. Other Lyle asks donors and UPS delivery men about their cats and their children, and he looks them in their eyes. Then, with his back turned, Other Lyle remarks that he is a gold medal pole vaulter and the foremost international authority on Doritos.
            <br></br>
            <br></br>As soon as a tour is over, Other Lyle returns to the lobby like true north. This is where his cats are. Cat Haven has one hundred fifteen residents, but Other Lyle’s concern is the parish around the reception desk. He addresses Buttermuffin as Your Eminence. He permits Howard, renowned for the geographic range of his diarrhea, to sleep on his neck. He eats Doritos with monastic deliberation, pausing to scold the interested. “Tigger, no self-respecting cat would eat Cool Ranch.”
            <br></br>
            <br></br>If you say, “Other Lyle” very quickly, it sounds like “Our Lyle,” which is the entire point. Everyone speaks very quickly at all times at Cat Haven. Everything is urgent when you serve one hundred fifteen despots. Other Lyle is pleased that I did not end up in academia as I had intended. He does not elaborate. 
            <br></br>
            <br></br>In eighteen months, Other Lyle adopted four cats, bringing his personal congregation to six. This is not counting the fungus friends. A woman in a panel van drove onto the sidewalk last summer, rolling down the window and screaming that she needed to give them up. Other Lyle confirmed that they were eight Siamese cats with ringworm. Other Lyle saw them bouncing like Joads in the backseat. One was bald, a purebred Gollum past the point of “precious.” Other Lyle did not ask questions. Other Lyle closed my door and explained that he would foster all eight until Cat Haven had the space for them. Other Lyle and his wife developed ringworm so spectacular, our Executive Director called him Leprous Lyle. Other Lyle adopted Gollum and named him Woodrow, so now he has seven.
            <br></br>
            <br></br>Other Lyle knows Cat Haven can’t take every cat. He observes protocol through a dozen calls a day. He directs people to our resource center. We will help them somehow. Other Lyle makes people feel better. Other Lyle purses his lips when the gals in the lounge thunder about selfish people who give up cats. Other Lyle says no one wants to give up their cat. We don’t have peepholes into despair. The gals stop slurping their ramen to look at Other Lyle, and nobody says anything. Other Lyle doesn’t think there are any bad people, at least not many.
            <br></br>
            <br></br>One Saturday, Other Lyle called me at home. I could hardly recognize his voice. Did I have a minute? I always have a minute, you’re Other Lyle. Daisy, this is serious. A man named Roland found out he is dying. He has cats. He promised they would never be afraid. Will you meet Roland at Cat Haven, Daisy? You need to do this one. I know you love people, Daisy. Roland is going to cry. He needs someone who will cry, too. 
            <br></br>
            <br></br>Other Lyle emailed me every day: did you meet Roland yet? Did you make contact? Not yet, Other Lyle. I keep trying to reach him. I promise I will keep trying every day.
            <br></br>
            <br></br>Roland came, and Roland cried. Roland and I spent two hours on the floor of Suite G while cats caressed him. Roland was not exactly dying, but we’re all dying, and Cat Haven is where he wants his cats to go if he goes. Sometimes Roland wishes he was dying, but if there is a Cat Haven, he can keep the faith. I promised Roland. I called Other Lyle. I called the primeval Lyle in assisted living to tell him that his love is still here, carrying wide loads.                                                         
</p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
            Jacob Jing is a writer studying visual arts at the University of North Texas. Presently, he is a mentee in the 2024 Adroit Journal Summer Mentorship Program. He has been published in Spellbinder Magazine and is forthcoming in the Eunoia Review. In his free time, he enjoys photography, naps, and the $3 milkshakes from the student union. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
