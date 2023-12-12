import '../index.css'
import '../CSS/App.css';
import { ReactComponent as Logo } from '../assets/Logo.svg'

function App() {
  return (
    <div className="App">
      <div className="bg-image">
      
      
      </div>
      
      <div className="navigation">
        <div className="nav-column">
          <p className="nav-item"><a href='/'>our story</a></p>
          <p className="nav-item"><a href='/'>gallery</a></p>
        </div>

        <div class="logo-column">
          <Logo className="logo"/>
        </div>
          
        <div className="nav-column">
          <p className="nav-item"><a href='/'>information</a></p>
          <p className="nav-item"><a href='/'>registry</a></p>
        </div>
      </div>


      <div className="title-area">
        <h1 className="title">Rashi & Gabriel</h1>
        <hr/>
        <h3 className="subtitle">
            september 7, 2024
        </h3>
      </div>
      
      
      
      <div className="subtitle">
      </div>
     
    </div>
  );
}

export default App;
