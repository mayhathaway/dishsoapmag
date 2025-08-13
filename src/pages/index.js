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
            <h3 className={indexStyles.postauthor}>Mathieu Parsy</h3>
            <h1 className={indexStyles.posttitle}>We Wanted to Save the Planet, Then Summer Called</h1>
          <p className={indexStyles.posttext}>
    We’re trying to make a responsible choice as a couple. After the climate grief workshop and that
extremely convincing YouTube video about moose corridors, we agreed to pause all frivolous
spending. No more spontaneous patio brunches. No more artisanal gin subscriptions. No more
buying “just a few” succulents that turn into a full terrarium ecosystem.
<br></br>
<br></br>But now we’re at a crossroads.
<br></br>
<br></br>There’s a plot of land in Nova Scotia. Wetlands, old-growth spruce, fox tracks like ellipses
through the snow. The real estate agent called it “undevelopable,” which only made us love it
more. It’s not so much for us—it’s for the warblers, the bog turtles, the timid deer that shows up
in trail cam photos.
<br></br>
<br></br>But also…
<br></br>
<br></br>There’s a candy-apple red BMW convertible that looks like it was engineered specifically for our
mid-life crisis. Low mileage. Tan leather interior. Just enough room for one overnight bag and all
our regrets. The ad says “Summer is calling.” My wife and I met in the Summer—we already
wore aviators and felt a little wild.
<br></br>
<br></br>We spreadsheeted the pros and cons. The BMW got points for “wind joy” and “healing through
escape velocity.” The land got points for “carbon sink potential” and “moss you can lie down in
and maybe cry a little.”
<br></br>
<br></br>We visited the plot last week. A hare stared at us like it knew we’d hesitate. We leaned on a rock
and thought about legacy. We also imagined the rock as a roadside rest stop, a scenic overlook,
the BMW parked neatly beside it, the greatest hits of our youth playing through the speakers like
maybe we’ve forgiven ourselves.
<br></br>
<br></br>We haven’t made the decision yet.
<br></br>
<br></br>But we did buy a bird feeder. A little one, shaped like a lighthouse.
<br></br>
<br></br>We hung it on the balcony.
<br></br>
<br></br>The chickadees arrived by noon. They seemed…hopeful.


            </p>
          </div>
          </div>
          <div className={layoutStyles.content}>
          <div className={indexStyles.missiontwo}>
            <p>
            <br></br>
       Mathieu Parsy is a Canadian writer who grew up on the French Riviera. He now lives in Toronto and works in the travel industry. His writing has appeared or is forthcoming in publications such as BULL, Bending Genres, Maudlin House, Does It Have Pockets, and elsewhere. Follow him on Instagram at @mathieu_parsy.</p>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
