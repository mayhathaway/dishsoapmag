import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import cx from "classnames"

import Footer from "../components/footer"
import Head from "../components/head"
import Nav from "../components/nav"
import MobileNav from "../components/mobileNav"
import indexStyles from "./index.module.scss"
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

  // if just putting &nbsp; doesn't work, use <span>&nbsp;</span>
  // &nbsp; => space, &ensp; => two spaces, &emsp; => four spaces (tab
  return (
    <div>
      <Head title="home"/>
      <MobileNav />
      <Nav />
      <div className={indexStyles.green}>
        <div className={cx(indexStyles.row, indexStyles.soapRow)}>
        <div className={cx(layoutStyles.content,indexStyles.new)}>
          <div className={indexStyles.missiontwo}>
            <h3 className={indexStyles.postauthor}>Shea Socrates</h3>
            <h1 className={indexStyles.posttitle}>The Great Metro Detroit Flood</h1>
          <p className={indexStyles.posttext}>        
   A meander is a bend in the river, a sinuous curve. So when the Detroit River floods, we do what the river does: we meander. We meander north because the farther north you go, the less anyone believes the flood will come, and disbelief feels like safety. At first we meander past the revitalization in the city; the Little Caesar’s Arena sign flickers once before it becomes a buoy for the newly-rivered. The old houses, faithful but unblessed, don’t meander. They vanish without ceremony.
<br></br>
<br></br>We meander past the Tim Horton’s I only ever use as a bathroom off 11 Mile. We meander past the Home Depot in Madison Heights with its bigger bathrooms. We meander past the Oakland Mall in Troy, but here the water begins to meander faster than we do, like a beast catching its prey. Two grizzled rowers hail us like doomed augurs, yellow raincoats shining, Geek Squad polos visible beneath. They shout that Rochester has already been meandered under. We meander past the automation factories in Auburn Hills. News helicopters meander overhead like metallic vultures. Someone waves from the roof of the Stellantis building, its blue-gradient glistening cobalt with the sudden hint of sun through the clouds—a blue-striped omen against the widening flood. We meander up to the highest point in Auburn Hills, the massive landfill beside what used to be The Palace. At the top stands someone I used to work with, saying, “Crazy weather we’re having. Sure beats the snow, though.”
<br></br>
When the water meanders to its highest point, Charon arrives. A boatsman in black, hood pulled up. He gestures, and we board. He meanders us to the other landfill two miles north. <i></i>Please remember to rate your ride<i></i>, his voice a notification. When we arrive, Lake Orion has meandered into an even larger Lake Orion.
            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
    Shea Socrates is a teacher and emerging writer. Their work has appeared in <i>HAD</i>, <i>Passages North</i>, and <i>JAKE</i>. They live in Detroit with their partner Felicia and three pets, Vashti, Coney, and Vern. </p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
