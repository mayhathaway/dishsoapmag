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

const Masthead = () => {
  return (
    <>
    <MobileNav />
    <Nav />
    <Subheader title="dish cabinet" />
    <Layout>
      <Head title="archive" />

      <h1 className={issueStyles.heading}>march 2025</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/3-11-25/evil/">
            <h2 className={archiveStyles.piecelink}>Wash Hands With Evil Soap</h2>
            </Link>
            <p>nicole dirks</p>

            <Link to="/3-4-25/home/">
            <h2 className={archiveStyles.piecelink}>Our Historic Home Has Always Been</h2>
            </Link>
            <p>crystal taylor</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>

      <h1 className={issueStyles.heading}>february 2025</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/2-25-25/unexplained/">
            <h2 className={archiveStyles.piecelink}>Unexplained Phenomena of Invisible Women</h2>
            </Link>
            <p>janice leadingham</p>

            <Link to="/2-18-25/possessed/">
            <h2 className={archiveStyles.piecelink}>girl, possessed!</h2>
            </Link>
            <p>tara labovich</p>

            <Link to="/2-11-25/listing/">
            <h2 className={archiveStyles.piecelink}>Things Left Out of the Listing</h2>
            </Link>
            <p>maura monaghan</p>

            <Link to="/2-4-25/past/">
            <h2 className={archiveStyles.piecelink}>I fel the past</h2>
            </Link>
            <p>ewen glass</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>january 2025</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/1-28-25/bracelets/">
            <h2 className={archiveStyles.piecelink}>Today I’m Making Friendship Bracelets</h2>
            </Link>
            <p>catherine weiss</p>

            <Link to="/1-21-25/hats/">
            <h2 className={archiveStyles.piecelink}>H.A.T.S.</h2>
            </Link>
            <p>james callan</p>

            <Link to="/1-14-25/phototaxis/">
            <h2 className={archiveStyles.piecelink}>Bodies in phototaxis</h2>
            </Link>
            <p>rishi janakiraman</p>

            <Link to="/1-7-25/whirlpool/">
            <h2 className={archiveStyles.piecelink}>Whirlpool</h2>
            </Link>
            <p>mac murray</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>december 2024</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/12-31-24/laser/">
            <h2 className={archiveStyles.piecelink}>They fired up the laser</h2>
            </Link>
            <p>timothy c. goodwin</p>

            <Link to="/12-24-24/hashi/">
            <h2 className={archiveStyles.piecelink}>Hashi Motors</h2>
            </Link>
            <p>kiki johnson</p>

            <Link to="/12-17-24/landlord/">
            <h2 className={archiveStyles.piecelink}>Mike (landlord)</h2>
            </Link>
            <p>aiden blasi</p>

            <Link to="/12-10-24/passage/">
            <h2 className={archiveStyles.piecelink}>Passage</h2>
            </Link>
            <p>arushee bhoja</p>

            <Link to="/12-3-24/AFAB/">
            <h2 className={archiveStyles.piecelink}>AFAB</h2>
            </Link>
            <p>eli v. rahm</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>november 2024</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/11-26-24/dream-5/">
            <h2 className={archiveStyles.piecelink}>Dream 5, Year 661</h2>
            </Link>
            <p>n. j. webster</p>

            <Link to="/11-19-24/where-the-birds-went/">
            <h2 className={archiveStyles.piecelink}>Where the Birds Went</h2>
            </Link>
            <p>tanya rastogi</p>

            <Link to="/11-12-2024/mulberry/">
            <h2 className={archiveStyles.piecelink}>Mulberry</h2>
            </Link>
            <p>adam gianforcaro</p>

            <Link to="/11-5-2024/heartwood/">
            <h2 className={archiveStyles.piecelink}>heartwood</h2>
            </Link>
            <p>danielle barr</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>october 2024</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to= "/10-29-2024/ode-to-lucy/">
            <h2 className={archiveStyles.piecelink}>ode to lucy dacus & whatever is in the streetlights</h2>
            </Link>
            <p>noralee zwick</p>

            <Link to="/10-22-2024/submersion/">
            <h2 className={archiveStyles.piecelink}>Submersion</h2>
            </Link>
            <p>audrey hall</p>

            <Link to="/10-15-2024/ars-poetica-problems/">
            <h2 className={archiveStyles.piecelink}>Ars poetica: problems</h2>
            </Link>
            <p>rituja patil</p>

            <Link to="/10-8-2024/hedwig/">
            <h2 className={archiveStyles.piecelink}>Hedwig</h2>
            </Link>
            <p>maya walker</p>

            <Link to="/10-1-2024/interlude-II/">
            <h2 className={archiveStyles.piecelink}>INTERLUDE II</h2>
            </Link>
            <p>ivi hua</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>september 2024</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/9-24-2024/journal-take-1/">
            <h2 className={archiveStyles.piecelink}>journal (take #1)</h2>
            </Link>
            <p>nat raum</p>

            <Link to="/9-17-2024/new-york-botanical-garden-in-june-2023/">
              <h2 className={archiveStyles.piecelink}>New York Botanical Garden in June 2023</h2>
              </Link>
              <p>kyla guimaraes</p>

            <Link to="/9-10-2024/tell-me-i-too-contain-trees/">
              <h2 className={archiveStyles.piecelink}>Tell me I too contain trees</h2>
              </Link>
              <p>kaley hutter</p>

              <Link to="/9-3-2024/paul/">
              <h2 className={archiveStyles.piecelink}>Paul</h2>
              </Link>
              <p>lily yanagimoto</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>august 2024</h1>
      <div className={layoutStyles.mission}>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

            <Link to="/8-27-2024/other-lyle/">
            <h2 className={archiveStyles.piecelink}>Other Lyle</h2>
            </Link>
            <p>angela townsend</p>
            
            <Link to="/8-20-2024/for-venessa/">
              <h2 className={archiveStyles.piecelink}>For Venessa</h2>
              </Link>
              <p>jacob jing</p>

              <Link to="/8-13-24/mother-i-cant-serve/">
              <h2 className={archiveStyles.piecelink}>Mother, I can't serve</h2> 
              </Link>
              <p>j. j. carey</p>

              <Link to="/8-6-24/the-body-as-a-place-for-lost-things/">
              <h2 className={archiveStyles.piecelink}>The Body as a Place for Lost Things</h2>
              </Link>
              <p>aster haviland</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>issue 5</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <Link to="/issue5/the-anxiety-index">
              <h2 className={archiveStyles.piecelink}>The Anxiety Index</h2>
              </Link>
              <p>howie good</p>
              
              <Link to="/issue5/the-day-before-yesterday">
              <h2 className={archiveStyles.piecelink}>The Day Before Yesterday</h2>
              </Link>
              <p>howie good</p>

              <Link to="/issue5/swirling">
              <h2 className={archiveStyles.piecelink}>{`[Swirling]`}</h2>
              </Link>
              <p>jeffrey letterly</p>

            </div>


            <div className={issueStyles.bottomMargin}>
            
              <Link to="/issue5/spring-meditation">
              <h2 className={archiveStyles.piecelink}>spring meditation</h2>
              </Link>
              <p>nathan lee</p>
                         
              <Link to="/issue5/mom-and-dad">
              <h2 className={archiveStyles.piecelink}>Mom and Dad</h2>
              </Link>
              <p>ashley kim</p>

              <Link to="/issue5/the-anxious-girlfriends-unruly-skeletons">
              <h2 className={archiveStyles.piecelink}>The Anxious Girlfriend's Unruly Skeletons</h2>
              </Link>
              <p>julieanne larick</p>

            </div>
          </div>

          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              
              <Link to="/issue5/skilnadarotti">
              <h2 className={archiveStyles.piecelink}>skilnadarótti</h2>
              </Link>
              <p>theresa kohlbeck jakobsen</p>

            </div>
            <div>

              <Link to="/issue5/words-get-in-the-way">
              <h2 className={archiveStyles.piecelink}>Words Get In The Way</h2>
              </Link>
              <p>james diaz</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}> issue 4 </h1>
        <div className={layoutStyles.mission}>
            <h1 className={issueStyles.heading}>poetry</h1>
            <div className={issueStyles.parent}>
              <div className={issueStyles.bottomMargin}>
               
                <Link to="/issue4/to-term">
                <h2 className={archiveStyles.piecelink}>to term</h2>
                </Link>
                <p>elliot lee</p>

                <Link to="/issue4/to-my-future-nephew">
                <h2 className={archiveStyles.piecelink}>To My Future Nephew II</h2>
                </Link>
                <p>daniel boyko</p>
               
                <Link to="/issue4/teens-on-tiktok">
                <h2 className={archiveStyles.piecelink}>teens on tiktok think i should set boundaries but i am</h2>
                </Link>
                <p>courtney felle</p>
              </div>


              <div className={issueStyles.bottomMargin}>

                <Link to="/issue4/32lemons">
                <h2 className={archiveStyles.piecelink}>32 lemons</h2>
                </Link>
                <p>matt hsu</p>
                <Link to="/issue4/a-page-from-her-book">
                <h2 className={archiveStyles.piecelink}>a page from her book</h2>
                </Link>
                <p>anna feng</p>

                <Link to="/issue4/the-world-is-ending-and-i-am-buying-groceries">
                <h2 className={archiveStyles.piecelink}>The World Is Ending And I Am Buying Groceries</h2>
                </Link>
                <p>leela raj-sankar</p>

              </div>
            </div>

            <h1 className={issueStyles.heading}>prose</h1>
            <div className={issueStyles.parent}>
              <div className={issueStyles.bottomMargin}>
               
                <Link to="/issue4/lawn-chair-larry">
                <h2 className={archiveStyles.piecelink}>Lawn Chair Larry</h2>
                </Link>
                <p>will musgrove</p>
               
                <Link to="/issue4/absurdum">
                <h2 className={archiveStyles.piecelink}>Absurdum</h2>
                </Link>
                <p>nora sun</p>

              </div>
              <div>

                
                <Link to="/issue4/the-chocolatier">
                <h2 className={archiveStyles.piecelink}>The Chocolatier</h2>
                </Link>
                <p>ashley gilland</p>

                
                <Link to="/issue4/henry-wilson">
                <h2 className={archiveStyles.piecelink}>Henry Wilson and the Center of the Sun</h2>
                </Link>
                <p>E.J. Nash</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>issue 3</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <Link to="/issue3/frankievalli">
              <h2 className={archiveStyles.piecelink}>Frankie Valli’s in love with you</h2>
              </Link>
              <p>sunny vuong</p>
             
              <Link to="/issue3/sonnetforbirdsofparadise">
                <h2 className={archiveStyles.piecelink}>sonnet for birds of paradise</h2>
              </Link>
              <p>sal kang</p>
            
              <Link to="/issue3/waterprayers">
                <h2 className={archiveStyles.piecelink}>Water Prayers</h2>
              </Link>
              <p>josephine wu</p>

              <Link to="/issue3/alternateuniverse">
                <h2 className={archiveStyles.piecelink}>IN AN ALTERNATE UNIVERSE WE EAT CAKE</h2>
              </Link>
              <p>ashley hajimirsadeghi</p>

            </div>


            <div className={issueStyles.bottomMargin}>

            <Link to="/issue3/bidingtime">
              <h2 className={archiveStyles.piecelink}>biding time until the spring arrives</h2>
            </Link>
            <p>grace joylynn anderson</p>

              <Link to="/issue3/theorange">
                <h2 className={archiveStyles.piecelink}>The Orange Has Body Image Issues</h2>
              </Link>
              <p>sal kang</p>

              <Link to="/issue3/theleavesaregreen">
                <h2 className={archiveStyles.piecelink}>And the leaves are green</h2>
              </Link>
              <p>ds maolalai</p>
          
            
              <Link to="/issue3/besweet">
                <h2 className={archiveStyles.piecelink}>Be Sweet</h2>
              </Link>
              <p>ashley hajimirsadeghii</p>

            </div>
          </div>

          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              
              <Link to="/issue3/tobeclear">
                <h2 className={archiveStyles.piecelink}>To Be Clear: A Femme Fatale (Gender-Neutral!) Guides You Through A Noir Film in Bollywood (First Of Its Kind! Tickets Open Now!)</h2>
              </Link>
              <p>salonee verma</p>

            </div>
            <div>

              <Link to="/issue3/hirasdaycare">
                <h2 className={archiveStyles.piecelink}>Mrs. Hira's Daycare</h2>
              </Link>
              <p>dedeepya guthikonda</p>

            </div>
          </div>

          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue3/darcymariemelton">
                <h2 className={archiveStyles.piecelink}>Kingfisher</h2>
              </Link>
              <p>darcy marie melton</p>

            </div>
            <div>
            <Link to="/issue3/melodyserra">
                <h2 className={archiveStyles.piecelink}>In the company of trees</h2>
              </Link>
              <p>melody serra</p>

          </div>
        </div>
        </div>
      <br></br>
      <br></br>
      <h1 className={issueStyles.heading}>issue 2</h1>
      <div className={layoutStyles.mission}>
        <h1 className={issueStyles.heading}>poetry</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>
           
            <Link to="/issue2/ode-to-desperate-housewives">
              <h2 className={archiveStyles.piecelink}>Ode to Desperate Housewives</h2>
            </Link>
            <p>charlie blodnieks</p>
            
            <Link to="/issue2/constructed-grief">
              <h2 className={archiveStyles.piecelink}>Constructed Grief</h2>
            </Link>
            <p>kavi kshiraj</p>

            <Link to="/issue2/mac-miller-georgia-o-keeffe-collaboration-track">
              <h2 className={archiveStyles.piecelink}>Mac Miller &amp; Georgia O’Keeffe COLLABORATION TRACK</h2>
            </Link>
            <p>alex dang</p>

          </div>
          <div className={issueStyles.bottomMargin}>

          
            <Link to="/issue2/beowulf">
              <h2 className={archiveStyles.piecelink}>beowulf</h2>
            </Link>
            <p>norah brady</p>

            <Link to="/issue2/pith">
              <h2 className={archiveStyles.piecelink}>Pith</h2>
            </Link>
            <p>rhiannon mcgavin</p>
            
            <Link to="/issue2/empty">
              <h2 className={archiveStyles.piecelink}>Empty</h2>
            </Link>
            <p>rhiannon mcgavin</p>

            <Link to="/issue2/ars-poetica-open-composition">
              <h2 className={archiveStyles.piecelink}>Ars Poetica: Open Composition</h2>
            </Link>
            <p>rl wheeler</p>

          </div>
        </div>
        <h1 className={issueStyles.heading}>prose</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>

            
            <Link to="/issue2/sunshine-on-marchmont">
              <h2 className={archiveStyles.piecelink}>Sunshine on Marchmont</h2>
            </Link>
            <p>martin greenacre</p>

            <Link to="/issue2/typhoid-mary">
              <h2 className={archiveStyles.piecelink}>Typhoid Mary Would Like to Address You From Her Lonely Bungalow on North Brother Island, Where She Was Imprisoned During the Years 1907-1910 and Again from 1915 Until Her Death in 1938</h2>
            </Link>
            <p>blake chernin</p>

          </div>
          <div>
            
            <Link to="/issue2/time-bomb">
              <h2 className={archiveStyles.piecelink}>Time Bomb</h2>
            </Link>
            <p>norah brady</p>

          </div>
        </div>
        <h1 className={issueStyles.heading}>play</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>
            <Link to="/issue2/end-of-days">
              <h2 className={archiveStyles.piecelink}>End of Days</h2>
            </Link>
            <p>julia beecher</p>
          </div>
        </div>
        <h1 className={issueStyles.heading}>art</h1>
        <div className={issueStyles.parent}>
          <div>
            <Link to="/issue2/fabrice-poussin">
              <h2 className={archiveStyles.piecelink}>Yet Another Story</h2>
              </Link>
            <p>fabrice poussin</p>
            
            <Link to="/issue2/fabrice-poussin">
            <h2 className={archiveStyles.piecelink}>Modern Couple</h2>
              </Link>
            <p>fabrice poussin</p>

            <Link to="/issue2/fabrice-poussin">
            <h2 className={archiveStyles.piecelink}>Illusion</h2>
              </Link>
            <p>fabrice poussin</p>
            

          </div>
          <div>
          <Link to="/issue2/carly-chan">
              <h2 className={archiveStyles.piecelink}>Trichotomy</h2>
            </Link>
            <p>carly chan</p>

          <Link to="/issue2/adina-guo">
              <h2 className={archiveStyles.piecelink}>Wai Gong</h2>
            </Link>
            <p>adina guo</p>
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <h1 className={issueStyles.heading}>issue 1</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <Link to="/issue1/summer-heroes">
                <h2 className={archiveStyles.piecelink}>Summer Heroes</h2>
              </Link>
              <p>heath wooten</p>

              <Link to="/issue1/the-krakow-nude">
                <h2 className={archiveStyles.piecelink}>The Krakow Nude</h2>
              </Link>
              <p>alina stefanescu</p>

              <Link to="/issue1/red-chair-with-potential">
                <h2 className={archiveStyles.piecelink}>Red Chair With Potential</h2>
              </Link>
              <p>alina stefanescu</p>

              <Link to="/issue1/forgive-me-if-i-say">
                <h2 className={archiveStyles.piecelink}>Forgive Me If I Say</h2>
              </Link>
              <p>darnell "deesoul" carson</p>

              <Link to="/issue1/notes-on-anger">
                <h2 className={archiveStyles.piecelink}>Notes on Anger</h2>
              </Link>
              <p>jonny teklit</p>

              <Link to="/issue1/one-night">
                <h2 className={archiveStyles.piecelink}>One Night, When the Dread is Hard to Shake, I Ask Whoever Is Up There</h2>
              </Link>
              <p>jonny teklit</p>

            </div>
            <div className={issueStyles.bottomMargin}>
              
              <Link to="/issue1/poem-inside-a-locker-room">
                <h2 className={archiveStyles.piecelink}>Poem Inside a Locker Room</h2>
              </Link>
              <p>gaia rajan</p>

              <Link to="/issue1/prayer-for-doomed-girls">
                <h2 className={archiveStyles.piecelink}>Prayer for Doomed Girls</h2>
              </Link>
              <p>gaia rajan</p>

              <Link to="/issue1/joan-of-arc-invented-the-bob">
                <h2 className={archiveStyles.piecelink}>Joan of Arc Invented the Bob</h2>
              </Link>
              <p>taylor garrison</p>

              <Link to="/issue1/fustian">
                <h2 className={archiveStyles.piecelink}>Fustian</h2>
              </Link>
              <p>william doreski</p>

              <Link to="/issue1/strangers">
                <h2 className={archiveStyles.piecelink}>Strangers</h2>
              </Link>
              <p>william doreski</p>

              <Link to="/issue1/cultures-vultures-bereft">
                <h2 className={archiveStyles.piecelink}>Cultures Vultures Bereft</h2>
              </Link>
              <p>william doreski</p>

              <Link to="/issue1/the-age-old-struggle-of-being-a-woman-in-love-that-still-plagues-the-21st-century">
                <h2 className={archiveStyles.piecelink}>
                  the age-old struggle of being a woman in love that still
                  plagues the 21st century
                </h2>
              </Link>
              <p>poppy rosales</p>

            </div>
          </div>
          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              
              <Link to="/issue1/good-daughter">
                <h2 className={archiveStyles.piecelink}>Good Daughter</h2>
              </Link>
              <p>katie grierson</p>

              
              <Link to="/issue1/dog-days">
                <h2 className={archiveStyles.piecelink}>Dog Days</h2>
              </Link>
              <p>darnell "deesoul" carson</p>
            </div>
            <div>

              <Link to="/issue1/autopsy-but-flourished-with-prayer">
                <h2 className={archiveStyles.piecelink}>autopsy, but flourished with prayer</h2>
              </Link>
              <p>youngseo lee</p>

              
              <Link to="/issue1/have-you-seen-this-bird">
                <h2 className={archiveStyles.piecelink}>Have you seen this bird?</h2>
              </Link>
              <p>liz wride</p>
            </div>
          </div>
          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue1/karl-zuehlke">
                <h2 className={archiveStyles.piecelink}>Earth</h2>
              </Link>
              <p>karl zuehlke</p>
              <Link to="/issue1/karl-zuehlke">
                <h2 className={archiveStyles.piecelink}>Forest</h2>
              </Link>
              <p>karl zuehlke</p>

              <Link to="/issue1/vivi-niya-gao">
                <h2 className={archiveStyles.piecelink}>Expressions of Still Life I</h2>
              </Link>
              <p>vivi niya gao</p>
              <Link to="/issue1/vivi-niya-gao">
                <h2 className={archiveStyles.piecelink}>The City of Individuals</h2>
              </Link>
              <p>vivi niya gao</p>

              <Link to="/issue1/ashley-cai">
                <h2 className={archiveStyles.piecelink}>Please Remain Calm</h2>
              </Link>
              <p>ashley cai</p>
            </div>
            <div>
            <Link to="/issue1/janelle-cordero">
                <h2 className={archiveStyles.piecelink}>Bell</h2>
              </Link>
              <p>janelle cordero</p>
              <Link to="/issue1/janelle-cordero">
                <h2 className={archiveStyles.piecelink}>Mina</h2>
              </Link>
              <p>janelle cordero</p>
              <Link to="/issue1/janelle-cordero">
                <h2 className={archiveStyles.piecelink}>Anika</h2>
              </Link>
              <p>janelle cordero</p>
              <Link to="/issue1/stephane-vereecken">
                <h2 className={archiveStyles.piecelink}>The Garden 22</h2>
              </Link>
              <p>stephane vereecken</p>
          </div>
        </div>
        </div>
    </Layout>
    </>
  )
}

export default Masthead
