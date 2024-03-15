import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../index.css';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Information from './components/Information';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import { ReactComponent as Logo } from '../assets/Logo.svg';

function Navigation() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="navigation">
      <div className="nav-column">
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to="./rsvp">rsvp</Link>
        </p>
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./information'>ceremony & reception</Link>
        </p>
      </div>

      <div className="logo-column">
        <a href="/">
          <Logo className="logo"/>
        </a>
      </div>

      <div className="nav-column">
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./schedule'>travel information</Link>
        </p>
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./gallery'>faq</Link>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index element={<Home />} exact/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/rsvp" element={<RSVP />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
