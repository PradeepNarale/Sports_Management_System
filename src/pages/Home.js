import React from 'react'
import Carousel from 'fade-carousel'
import riverRafting from "../images/riverRafting.jpg"
import cycle from "../images/cycle.jpg"
import footballVertical from "../images/footballVertical.jpg"
import golfSquare from "../images/golfSqure.jpg"
import powerlifting from "../images/powerLifting.jpg"
import ig from "../images/instagram.png"
import fb from "../images/facebook.png"
import twitter from "../images/twitter.png"
import sponsor from "../images/sponsor.jpg"
import yt from "../images/youtube.png"
import "./css/Navbar.css"
function Home() {


  return (
    <div className='Home'>
      <div className='navbar'>
        <div className='leftLink'>
          <ul className='links'>
            <li>Experience</li>
            <li>Schedule</li>
            <li>Information</li>
          </ul>
        </div>
        <div className='rightLink'>
          <ul className='links'>
            <li>Music</li>
            <li>sponsor Stories</li>
            <li><a href="/register" className='redirectLink'>Register</a></li>
          </ul>
        </div>
      </div>
      <div className='carousel'>
        <Carousel divStyle={{ height: "100vh", width: "100%", backgroundColor: '#f2f2f2' }} delay={6000} mode={"fade"} >
          <div style={{ height: '100%', width: 'auto', justifySelf: 'center' }}>
            <img
              src={riverRafting}
              className="carouselImg"
              alt="carousel images"
            />
          </div>
          <div style={{ height: '100%', width: 'auto', justifySelf: 'center' }}>
            <img
              src={cycle}
              className="carouselImg"
              alt="carousel images"
            />
          </div>
        </Carousel>
      </div>
      <div className='blueBg'>
        <div className='events'>
          <div className='floatingTitle'>
            <div className='titleOfEvent'>
              <p>A Nation Wide Organized Events</p>
            </div>
            <div className='titleOfEvent'>
              <p>Sports and Adventure Club</p>
            </div>
            <p className='dates'>Bengalure, India | MAY 20-22</p>
          </div>
        </div>
      </div>
      <div className='sports'>
        <div className='leftSports'>
          <h6 className='subHeader'>A WEEKEND TO</h6>
          <h3 className='header'>ROCK THE OUTDOORS</h3>
          <p className="datesLeft">MAY 20-22</p>
          <h6 className='subTitle'>Register before the April 16 price hike!</h6>
          <p className='paraText'>
            From yoga classes to trail runs, group art installations to mountain biking, sustainability projects to music, fishing and paddling on the James, and more…it’s all happening right here in Richmond!<br /><br />Highlighted by the James River, surrounding trail network, and numerous parks, we are lucky to have so many options for outdoor adventure! Let’s #RockTheOutdoors and discover new ways to experience Richmond’s amazing outdoor scene.
          </p><br />
          <a href='#' className='viewMore'>Register for event</a>
        </div>
        <div className='rightFloat'>
          <div className='leftSideImages'>
            <img src={golfSquare} className="golfSquare" alt="Football" />
            <img src={powerlifting} className="powerLiftingSquare" alt="Football" />
          </div>
          <img src={footballVertical} className="verticalFootball" alt="Football" />
        </div>
      </div>
      <div className='eventInformation'>
        <h1 className='leftHeading'>
          ROCK<br />
          THE
          OUTDOORS
        </h1>
        <div className='rightSideEvents'>
          <div className='card'>
            <div className='EventDesc'>
              <p className='eventTitle'>In-Person Event</p>
              <p className='aboutEvent'>
                No matter your ability, there’s an in-person event for you to take part in and challenge yourself. Register for one today!
              </p>
              <p className='viewMoreLink'>View All Events > ></p>
            </div>
            <img className='eventImg' src={golfSquare} alt="EventImage" />
          </div>
          <div className='card'>
            <div className='EventDesc'>
              <p className='eventTitle'>In-Person Event</p>
              <p className='aboutEvent'>
                No matter your ability, there’s an in-person event for you to take part in and challenge yourself. Register for one today!
              </p>
              <p className='viewMoreLink'>View All Events > ></p>
            </div>
            <img className='eventImg' src={golfSquare} alt="EventImage" />
          </div>
        </div>
      </div>
      <div className='Interest'>
        <div className='leftInterest'>
          <h1 className='headingInterest'>
            FIND<br />
            YOUR<br />
            INTERESTS
          </h1>
          <div className='gridContainer'>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
            <div className='gridItem'>
              <div className='leftSideBorder'></div>
              <div className='aboutSports'>
                <p className='sportsName'>
                  Adventure Race
                </p>
                <p className='viewDetails'>View Details > ></p>
              </div>
            </div>
          </div>
        </div>
        <img src={footballVertical} className="interestRightImage" alt="Interst" />
      </div>
      <div className='eventDesc'>
      <div className='leftAboutEvent'>
        <p className='headingAbout'>Richmond<br/>Virginia</p>
        <p className='aboutText'>If you haven’t been to Richmond yet, you’re missing out on one of the best little-big towns the South has to offer! The capital of Virginia boasts award-winning restaurants, festivals for all interests, rich history, an art scene on the cutting edge, over 30 craft breweries, and all the outside adventure you want…come see what all the fuss is about!<br/><br/>Dominion Energy Riverrock offers an amazing preview of all the things that make our city such a fun place to call home. Come experience life along the James River, and see why we’re not just a town, we’re a destination! Where else can you explore an up-and-coming city, and take on class III & IV rapids in the same day?!</p>
      </div>
      <img src={riverRafting} alt="EventAbout" className='imgEventDesc'/>
      </div>
      <div className='sponsors'>
        <div className='aboutSponsors'>
          <p className='headingSponsors'>Our<br/>Sponsors</p>
          <p className='aboutSponsor'>We’re lucky to work with some of the best outdoor brands in the business. Without these sponsors, their products, and company missions, Dominion Energy Riverrock would not be possible.</p>
          <br/><br/><p className='learnMore'>Learn More > ></p>
        </div>
        <img src={cycle} alt='Sponsors' className='sponsorsImg'/>
      </div>
      <div className='footer'>
        <div className='footerOptions'>
          <li>Shop</li>
          <li>Contact</li>
          <li>Sponsors</li>
          <li>Media</li>
        </div>
        <hr className='footerHr'/>
        <div className='footerSponsors'>
          <p className='anEventOf'>An Event Of</p>
          <img src={sponsor} className="sponsor"/>
          <img src={sponsor} className="sponsor"/>
          <div className='socialIcons'>
            <img src={ig} alt="socialIcon" className='socialIcon ig'/>
            <img src={fb} alt="socialIcon" className='socialIcon fb'/>
            <img src={twitter} alt="socialIcon" className='socialIcon twi'/>
            <img src={yt} alt="socialIcon" className='socialIcon yt'/>
          </div>
        </div>
        <hr className='footerHr'/>
        <div className='copyright'>
          <p className='allRightReserverd'>© 2022 DOMINION ENERGY RIVERROCK. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  )
}

export default Home