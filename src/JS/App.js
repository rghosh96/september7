import '../index.css'
import '../CSS/App.css';
import ThemeToggle from './ThemeToggle';
import { ReactComponent as Logo } from '../assets/Logo.svg'

function App() {
  return (
    <div className="App">
      <ThemeToggle/>

      <div className="navigation">
        <p className="nav-item">our story</p>
        <p className="nav-item">gallery</p>
        <Logo className="logo"/>
        <p className="nav-item">information</p>
        <p className="nav-item">registry</p>
      </div>

      <div className="title-area">
        <h1 className="title">Rashi & Gabriel</h1>
        <hr/>
        <h3 className="subtitle">
            September 7, 2024
          </h3>
      </div>
      
      
      
      <div className="subtitle">
          
      </div>
     
    </div>
  );
}

export default App;
