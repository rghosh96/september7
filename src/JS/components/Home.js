import '../../CSS/Home.css';
import '../CountdownTimer'
import CountdownTimer from '../CountdownTimer';

function Home() {
  return (
    <div className="Home">
      <div className="bg-image">
      </div>


      <div className="title-area">
        <span className="subtitle"> september 7, 2024 <span class="small">&nbsp; ❧ &nbsp;</span> centerton, ar </span>
        <br/>
        <hr/>
        <h1 className="title">Rashi & Gabriel</h1>
        <hr/>
        <CountdownTimer />
      </div>
      
      
      
      <div className="subtitle">
      </div>
     
    </div>
  );
}

export default Home;
