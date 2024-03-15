import '../../CSS/Home.css';
import '../CountdownTimer'
import CountdownTimer from '../CountdownTimer';
import { ReactComponent as Border } from '../../assets/Border.svg'

function Home() {
  return (
    <div className="Home">
      
      <div className="title-area">
        <span className="subtitle"> september 7, 2024 <span class="small">&nbsp; ❧ &nbsp;</span> centerton, ar </span>
        <br/>
        <hr/>
        <h1 className="title">Rashi & Gabriel</h1>
        <hr/>
        <CountdownTimer />
        <br/>
        <br/>
        <button class="rsvp">RSVP Coming Soon!</button>
      </div>

      <div className="bg-image"></div>

      <Border class="top-left border"/>
      <Border class="top-right border"/>
      <Border class="bottom-left border"/>
      <Border class="bottom-right border"/>
     
    </div>
  );
}

export default Home;
