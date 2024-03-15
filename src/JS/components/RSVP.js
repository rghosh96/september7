import '../../CSS/RSVP.css';
import { ReactComponent as Border } from '../../assets/Border.svg'

function RSVP() {

  return (
    <div className="RSVP">

    <Border class="top-left border"/>
      <Border class="top-right border"/>
      <Border class="bottom-left border"/>
      <Border class="bottom-right border"/>

      <h1 className="RSVP-title">RSVP</h1>
      <hr className="gold"/>
      <p className="RSVP-subtitle">Coming Soon!</p>

      
     
    </div>
  );
}

export default RSVP;
