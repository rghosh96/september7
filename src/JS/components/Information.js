import '../../CSS/Information.css';
import React, { useState, useEffect } from 'react';

function Information() {
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
    <div onScroll={handleScroll} className="Information">
      <div className={`nav-bg ${scroll ? 'scroll' : ''}`}></div>
       <div className="heading-area">
        <div className="bg-image-information">
        <div className="title-area">
            <h1 className="title">Schedule</h1>
            <hr/>
        </div>
        </div>
      </div>

      <div className="content">
          <p className="info">Here we provide the schedule of events for September 7, 2024. Times are in Central Time Zone (CST). Our special day starts at 12pm and goes until 11pm. All our events will be held at one location! For more information on the venue, please visit the Information page. Note: This schedule is subject to change.</p>
          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">12:00pm - 2:00pm</p>
            <p className="event-title">Ceremony</p>
            <p className="event-details">The ceremony will be held outdoors (weather permitting). Because our (Hindu) ceremony is longer than the average ceremony, guests are not expected to stay seated the entire time!</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">1:00pm - 3:00pm</p>
            <p className="event-title">Lunch</p>
            <p className="event-details">Lunch will be served during the ceremony.</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">2:00pm - 5:00pm</p>
            <p className="event-title">Break</p>
            <p className="event-details">During this break, guests are welcome to return to their hotels/Air BnB's to rest, change outfits, etc. Guests may also stay around and mingle, take photos, etc. This break will be held outdoors as well (weather permitting).</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">5:00pm - 6:00pm</p>
            <p className="event-title">Reception Hall Opens</p>
            <p className="event-details">Guests start to seat themselves in the recpetion all. Bar will also open, and snacks will be provided!</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">6:00pm</p>
            <p className="event-title">Reception Begins</p>
            <p className="event-details">Our newly weds will make their entrance :)</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">6:30pm</p>
            <p className="event-title">Reception Dinner</p>
            <p className="event-details">Tables will be released one by one for our buffet-style reception dinner!</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">8:00pm - 10:00pm</p>
            <p className="event-title">Party!</p>
            <p className="event-details">The dance floor will open, and it's party time!!!</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">10:00pm</p>
            <p className="event-title">Send-Off</p>
            <p className="event-details">We will send off our newly weds and wish them luck in their beautiful future life together!</p>
          </div>
      </div>

      
     
    </div>
  );
}

export default Information;
