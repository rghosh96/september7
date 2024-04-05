import '../../CSS/Information.css';

function Information() {
  return (
    <div className="Information">

      <div className="heading-area">
        <div className="bg-image-information"></div>

        <div className="title-area">
          <h1 className="title">Schedule</h1>
          <hr/>
        </div>
      </div>

      <div className="content">
          <p className="info">Here we provide the schedule of events. Times are in Central Time Zone (CST). Our special day starts at 12pm and goes until 11pm. All our events will be held at one location! For more information on the venue, please visit the Information page. Note: This schedule is subject to change.</p>
          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">12:00pm - 2:00pm</p>
            <p className="event-title">Ceremony</p>
            <p className="event-details">The ceremony will be held outdoors (weather permitting). Because our (Hindu) ceremony is longer than the average ceremony, guests are not expected to stay seated the entire time! Lunch will be provided during the ceremony.</p>
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
            <p className="event-title">Snacks</p>
            <p className="event-details">We will provide some light snacks/refreshments outside (weather permitting).</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">6:00pm - 7:00pm</p>
            <p className="event-title">Reception Hall Opens</p>
            <p className="event-details">Guests may seat themselves in the reception hall. The bar will also open! :)</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">7:00pm - 9:00pm</p>
            <p className="event-title">Reception Dinner</p>
            <p className="event-details">Dinner will be served! The cuisine is Indian food.</p>
          </div>

          <div className="symbol-divider">─ ❧ ─</div>
          <div className="event-container">
            <p className="event-time">9:00pm - 11:00pm</p>
            <p className="event-title">Party!</p>
            <p className="event-details">The dance floor will open, and it's party time!!!</p>
          </div>
      </div>

      
     
    </div>
  );
}

export default Information;
