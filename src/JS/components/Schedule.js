import '../../CSS/Schedule.css';
import React, { useState, useEffect } from 'react';


function Schedule() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = (event) => {
    console.log('User scrolled!', event.target.scrollTop);
    if (event.target.scrollTop > 400){
      setScroll(true)
      console.log("SET TO TRUE")
    } else {
      setScroll(false)
    }
   
  };

  return (
    <div onScroll={handleScroll} className="Schedule">

      <div className={`nav-bg ${scroll ? 'scroll' : ''}`}></div>
       <div className="heading-area">
        <div className="bg-image-schedule">
        <div className="title-area">
            <h1 className="title">Information</h1>
            <hr/>
        </div>
        </div>
      </div>

      <div className="content">
          <p className="info">Here we'll provide venue details, travel information, things to do around the area, and more!</p>
          <div className="symbol-divider">─ ❧ ─</div>
          <p className="info-section-title">Venue</p>
          <br/>
          <p className="info-label">Venue Name</p>
          <p className="info-details">Kindred North</p>
          <br/>
          <p className="info-label">Address</p>
          <p className="info-details">10889 Arkansas 72, Centerton, AR, 72719, United States</p>

          <div className="symbol-divider">─ ❧ ─</div>
          <p className="info-section-title">Travel</p>
          <br/>
          <p className="info-label">Airport</p>
          <p className="info-details">Northwest Arkansas National Airport (XNA)</p>

          <div className="symbol-divider">─ ❧ ─</div>
          <p className="info-section-title">Accomodations</p>
          <br/>
          <p className="info-details">We recommend looking into AirBnB's in the area! Here's some suggestions, information, and initial search links to help you get started.</p>
          <p className="info-details"><strong>*Note:</strong> We are currently in the process of blocking out hotel rooms, so check back regularly for updates!</p>
          <br/>
          <p className="info-label location">Centerton, AR</p>
          <p className="info-details location-details">If you’d like something closer to the venue, there are beautiful, relaxing homes in Centerton, just a few minutes away. </p>
          <a className="info-link" href="https://www.airbnb.com/s/Bentonville--Arkansas--United-States/homes?refinement_paths%5B%5D=%2Fhomes&checkin=2024-09-04&checkout=2024-09-08&date_picker_type=calendar&adults=5&search_type=user_map_move&tab_id=home_tab&query=Bentonville%2C%20AR&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-04-01&monthly_length=3&monthly_end_date=2024-07-01&price_filter_input_type=0&price_filter_num_nights=4&channel=EXPLORE&zoom_level=16.90333969729103&place_id=ChIJSUnWTgAQyYcRAr8lJMiMgNo&source=structured_search_input_header&ne_lat=36.3649348438057&ne_lng=-94.26215423157691&sw_lat=36.35427329674294&sw_lng=-94.27440664133087&zoom=16.90333969729103&search_by_map=true">Click here to search for AirBnB's in Centerton!</a>
          <br/>
          <br/>
          <p className="info-label location">Bentonville, AR</p>
          <p className="info-details location-details">AirBnBs in Bentonville are ~10 minutes from the wedding venue. Stay near the eccentric Crystal Bridges Museum of American Art and grab a drink at the Onyx Coffee Lab before the ceremony!</p>
          <a className="info-link" href="https://www.airbnb.com/s/Bentonville--Arkansas--United-States/homes?refinement_paths%5B%5D=%2Fhomes&checkin=2024-09-04&checkout=2024-09-08&date_picker_type=calendar&adults=5&search_type=user_map_move&tab_id=home_tab&query=Bentonville%2C%20AR&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-04-01&monthly_length=3&monthly_end_date=2024-07-01&price_filter_input_type=0&price_filter_num_nights=4&channel=EXPLORE&zoom_level=14.798339697291032&place_id=ChIJSUnWTgAQyYcRAr8lJMiMgNo&source=structured_search_input_header&ne_lat=36.39409218991382&ne_lng=-94.18686609973156&sw_lat=36.34823326871141&sw_lng=-94.23957569157108&zoom=14.798339697291032&search_by_map=true">Click here to search for AirBnB's in Bentonville!</a>
          <br/>
          <br/>
          <p className="info-label location">Bella Vista, AR</p>
          <p className="info-details location-details">AirBnBs in Bella Vista are ~15 minutes from the wedding venue. Stay in a beautiful lake home or a cozy cabin nestled alongside many bike trails!</p>
          <a className="info-link" href="https://www.airbnb.com/s/Bella-Vista--AR/homes?place_id=ChIJZ0n6p3ADyYcRUzXYull8pkk&refinement_paths%5B%5D=%2Fhomes&checkin=2024-09-04&checkout=2024-09-08&date_picker_type=calendar&adults=5&children=0&infants=0&pets=0&search_type=AUTOSUGGEST">Click here to search for AirBnB's in Bella Vista!</a>
        
          <div className="symbol-divider">─ ❧ ─</div>
          <p className="info-section-title">Things to Do</p>
          <br/>
          <p className="info-details">Centerton, AR is located in Northwest Arkansas (NWA), which comprised of several cities nestled in the Ozark Mountains! There's plenty of outdoor activities (hiking, biking, lakes, etc), cultural spots (museums), and great food! Hearts (♥) indicate some of Rashi's favorite spots :)</p>
          <br/>
          <p className="info-label location">Resources</p>
          <ul>
            <li><a className="info-link" href="https://www.discoverbellavistaar.com/">Click here to learn about things to do in Bella Vista!</a></li>
            <li><a className="info-link" href="https://www.visitbentonville.com/">Click here to learn about things to do in Bentonville!</a></li>
          </ul>
          <br/>
          <p className="info-label location">Culture</p>
          <ul>
            <li>Crystal Bridges Museum of American Art (Bentonville, AR) ♥</li>
            <li>Museum of Native American History (Bentonville, AR)</li>
            <li>Walmart Museum (Bentonville, AR)</li>
            <li>The Momentary (Bentonville, AR)</li>
            <li>Clinton House Museum (Fayetteville, AR)</li>
            <li>Botanical Garden of the Ozarks (Fayetteville, AR)</li>
          </ul>
          <br/>
          <p className="info-label location">Food & Drinks</p>
          <ul>
            <li>Onyx Coffee Lab (Bentonville, Fayetteville, & Rogers, AR) ♥</li>
            <li>Preacher's Son (Bentonville, AR) ♥</li>
            <li>The Hive (Bentonville, AR) ♥</li>
            <li>Crepes Paulette (Bentonville, AR) ♥</li>
            <li>Tangiers (Fayetteville, AR) ♥</li>
            <li>Hammontrees (Fayetteville, AR) ♥</li>
          </ul>
          <br/>
          <p className="info-label location">Outdoors</p>
          <ul>
            <li>Devil's Den State Park ♥</li>
            <li>Whitaker Point (also known as Hawksbill Craig) ♥</li>
            <li>Hobbs State Park</li>
            <li>Buffalo National River</li>
            <li>Kessler Mountain Regional Park</li>
          </ul>
          <br/>

      </div>

      
     
    </div>
  );
}

export default Schedule;
