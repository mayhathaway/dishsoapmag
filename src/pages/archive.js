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
               
                <Link to="/issue4/teens-on-tiktok">
                <h2>teens on tiktok think i should set boundaries but i am</h2>
                </Link>
                <p>courtney felle</p>
              </div>


              <div className={issueStyles.bottomMargin}>

                <Link to="/issue4/32lemons">
                <h2>32 lemons</h2>
                </Link>
                <p>matt hsu</p>
                <Link to="/issue4/a-page-from-her-book">
                <h2>a page from her book</h2>
                </Link>
                <p>anna feng</p>

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
            
            <Link to="/issue2/constructed-grief">
              <h2>Constructed Grief</h2>
            </Link>
            <p>kavi kshiraj</p>

            <Link to="/issue2/mac-miller-georgia-o-keeffe-collaboration-track">
              <h2>Mac Miller &amp; Georgia O’Keeffe COLLABORATION TRACK</h2>
            </Link>
            <p>alex dang</p>

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
            
            <Link to="/issue2/time-bomb">
              <h2>Time Bomb</h2>
            </Link>
            <p>norah brady</p>

          </div>
        </div>
        <h1 className={issueStyles.heading}>play</h1>
        <div className={issueStyles.parent}>
          <div className={issueStyles.bottomMargin}>
            <Link to="/issue2/end-of-days">
              <h2>End of Days</h2>
            </Link>
            <p>julia beecher</p>
          </div>
        </div>
        <h1 className={issueStyles.heading}>art</h1>
        <div className={issueStyles.parent}>
          <div>
            <Link to="/issue2/fabrice-poussin">
              <h2>Yet Another Story</h2>
              </Link>
            <p>fabrice poussin</p>
            
            <Link to="/issue2/fabrice-poussin">
            <h2>Modern Couple</h2>
              </Link>
            <p>fabrice poussin</p>

            <Link to="/issue2/fabrice-poussin">
            <h2>Illusion</h2>
              </Link>
            <p>fabrice poussin</p>
            

          </div>
          <div>
          <Link to="/issue2/carly-chan">
              <h2>Trichotomy</h2>
            </Link>
            <p>carly chan</p>

          <Link to="/issue2/adina-guo">
              <h2>Wai Gong</h2>
            </Link>
            <p>adina guo</p>
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
              <Link to="/issue1/summer-heroes">
                <h2>Summer Heroes</h2>
              </Link>
              <p>heath wooten</p>

              <Link to="/issue1/the-krakow-nude">
                <h2>The Krakow Nude</h2>
              </Link>
              <p>alina stefanescu</p>

              <Link to="/issue1/red-chair-with-potential">
                <h2>Red Chair With Potential</h2>
              </Link>
              <p>alina stefanescu</p>

              <Link to="/issue1/forgive-me-if-i-say">
                <h2>Forgive Me If I Say</h2>
              </Link>
              <p>darnell "deesoul" carson</p>

              <Link to="/issue1/notes-on-anger">
                <h2>Notes on Anger</h2>
              </Link>
              <p>jonny teklit</p>

              <Link to="/issue1/one-night">
                <h2>One Night, When the Dread is Hard to Shake, I Ask Whoever Is Up There</h2>
              </Link>
              <p>jonny teklit</p>

            </div>
            <div className={issueStyles.bottomMargin}>
              
              <Link to="/issue1/poem-inside-a-locker-room">
                <h2>Poem Inside a Locker Room</h2>
              </Link>
              <p>gaia rajan</p>

              <Link to="/issue1/prayer-for-doomed-girls">
                <h2>Prayer for Doomed Girls</h2>
              </Link>
              <p>gaia rajan</p>

              <Link to="/issue1/joan-of-arc-invented-the-bob">
                <h2>Joan of Arc Invented the Bob</h2>
              </Link>
              <p>taylor garrison</p>

              <Link to="/issue1/fustian">
                <h2>Fustian</h2>
              </Link>
              <p>william doreski</p>

              <Link to="/issue1/strangers">
                <h2>Strangers</h2>
              </Link>
              <p>william doreski</p>

              <Link to="/issue1/cultures-vultures-bereft">
                <h2>Cultures Vultures Bereft</h2>
              </Link>
              <p>william doreski</p>

              <Link to="/issue1/the-age-old-struggle-of-being-a-woman-in-love-that-still-plagues-the-21st-century">
                <h2>
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
                <h2>Good Daughter</h2>
              </Link>
              <p>katie grierson</p>

              
              <Link to="/issue1/dog-days">
                <h2>Dog Days</h2>
              </Link>
              <p>darnell "deesoul" carson</p>
            </div>
            <div>

              <Link to="/issue1/autopsy-but-flourished-with-prayer">
                <h2>autopsy, but flourished with prayer</h2>
              </Link>
              <p>youngseo lee</p>

              
              <Link to="/issue1/have-you-seen-this-bird">
                <h2>Have you seen this bird?</h2>
              </Link>
              <p>liz wride</p>
            </div>
          </div>
          <h1 className={issueStyles.heading}>art</h1>
          <div className={issueStyles.parent}>
            <div>
              <Link to="/issue1/karl-zuehlke">
                <h2>Earth</h2>
              </Link>
              <p>karl zuehlke</p>
              <Link to="/issue1/karl-zuehlke">
                <h2>Forest</h2>
              </Link>
              <p>karl zuehlke</p>

              <Link to="/issue1/vivi-niya-gao">
                <h2>Expressions of Still Life I</h2>
              </Link>
              <p>vivi niya gao</p>
              <Link to="/issue1/vivi-niya-gao">
                <h2>The City of Individuals</h2>
              </Link>
              <p>vivi niya gao</p>

              <Link to="/issue1/ashley-cai">
                <h2>Please Remain Calm</h2>
              </Link>
              <p>ashley cai</p>
            </div>
            <div>
            <Link to="/issue1/janelle-cordero">
                <h2>Bell</h2>
              </Link>
              <p>janelle cordero</p>
              <Link to="/issue1/janelle-cordero">
                <h2>Mina</h2>
              </Link>
              <p>janelle cordero</p>
              <Link to="/issue1/janelle-cordero">
                <h2>Anika</h2>
              </Link>
              <p>janelle cordero</p>
              <Link to="/issue1/stephane-vereecken">
                <h2>The Garden 22</h2>
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
