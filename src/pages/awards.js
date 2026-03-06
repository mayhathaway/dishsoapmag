import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import MobileNav from "../components/mobileNav"
import issueStyles from "./issues.module.scss"
import { Link } from "gatsby"
import archiveStyles from "./archive.module.scss"
import indexStyles from "./index.module.scss" 
import soaphead from "../images/soaphead.png"

const Masthead = () => {
  return (
    <>
    <MobileNav />
    <Nav />
    <Subheader title="fine china" />
    <Layout>
      <Head title="awards & nominations"/>

<h1 className={issueStyles.heading}>Best of the Net Nominees 2026</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/5-27-25/moonboy/">
            <h2 className={archiveStyles.piecelink}>Tests to Determine Whether Moonboy Has a Soul</h2>
            </Link>
            <p>chris scott</p>

            
            <h2><Link to="/2-25-25/unexplained/" className={archiveStyles.piecelink}>Unexplained Phenomena of Invisible Women</Link> (selected)</h2>
           <p>janice leadingham</p>

             <Link to="/12-3-24/AFAB/">
             <h2 className={archiveStyles.piecelink}>AFAB</h2>
             </Link>
            <p>eli v. rahm</p>

            <Link to="/2-18-25/possessed/">
            <h2 className={archiveStyles.piecelink}>girl, possessed!</h2>
           </Link>
            <p>tara labovich</p>

             <Link to="/1-28-25/bracelets/">
                        <h2 className={archiveStyles.piecelink}>Today I’m Making Friendship Bracelets</h2>
                        </Link>
                        <p>catherine weiss</p>

            <Link to="/6-17-25/sifting/">
                        <h2 className={archiveStyles.piecelink}>Sifting</h2>
                        </Link>
                        <p>sam calhoun</p>

                        <Link to="/3-25-25/paradise/">
                                    <h2 className={archiveStyles.piecelink}>NOT U NOR HIM 2 PARADISE</h2>
                                    </Link>
                                    <p>sosie chery</p>

             <Link to="/10-22-2024/submersion/">
                   <h2 className={archiveStyles.piecelink}>Submersion</h2>
                </Link>
              <p>audrey hall</p>

              <Link to="/4-26-25/strangers/">
                          <h2 className={archiveStyles.piecelink}>We Strangers</h2>
                          </Link>
                          <p>shayla frandsen</p>

                      <Link to="/8-27-2024/other-lyle/">
                                 <h2 className={archiveStyles.piecelink}>Other Lyle</h2>
                                 </Link>
                                 <p>angela townsend</p>   

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <h1 className={issueStyles.heading}>Monarch Awards Nominees 2026</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/12-3-24/AFAB/">
            <h2 className={archiveStyles.piecelink}>AFAB</h2>
            </Link>
            <p>eli v. rahm</p>

            <Link to="/2-18-25/possessed/">
          <h2 className={archiveStyles.piecelink}>girl, possessed!</h2>
          </Link>
           <p>tara labovich</p>

          <Link to="/5-20-25/prayer/">
         <h2 className={archiveStyles.piecelink}>PRAYER TO SAINT MICHAEL</h2>
           </Link>
           <p>katherine oung</p>

           <Link to="/5-6-29/anaphora/">
                       <h2 className={archiveStyles.piecelink}>Anaphora</h2>
                       </Link>
                       <p>esmé kaplan-kinsey</p>

            <Link to="/8-13-24/mother-i-cant-serve/">
             <h2 className={archiveStyles.piecelink}>Mother, I can't serve</h2> 
              </Link>
               <p>j. j. carey</p>

               <Link to="/5-13-25/tomorrow/">
                           <h2 className={archiveStyles.piecelink}>Tomorrow</h2>
                           </Link>
                           <p>lillie e. franks</p>

             <Link to="/1-7-25/whirlpool/">
               <h2 className={archiveStyles.piecelink}>Whirlpool</h2>
                </Link>
               <p>mac murray</p>


              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <h1 className={issueStyles.heading}>Pushcart Prize Nominees 2026</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/5-27-25/moonboy/">
            <h2 className={archiveStyles.piecelink}>Tests to Determine Whether Moonboy Has a Soul</h2>
            </Link>
            <p>chris scott</p>
            
            <Link to="/5-13-25/tomorrow/">
                        <h2 className={archiveStyles.piecelink}>Tomorrow</h2>
                        </Link>
                        <p>lillie e. franks</p>

                         <Link to="/1-28-25/bracelets/">
                                    <h2 className={archiveStyles.piecelink}>Today I’m Making Friendship Bracelets</h2>
                                    </Link>
                                    <p>catherine weiss</p>

                                    <Link to="/6-17-25/sifting/">
                                                <h2 className={archiveStyles.piecelink}>Sifting</h2>
                                                </Link>
                                                <p>sam calhoun</p>

                                                 <Link to="/7-15-25/legacy/">
                                                            <h2 className={archiveStyles.piecelink}>Legacy</h2>
                                                            </Link>
                                                            <p>tom busillo</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

          <h1 className={issueStyles.heading}>Best Microfiction Nominees 2026</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

           <Link to="/8-12-25/summer/">
                      <h2 className={archiveStyles.piecelink}>We Wanted to Save the Planet, Then Summer Called</h2>
                      </Link>
                      <p>mathieu parsy</p>

          <Link to="/7-1-25/bougainvillea/">
                      <h2 className={archiveStyles.piecelink}>Bougainvillea</h2>
                      </Link>
                      <p>chelsea allen</p>

                      <Link to="/12-2-25">
                                  <h2 className={archiveStyles.piecelink}>The Marriage</h2>
                                  </Link>
                                  <p>elena zhang</p>
            
            <Link to="/12-16-25">
            <h2 className={archiveStyles.piecelink}>Tennis Players</h2>
                        </Link>
                        <p>alice rowena wilson</p>

            <Link to="/12-9-25">
            <h2 className={archiveStyles.piecelink}>Last Week I Was Thinking of You, and I Confess I Am Thinking of You Still</h2>
                        </Link>
                        <p>blake hc mihm</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

            <h1 className={issueStyles.heading}>Best Small Fictions Nominees 2026</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/5-27-25/moonboy/">
            <h2 className={archiveStyles.piecelink}>Tests to Determine Whether Moonboy Has a Soul</h2>
            </Link>
            <p>chris scott</p>

            <Link to="/2-25-25/unexplained/">
                        <h2 className={archiveStyles.piecelink}>Unexplained Phenomena of Invisible Women</h2>
                        </Link>
                        <p>janice leadingham</p>

                        <Link to="/5-13-25/tomorrow/">
                                    <h2 className={archiveStyles.piecelink}>Tomorrow</h2>
                                    </Link>
                                    <p>lillie e. franks</p>
            
             <Link to="/8-12-25/summer/">
                        <h2 className={archiveStyles.piecelink}>We Wanted to Save the Planet, Then Summer Called</h2>
                        </Link>
                        <p>mathieu parsy</p>
            <Link to="/8-5-25/sea/">
                        <h2 className={archiveStyles.piecelink}>The Sea of Tranquility</h2>
                        </Link>
                        <p>marc simon</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

           <h1 className={issueStyles.heading}>Best Small Fictions Nominees 2025</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

<Link to="/12-31-24/laser/">
<h2 className={archiveStyles.piecelink}>They fired up the laser</h2>
            </Link>
            <p>timothy c. goodwin</p>

<Link to="/11-5-2024/heartwood/">
<h2 className={archiveStyles.piecelink}>Heartwood</h2>
            </Link>
            <p>danielle barr</p>

<Link to="/11-26-24/dream-5/">
<h2 className={archiveStyles.piecelink}>Dream 5, Year 661</h2>
            </Link>
            <p>n. j. webster</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>



    </Layout>
    </>
  )
}

export default Masthead

