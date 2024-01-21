import '../../CSS/Home.css';
import '../CountdownTimer'
import CountdownTimer from '../CountdownTimer';

function Home() {
  return (
    <div className="Home">
      <div className="bg-image">
      </div>


      <div className="title-area">
        <h3 className="subtitle">
            september 7, 2024 ❤︎ centerton, ar
        </h3>
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
