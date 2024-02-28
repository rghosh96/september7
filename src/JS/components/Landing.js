import '../../CSS/Landing.css';
import '../CountdownTimer'
import CountdownTimer from '../CountdownTimer';
import bride from '../../assets/bride.png'
import groom from '../../assets/groom.png'
import couple from '../../assets/couple.png'
import arch from '../../assets/arch.png'

function Landing() {
  return (
    <div className="Landing">
           <div className="bg-image">
      </div>

      <div className='content-area'>

      <div className='illustration-area'>
        <img class="illustration couple"  src={couple}></img>
        <img class="illustration arch"  src={arch}></img>
      </div>
  
      <div className="title-area">
          <h1 className="title">Rashi & Gabriel</h1>
          <hr/>
       
        <span className="subtitle"> september 7, 2024 <span class="small">&nbsp; ❧ &nbsp;</span> centerton, ar </span>
        <br/>
        <CountdownTimer />
      </div>
      
      
      
      <div className="subtitle">
      </div>

      </div>
     
    </div>
  );
}

export default Landing;
