import React from "react"

import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.scss"
import Head from "../components/head"
import Nav from "../components/nav"
import Subheader from "../components/subHeader"
import MobileNav from "../components/mobileNav"
import issueStyles from "./issues.module.scss"
import { Link } from "gatsby"

const Masthead = () => {
  return (
    <>
    <MobileNav />
    <Nav />
    <Subheader title="dish cabinet" />
    <Layout>
      <Head title="archive" />
      
      <h1 className={issueStyles.heading}>collection 5</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <Link to="/issue5/the-anxiety-index">
              <h2>The Anxiety Index</h2>
              </Link>
              <p>howie good</p>
              
              <Link to="/issue5/the-day-before-yesterday">
              <h2>The Day Before Yesterday</h2>
              </Link>
              <p>howie good</p>

              <Link to="/issue5/swirling">
              <h2>{`[Swirling]`}</h2>
              </Link>
              <p>jeffrey letterly</p>

            </div>


            <div className={issueStyles.bottomMargin}>
            
              <Link to="/issue5/spring-meditation">
              <h2>spring meditation</h2>
              </Link>
              <p>nathan lee</p>
                         
              <Link to="/issue5/mom-and-dad">
              <h2>Mom and Dad</h2>
              </Link>
              <p>ashley kim</p>

              <Link to="/issue5/the-anxious-girlfriends-unruly-skeletons">
              <h2>The Anxious Girlfriend's Unruly Skeletons</h2>
              </Link>
              <p>julieanne larick</p>

            </div>
          </div>

          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              
              <Link to="/issue5/skilnadarotti">
              <h2>skilnadarótti</h2>
              </Link>
              <p>theresa kohlbeck jakobsen</p>

            </div>
            <div>

              <Link to="/issue5/words-get-in-the-way">
              <h2>Words Get In The Way</h2>
              </Link>
              <p>james diaz</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}> collection 4 </h1>
        <div className={layoutStyles.mission}>
            <h1 className={issueStyles.heading}>poetry</h1>
            <div className={issueStyles.parent}>
              <div className={issueStyles.bottomMargin}>
               
                <Link to="/issue4/to-term">
                <h2>to term</h2>
                </Link>
                <p>elliot lee</p>

                <Link to="/issue4/to-my-future-nephew">
                <h2>To My Future Nephew II</h2>
                </Link>
                <p>daniel boyko</p>
               
                <Link to="/issue4/a-page-from-her-book">
                <h2>a page from her book</h2>
                </Link>
                <p>anna feng</p>
              </div>


              <div className={issueStyles.bottomMargin}>

                <Link to="/issue4/32lemons">
                <h2>32 lemons</h2>
                </Link>
                <p>matt hsu</p>
              
                <Link to="/issue4/teens-on-tiktok">
                <h2>teens on tiktok think i should set boundaries but i am</h2>
                </Link>
                <p>courtney felle</p>

                <Link to="/issue4/the-world-is-ending-and-i-am-buying-groceries">
                <h2>The World Is Ending And I Am Buying Groceries</h2>
                </Link>
                <p>leela raj-sankar</p>

              </div>
            </div>

            <h1 className={issueStyles.heading}>prose</h1>
            <div className={issueStyles.parent}>
              <div className={issueStyles.bottomMargin}>
               
                <Link to="/issue4/lawn-chair-larry">
                <h2>Lawn Chair Larry</h2>
                </Link>
                <p>will musgrove</p>
               
                <Link to="/issue4/absurdum">
                <h2>Absurdum</h2>
                </Link>
                <p>nora sun</p>

              </div>
              <div>

                
                <Link to="/issue4/the-chocolatier">
                <h2>The Chocolatier</h2>
                </Link>
                <p>ashley gilland</p>

                
                <Link to="/issue4/henry-wilson">
                <h2>Henry Wilson and the Center of the Sun</h2>
                </Link>
                <p>E.J. Nash</p>

              </div>
            </div>
          </div>
          <br></br>
          <br></br>
      <h1 className={issueStyles.heading}>collection 3</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              <Link to="/issue3/frankievalli">
              <h2>Frankie Valli’s in love with you</h2>
              </Link>
              <p>sunny vuong</p>
             
              <Link to="/issue3/sonnetforbirdsofparadise">
                <h2>sonnet for birds of paradise</h2>
              </Link>
              <p>sal kang</p>
            
              <Link to="/issue3/waterprayers">
                <h2>Water Prayers</h2>
              </Link>
              <p>josephine wu</p>

              <Link to="/issue3/alternateuniverse">
                <h2>IN AN ALTERNATE UNIVERSE WE EAT CAKE</h2>
              </Link>
              <p>ashley hajimirsadeghi</p>

            </div>


            <div className={issueStyles.bottomMargin}>

            <Link to="/issue3/bidingtime">
              <h2>biding time until the spring arrives</h2>
            </Link>
            <p>grace joylynn anderson</p>

              <Link to="/issue3/theorange">
                <h2>The Orange Has Body Image Issues</h2>
              </Link>
              <p>sal kang</p>

              <Link to="/issue3/theleavesaregreen">
                <h2>And the leaves are green</h2>
              </Link>
              <p>ds maolalai</p>
          
            
              <Link to="/issue3/besweet">
                <h2>Be Sweet</h2>
              </Link>
              <p>ashley hajimirsadeghii</p>

            </div>
          </div>

          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>

              
              <Link to="/issue3/tobeclear">
                <h2>To Be Clear: A Femme Fatale (Gender-Neutral!) Guides You Through A Noir Film in Bollywood (First Of Its Kind! Tickets Open Now!)</h2>
              </Link>
              <p>salonee verma</p>

            </div>
            <div>

              <Link to="/issue3/hirasdaycare">
                <h2>Mrs. Hira's Daycare</h2>
              </Link>
              <p>dedeepya guthikonda</p>

            </div>
          </div>

          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue3/darcymariemelton">
                <h2>Kingfisher</h2>
              </Link>
              <p>darcy marie melton</p>

            </div>
            <div>
            <Link to="/issue3/melodyserra">
                <h2>In the company of trees</h2>
              </Link>
              <p>melody serra</p>

          </div>
        </div>
        </div>
      <br></br>
      <br></br>
      <h1 className={issueStyles.heading}>collection 2</h1>
      <div className={layoutStyles.mission}>
        <h1 className={issueStyles.heading}>poetry</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>
           
            <Link to="/issue2/ode-to-desperate-housewives">
              <h2>Ode to Desperate Housewives</h2>
            </Link>
            <p>charlie blodnieks</p>
            
            <Link to="/issue2/mac-miller-georgia-o-keeffe-collaboration-track">
              <h2>Mac Miller &amp; Georgia O’Keeffe COLLABORATION TRACK</h2>
            </Link>
            <p>alex dang</p>
            
            <Link to="/issue2/constructed-grief">
              <h2>Constructed Grief</h2>
            </Link>
            <p>kavi kshiraj</p>

          </div>
          <div className={issueStyles.bottomMargin}>

          
            <Link to="/issue2/beowulf">
              <h2>beowulf</h2>
            </Link>
            <p>norah brady</p>

            <Link to="/issue2/pith">
              <h2>Pith</h2>
            </Link>
            <p>rhiannon mcgavin</p>
            
            <Link to="/issue2/empty">
              <h2>Empty</h2>
            </Link>
            <p>rhiannon mcgavin</p>

            <Link to="/issue2/ars-poetica-open-composition">
              <h2>Ars Poetica: Open Composition</h2>
            </Link>
            <p>rl wheeler</p>

          </div>
        </div>
        <h1 className={issueStyles.heading}>prose</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>

            
            <Link to="/issue2/sunshine-on-marchmont">
              <h2>Sunshine on Marchmont</h2>
            </Link>
            <p>martin greenacre</p>

            <Link to="/issue2/typhoid-mary">
              <h2>Typhoid Mary Would Like to Address You From Her Lonely Bungalow on North Brother Island, Where She Was Imprisoned During the Years 1907-1910 and Again from 1915 Until Her Death in 1938</h2>
            </Link>
            <p>blake chernin</p>

          </div>
          <div>
            <h2>norah brady</h2>
            <Link to="/issue2/time-bomb">
              <p>Time Bomb</p>
            </Link>

          </div>
        </div>
        <h1 className={issueStyles.heading}>play</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>
            <h2>julia beecher</h2>
            <Link to="/issue2/end-of-days">
              <p>End of Days</p>
            </Link>
          </div>
        </div>
        <h1 className={issueStyles.heading}>art</h1>
        <div className={issueStyles.parent}>
          <div>
            <Link to="/issue2/fabrice-poussin">
              <h2>fabrice poussin</h2>
              <p>Yet Another Story</p>
              <p>Modern Couple</p>
              <p>Illusion</p>
            </Link>
            <Link to="/issue2/carly-chan">
              <h2>carly chan</h2>
              <p>Trichotomy</p>
            </Link>
          </div>
          <div>
          <Link to="/issue2/adina-guo">
              <h2>adina guo</h2>
              <p>Wai Gong</p>
            </Link>
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <h1 className={issueStyles.heading}>collection 1</h1>
      <div className={layoutStyles.mission}>
          <h1 className={issueStyles.heading}>poetry</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>heath wooten</h2>
              <Link to="/issue1/summer-heroes">
                <p>Summer Heroes</p>
              </Link>
              <h2>alina stefanescu</h2>
              <Link to="/issue1/the-krakow-nude">
                <p>The Krakow Nude</p>
              </Link>
              <Link to="/issue1/red-chair-with-potential">
                <p>Red Chair With Potential</p>
              </Link>
              <h2>darnell "deesoul" carson</h2>
              <Link to="/issue1/forgive-me-if-i-say">
                <p>Forgive Me If I Say</p>
              </Link>
              <h2>jonny teklit</h2>
              <Link to="/issue1/notes-on-anger">
                <p>Notes on Anger</p>
              </Link>
              <Link to="/issue1/one-night">
                <p>
                  One Night, When the Dread is Hard to Shake, I Ask Whoever Is
                  Up There
                </p>
              </Link>
            </div>
            <div className={issueStyles.bottomMargin}>
              <h2>gaia rajan</h2>
              <Link to="/issue1/poem-inside-a-locker-room">
                <p>Poem Inside a Locker Room</p>
              </Link>
              <Link to="/issue1/prayer-for-doomed-girls">
                <p>Prayer for Doomed Girls</p>
              </Link>
              <h2>poppy rosales</h2>
              <Link to="/issue1/the-age-old-struggle-of-being-a-woman-in-love-that-still-plagues-the-21st-century">
                <p>
                  the age-old struggle of being a woman in love that still
                  plagues the 21st century
                </p>
              </Link>
              <h2>taylor garrison</h2>
              <Link to="/issue1/joan-of-arc-invented-the-bob">
                <p>Joan of Arc Invented the Bob</p>
              </Link>
              <h2>william doreski</h2>
              <Link to="/issue1/fustian">
                <p>Fustian</p>
              </Link>
              <Link to="/issue1/strangers">
                <p>Strangers</p>
              </Link>
              <Link to="/issue1/cultures-vultures-bereft">
                <p>Cultures Vultures Bereft</p>
              </Link>
            </div>
          </div>
          <h1 className={issueStyles.heading}>prose</h1>
          <div className={issueStyles.parent}>
            <div className={issueStyles.bottomMargin}>
              <h2>katie grierson</h2>
              <Link to="/issue1/good-daughter">
                <p>Good Daughter</p>
              </Link>
              <h2>darnell "deesoul" carson</h2>
              <Link to="/issue1/dog-days">
                <p>Dog Days</p>
              </Link>
            </div>
            <div>
              <h2>youngseo lee</h2>
              <Link to="/issue1/autopsy-but-flourished-with-prayer">
                <p>autopsy, but flourished with prayer</p>
              </Link>
              <h2>liz wride</h2>
              <Link to="/issue1/have-you-seen-this-bird">
                <p>Have you seen this bird?</p>
              </Link>
            </div>
          </div>
          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue1/karl-zuehlke">
                <h2>karl zuehlke</h2>
                <p>Earth</p>
                <p>Forest</p>
              </Link>
              <Link to="/issue1/vivi-niya-gao">
                <h2>vivi niya gao</h2>
                <p>The City of Individuals</p>
                <p>Expressions of Still Life I</p>
              </Link>
              <Link to="/issue1/ashley-cai">
                <h2>ashley cai</h2>
                <p>Please Remain Calm</p>
              </Link>
            </div>
            <div>
            <Link to="/issue1/janelle-cordero">
                <h2>janelle cordero</h2>
                <p>Bell</p>
                <p>Mina</p>
                <p>Anika</p>
              </Link>
              <Link to="/issue1/stephane-vereecken">
                <h2>stephane vereecken</h2>
                <p>The Garden 22</p>
              </Link>
          </div>
        </div>
        </div>
    </Layout>
    </>
  )
}

export default Masthead
