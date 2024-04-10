import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../index.css';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Information from './components/Information';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import React, { useState, useEffect } from 'react';
import { ReactComponent as WhiteLogo } from '../assets/WhiteLogo.svg';
import { ReactComponent as GoldLogo } from '../assets/GoldLogo.svg';

// Modal component
const Modal = ({ isOpen, onClose }) => {

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-nav" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <p className="modal-title">Navigation</p>
          <hr/>
          <br/>
          <Link onClick={handleClose} className="modal-link" to='./'>home</Link>
          <Link onClick={handleClose} className="modal-link" to="./rsvp">rsvp</Link>
          <Link onClick={handleClose} className="modal-link" to='./information'>schedule</Link>
          <Link onClick={handleClose} className="modal-link" to='./schedule'>information</Link>
          <Link onClick={handleClose} className="modal-link" to='./registry'>registry</Link>
          <Link onClick={handleClose} className="modal-link" to='./gallery'>faq</Link>
        </div>
      </div>
    </div>
  );
};

function Navigation() {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="navigation">
      <div className="nav-column">
      <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to="./home">home</Link>
        </p>
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to="./rsvp">rsvp</Link>
        </p>
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./information'>schedule</Link>
        </p>
      </div>

      <div className="logo-column">
        <a href="/">
          {location.pathname === '/' ? <WhiteLogo className="logo"/> : <GoldLogo className="logo"/> }
        </a>
      </div>

      <div className="nav-column">
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./schedule'>information</Link>
        </p>
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./registry'>registry</Link>
        </p>
        <p className="nav-item">
          <Link style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} to='./gallery'>faq</Link>
        </p>
      </div>
    </div>
  );
}

// Main component
const NavigationMobile = () => {
  const location = useLocation();
  console.log(location.pathname)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div  className='navigation-mobile'>
       <a className="nav-mobile" href="/">
       {location.pathname === '/' ? <WhiteLogo className="logo-mobile"/> : <GoldLogo className="logo-mobile"/> }
        </a>
      <p className="nav-mobile" style={{ color: location.pathname === '/' ? 'var(--light)' : 'var(--satinsheetgold)' }} onClick={openModal}>Navigation ▾</p>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800); // Adjust the threshold as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      {isMobile ? <NavigationMobile /> : <Navigation />}
        <Routes>
          <Route index element={<Home />} exact/>
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/rsvp" element={<RSVP />}/>
          <Route path="/registry" element={<Registry />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
