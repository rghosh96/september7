import '../../CSS/Landing.css';
import '../CountdownTimer'
import CountdownTimer from '../CountdownTimer';
import bride from '../../assets/bride.png'
import groom from '../../assets/groom.png'

function Landing() {
  return (
    <div className="Landing">


      <div className="title-area">
        <div className="image-area">
            <img class="bridegroom"  src={bride}></img>
            <div className="title-area">
            <h1 className="title">Rashi & Gabriel</h1>
            <hr/>
            </div>
            <img class="bridegroom"  src={groom}></img>
        </div>
       
        <span className="subtitle"> september 7, 2024 <span class="small">&nbsp; ❧ &nbsp;</span> centerton, ar </span>
        <br/>
        <CountdownTimer />
      </div>
      
      
      
      <div className="subtitle">
      </div>
     
    </div>
  );
}

export default Landing;
