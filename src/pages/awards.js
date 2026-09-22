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
    <Subheader title="on display" />
    <Layout>
      <Head title="awards & nominations"/>


 <h1 className={issueStyles.heading}>Best Small Fictions Nominees 2027</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

         <Link to="/7-7-26">
        <h2 className={archiveStyles.piecelink}>Mom's Bigfoot</h2>
                    </Link>
                    <p>ashley w. cundiff</p>

                     <Link to="/7-14-26">
                    <h2 className={archiveStyles.piecelink}>Pull It Together, Wilson</h2>
                                </Link>
                                <p>emily rinkema</p>

          <Link to="/5-19-26">
          <h2 className={archiveStyles.piecelink}>Paul From the Future</h2>
                      </Link>
                      <p>sarp sozdinler</p>

           <Link to="/4-7-26">
           <h2 className={archiveStyles.piecelink}>Things I thought about while driving across the country</h2>
                                  </Link>
                                  <p>nick van osdol</p>

          <Link to="/4-21-26">
         <h2 className={archiveStyles.piecelink}>The Girlfriends Of The Propeller Plane Disappearance Victims</h2>
           </Link>
           <p>dallon robinson</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

      <h1 className={issueStyles.heading}>Best of the Net Nominees 2027</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

        <Link to="/10-21-25">
        <h2 className={archiveStyles.piecelink}>2014, reframed</h2>
        </Link>
        <p>michelle li</p>

        <Link to="/3-3-26">
        <h2 className={archiveStyles.piecelink}>Still Life With Lithium and Light</h2>
        </Link>
        <p>jeffrey heath</p>
       
<Link to="/2-10-26">
            <h2 className={archiveStyles.piecelink}>Wake</h2>
            </Link>
            <p>matthew demarco</p>

<Link to="/3-10-26">
            <h2 className={archiveStyles.piecelink}>Closure</h2>
            </Link>
            <p>ashley varela</p>

            <Link to="/4-28-26">
            <h2 className={archiveStyles.piecelink}>Scenery</h2>
            </Link>
            <p>rachel sherman</p>

            <Link to="/12-2-25">
                        <h2 className={archiveStyles.piecelink}>The Marriage</h2>
                        </Link>
                        <p>elena zhang</p>

               <Link to="/5-19-26">
               <h2 className={archiveStyles.piecelink}>Paul From the Future</h2>
                           </Link>
                           <p>sarp sozdinler</p>     

         <Link to="/4-21-26">
        <h2 className={archiveStyles.piecelink}>The Girlfriends Of The Propeller Plane Disappearance Victims</h2>
                    </Link>
                    <p>dallon robinson</p>    

                     <Link to="/7-29-25/mustard/">
                                <h2 className={archiveStyles.piecelink}>For the Love of Hot Mustard</h2>
                                </Link>
                                <p>Tracie Adams</p>
            
                          <Link to="/1-6-26">
            <h2 className={archiveStyles.piecelink}>Description is one thing among a number of things</h2>
                        </Link>
                        <p>hugh behm-steinberg</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

<h1 className={issueStyles.heading}>Best New Poets Nominees 2026</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

<Link to="/2-10-26">
            <h2 className={archiveStyles.piecelink}>Wake</h2>
            </Link>
            <p>matthew demarco</p>

<Link to="/3-10-26">
            <h2 className={archiveStyles.piecelink}>Closure</h2>
            </Link>
            <p>ashley varela</p>

 </div>
            </div>
          </div>
          <br></br>
          <br></br>

<h1 className={issueStyles.heading}>Best of the Net Nominees 2026</h1>
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

<h2><Link to="/12-3-24/AFAB/" className={archiveStyles.piecelink}>AFAB</Link> (finalist)</h2>
            <p>eli v. rahm</p>

<h2><Link to="/2-18-25/possessed/" className={archiveStyles.piecelink}>girl, possessed!</Link> (selected)</h2>
           <p>tara labovich</p>

          <Link to="/5-20-25/prayer/">
         <h2 className={archiveStyles.piecelink}>PRAYER TO SAINT MICHAEL</h2>
           </Link>
           <p>katherine oung</p>

<h2><Link to="/5-6-29/anaphora/" className={archiveStyles.piecelink}>Anaphora</Link> (selected)</h2>
                       <p>esmé kaplan-kinsey</p>


<h2><Link to="/8-13-24/mother-i-cant-serve/" className={archiveStyles.piecelink}>Mother, I can't serve</Link> (finalist)</h2>
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

<h2><Link to="/12-31-24/laser/" className={archiveStyles.piecelink}>They fired up the laser</Link> (selected)</h2>
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

