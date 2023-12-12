import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../index.css'
import Home from './components/Home';
import Story from './components/Story';
import Information from './components/Information';
import Gallery from './components/Gallery';
import { ReactComponent as Logo } from '../assets/Logo.svg'


function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="nav-column">
          <p className="nav-item"><a href='/'>home</a></p>
          <p className="nav-item"><a href='/story'>story</a></p>
        </div>

        <div class="logo-column">
            <a href="/">
                <Logo className="logo"/>
            </a>
        </div>
        <div className="nav-column">
          <p className="nav-item"><a href='/information'>information</a></p>
          <p className="nav-item"><a href='/gallery'>gallery</a></p>
        </div>
      </div>

      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/story" element={<Story />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/gallery" element={<Gallery />}/>
          {/* <Route component={Error}/> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
