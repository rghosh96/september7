import '../../CSS/Gallery.css';

function Gallery() {
  return (
    <div className="Gallery">

      <div className="heading-area">
        <div className="bg-image-gallery"></div>

        <div className="title-area">
          <h1 className="title">FAQ</h1>
          <hr/>
        </div>
      </div>

      <div className="content">
          <p className="info">Here we answer some common questions we have been getting from friends and family! If you still have questions, please email information@ortghoshwedding.com</p>
          
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

            <p className='answer'>Websites:</p>
            <ul>
                <li><a href="https://www.utsavfashion.com/">Utsav Fasion</a> (*we have ordered from before)</li>
                <li><a href="https://www.manyavar.com/en-us">Manyavar</a> (*we have ordered from before)</li>
                <li><a href="https://www.kalkifashion.com/">Kalki Fashion</a></li>
                <li><a href="https://www.perniaspopupshop.com/">Pernias Popup Shop</a></li>
                <li><a href="https://aashniandco.com/">Aashni and Co</a></li>
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
