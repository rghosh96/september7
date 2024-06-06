import '../../CSS/Gallery.css';
import React, { useState, useEffect } from 'react';

function Gallery() {
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
    <div onScroll={handleScroll} className="Gallery">
      <div className={`nav-bg ${scroll ? 'scroll' : ''}`}></div>
       <div className="heading-area">
        <div className="bg-image-gallery">
        <div className="title-area">
            <h1 className="title">FAQ</h1>
            <hr/>
        </div>
        </div>
      </div>

      <div className="content">
          <p className="info">Here we answer some common questions we have been getting from friends and family! If you still have questions, please email information@ortghoshwedding.com</p>
          
          <div className="q-and-a">
            <h3 className="question">Q: When should I RSVP by?</h3>
            <p className="answer">A: Please RSVP by July 31 so we can plan accordingly.</p>
          </div>

          <div className="q-and-a">
            <h3 className="question">Q: If I'm allows to bring a guest, but don't know who yet, can I go ahead and RSVP?</h3>
            <p className="answer">A: We strongly recommend waiting to RSVP until you know who you will bring. This will make planning go more smoothly!</p>
          </div>

          <div className="q-and-a">
            <h3 className="question">Q: What will the weather be like?</h3>
            <p className="answer">A: It will be pretty warm! High temperatures are around 80-90 degrees Farenheight, and low temperatures are in the 60's.</p>
          </div>

          <div className="q-and-a">
            <h3 className="question">Q: What is the dress code/attire?</h3>
            <p className="answer">A: We encourage guests to dress: cocktail, semi-formal/dressy-casual, or festive!</p>
          </div>

          <div className="q-and-a">
            <h3 className="question">Q: Is this an Indian/Hindu-style wedding or American/Western-style wedding?</h3>
            <p className="answer">A: It's kind of a fusion, but mostly Indian/Hindu! The ceremony will be a Hindu ceremony.</p>
          </div>

          <div className="q-and-a">
            <h3 className="question">Q: I've never been to an Indian wedding before. Are any colors off-limits?</h3>
            <p className="answer">A: Nope! Be as colorful as you want. We would prefer no black, but that is not a strict restriction.</p>
          </div>

          <div className="q-and-a">
            <h3 className="question">Q: I'm not Indian but want to wear Indian clothes. Is this appropriate?</h3>
            <p className="answer">A: Of course it is!!! We would love for you to engage in the culture :) We've listed some suggestions & websites below you can order from if you're interested.</p>
            <br/>
            <p className='answer'>Men:</p>
            <ul>
                <li>Simpler:
                    <ul>
                        <li>Kurta</li>
                    </ul>
                </li>
                <li>Fancier:
                    <ul>
                        <li>Indo-Western</li>
                    </ul>
                </li>
                <li>Quite fancy:
                    <ul>
                        <li>Sherwani</li>
                    </ul>
                </li>
            </ul>

            <p className='answer'>Women:</p>
            <ul>
                <li>Crop top-like with a long skirt:
                    <ul>
                        <li>Lehenga</li>
                    </ul>
                </li>
                <li>Long top + pants underneath:
                    <ul>
                        <li>Anarkali</li>
                        <li>Kurta Sets</li>
                        <li>Salwar Kameez</li>
                    </ul>
                </li>
            </ul>

            <p className='answer'>Websites to Rent:</p>
            <ul>
                <li><a className="info-link" href="https://www.almaripret.com/" target="_blank" rel="noopener noreferrer">Almari Pret</a></li>
                <li><a className="info-link" href="https://preserve.rent/" target="_blank" rel="noopener noreferrer">Preserve</a></li>
                <li><a className="info-link" href="https://bollywoodborrowed.com/" target="_blank" rel="noopener noreferrer">Bollywood Borrowed</a></li>
            </ul>

            <p className='answer'>Websites to Buy:</p>
            <ul>
                <li><a className="info-link" href="https://www.utsavfashion.com/" target="_blank" rel="noopener noreferrer">Utsav Fasion</a> (*we have ordered from before)</li>
                <li><a className="info-link" href="https://www.manyavar.com/en-us" target="_blank" rel="noopener noreferrer">Manyavar</a> (*we have ordered from before)</li>
                <li><a className="info-link" href="https://www.kalkifashion.com/" target="_blank" rel="noopener noreferrer">Kalki Fashion</a></li>
                <li><a className="info-link" href="https://www.perniaspopupshop.com/" target="_blank" rel="noopener noreferrer">Pernias Popup Shop</a></li>
                <li><a className="info-link" href="https://www.lashkaraa.com/" target="_blank" rel="noopener noreferrer">Lashkaara</a></li>
                <li><a className="info-link" href="https://www.houseofindya.com/" target="_blank" rel="noopener noreferrer">Indya</a></li>
                <li><a className="info-link" href="https://www.cbazaar.com/" target="_blank" rel="noopener noreferrer">Cbazaar</a></li>
                <li><a className="info-link" href="https://www.mirraw.com/" target="_blank" rel="noopener noreferrer">Mirraw</a></li>
                <li><a className="info-link" href="https://aashniandco.com/" target="_blank" rel="noopener noreferrer">Aashni and Co</a></li>
            </ul>
          </div>
          
          <div className="q-and-a">
            <h3 className="question">Q: Wow this website is so pretty! How did you build it???</h3>
            <p className="answer">A: Rashi built this from scratch because she loves web development!</p>
          </div>

      </div>

      
     
    </div>
  );
}

export default Gallery;
