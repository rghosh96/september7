import '../../CSS/Information.css';

function Information() {
  return (
    <div className="Information">

      <div className="heading-area">
        <div className="bg-image-information"></div>

        <div className="title-area">
          <h1 className="title">Information</h1>
          <hr/>
        </div>
      </div>

      <div className="content">

        <div className='line-container'>
        <h2 className="line-text">General Information</h2>
        </div>
        <div className="details">
          <p className="label"><b>Date: &nbsp;</b></p>
          <p className="text">September 7, 2024</p>
        </div>

        <div className="details">
          <p className="label"><b>Time: &nbsp;</b></p>
          <p className="text">TBD (but most likely 12pm or 1pm CST)</p>
        </div>

        <div className="details">
          <p className="label"><b>Venue: &nbsp;</b></p>
          <p className="text">Kindred North, Centerton, AR</p>
        </div>

        <div className="details">
          <p className="label"><b>Dress Code: &nbsp;</b></p>
          <p className="text">Indian or American/Western Formal or Cocktail</p>
        </div>

        <br/>
        <br/>

        <div className='line-container'>
        <h2 className="line-text">Registry</h2>
        </div>
        <br/>
        <p>Registry details coming soon!</p>

        <br/>
        <br/>
        
        <div className='line-container'>
          <h2 className="line-text">Frequently Asked Questions</h2>
        </div>

        <br/>
        <br/>

        <p class="question"><b>Q: Will this be an Indian/Hindu-style wedding or an American/Wester/Christian-style wedding?</b></p>
        <p class="answer">A: It will mainly be an Indian/Hindu-style wedding! We will have a Hindu ceremony, and the reception that follows will
        be more Indo-Western fusion!</p>

        <br/>

        <p class="question"><b>Q: I'm not Indian. Is it appropriate for me to wear Indian clothes?</b></p>
        <p class="answer">A: Of course it is!!! We highly encourage and welcome our non-Indian folks to participate in the culture :)</p>

        <br/>

        <p class="question"><b>Q: I don't have Indian clothes ... Is it okay for me to wear American/Western clothes?</b></p>
        <p class="answer">A: Absolutely! Formal and cocktail attire is recommended. </p>

        <br/>

        <p class="question"><b>Q: What colors are off-limits?</b></p>
        <p class="answer">A: NONE! Wear whatever color you'd like. Be colorful, be bold, be comfortable -- wear whatever color makes you happy! </p>

      </div>

      
     
    </div>
  );
}

export default Information;
