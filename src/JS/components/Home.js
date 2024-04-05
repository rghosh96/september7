import '../../CSS/Home.css';
import '../CountdownTimer'
import CountdownTimer from '../CountdownTimer';
import { ReactComponent as Border } from '../../assets/WhiteBorder.svg'

function Home() {
  return (
    <div className="Home">
      
      <div className="title-area">
        <span className="subtitle"> september 7, 2024 <span class="small">&nbsp; ❧ &nbsp;</span> centerton, ar </span>
        <br/>
   
        <h1 className="title">Rashi & Gabriel</h1>
    
        <CountdownTimer />
        <br/>
        <br/>
        <a href="/rsvp">
          <button className="rsvp">Click here to RSVP!</button>
        </a>
       
      </div>

      <div className="bg-image"></div>

      <Border className="top-left border"/>
      <Border className="top-right border"/>
      <Border className="bottom-left border"/>
      <Border className="bottom-right border"/>
     
    </div>
  );
}

export default Home;
