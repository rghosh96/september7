import '../../CSS/Registry.css';
import React, { useState, useEffect } from 'react';

function Registry() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = (event) => {
    console.log('User scrolled!', event.target.scrollTop);
    if (event.target.scrollTop > 400){
      setScroll(true)
      console.log("SET TO TRUE")
    } else {
      setScroll(false)
    }
   
  };

  return (
    <div onScroll={handleScroll} className="Information">
      <div className={`nav-bg ${scroll ? 'scroll' : ''}`}></div>
       <div className="heading-area">
        <div className="bg-image-registry">
        <div className="title-area">
            <h1 className="title">Registry</h1>
            <hr/>
        </div>
        </div>
      </div>

      <div className="content">
        <p className="info">We have multiple registries, but to make it easy for you, we are hosting them all in one place: on Zola! Please note our registry is still a work in progress. Click the link below to open our registry in a new tab.</p>
        <a href="https://www.zola.com/registry/rashiandgabriel" target="_blank" rel="noopener noreferrer">
            <button className="registry-btn">Visit Our Registry</button>
        </a>
      </div>

      
     
    </div>
  );
}

export default Registry;
