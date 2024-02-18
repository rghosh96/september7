import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '../index.css'
import Home from './components/Home';
import Schedule from './components/Schedule';
import Information from './components/Information';
import Gallery from './components/Gallery';
import Landing from './components/Landing';
import { ReactComponent as Logo } from '../assets/Logo.svg'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
          <Route index element={<Home />} exact/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/landing" element={<Landing />}/>
          {/* <Route component={Error}/> */}
        </Routes>

        <div className="navigation">
        <div className="nav-column">
          <p className="nav-item"><Link to="./">home</Link></p>
          <p className="nav-item"><Link to='./information'>information</Link></p>
        </div>

        <div class="logo-column">
            <a href="/">
                <Logo className="logo"/>
            </a>
        </div>
        <div className="nav-column">
          <p className="nav-item"><Link to='./schedule'>schedule</Link></p>
          <p className="nav-item"><Link to='./gallery'>gallery</Link></p>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
