import React, { useState } from 'react';
import '../../CSS/RSVP.css';
import { ReactComponent as Border } from '../../assets/GoldBorder.svg'

// Modal component
const Modal = ({ isOpen, onClose, name, response, email, additionalNames, dietaryPreferences, notListedPreference,songRequests, logToGSheets }) => {
    // logToGSheets(infoArray)

  const handleClose = () => {
    onClose();
  };

  const truePreferences = Object.keys(dietaryPreferences).filter(key => dietaryPreferences[key]);
  let infoArray = []
  console.log(truePreferences)

  console.log(name, response, additionalNames, truePreferences, notListedPreference,songRequests)
  infoArray.push(name)
  infoArray.push(email)
  infoArray.push(response)
  infoArray.push(additionalNames.join(", "))
  infoArray.push(JSON.stringify(truePreferences))
  infoArray.push(notListedPreference)
  infoArray.push(songRequests.join(", "))
  console.log(infoArray)


  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <p className="modal-title">Confirm</p>
          <hr/>
          <br/>
          <p className='more-info'>Please review your RSVP below to make sure everything looks good before submitting! Note: you may have to scroll down to see the "Submit" button.</p>
          <div className="confirmation-item-group">
            <p className="confirm-label">Your Name</p>
            <p className="confirm-item">{name}</p>
          </div>
          <div className="confirmation-item-group">
            <p className="confirm-label">Your Response</p>
            <p className="confirm-item">{response.replace(/\b\w/g, (char) => char.toUpperCase())}</p>
          </div>
          <div className="confirmation-item-group">
            <p className="confirm-label">Your Email</p>
            <p className="confirm-item">{email}</p>
          </div>
          <div className="confirmation-item-group" style={{ display: ['Accept', 'Tentative'].includes(response) ? 'block' : 'none' }}>
            <p className="confirm-label">Additional People in Your Party</p>
            <ul className="confirm-item-list">
              {additionalNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="confirmation-item-group" style={{ display: ['Accept', 'Tentative'].includes(response) ? 'block' : 'none' }}>
            <p className="confirm-label">Dietary Preferences & Restrictions</p>
            <ul className="confirm-item-list">
              {/* Render true preferences */}
              {truePreferences.map((preference, index) => (
                <li key={index}>
                  {preference === 'Not Listed:' ? (
                    <>
                      {preference} {notListedPreference}
                    </>
                  ) : (
                    preference
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="confirmation-item-group" style={{ display: ['Accept', 'Tentative'].includes(response) ? 'block' : 'none' }}>
            <p className="confirm-label">Song Requests</p>
            <ul className="confirm-item-list">
              {songRequests.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
          </div>
          <div className="symbol-divider">─ ❧ ─</div>
          <br/>
          <button className="modal-button" onClick={onClose}>Edit RSVP</button>
          <br/>
          {/* <button className="modal-button" onClick={() => { logToGSheets(infoArray); handleClose(); }}>Submit RSVP</button> */}
          <button className="modal-button" onClick={() => { logToGSheets(infoArray) }}>Submit RSVP</button>
        </div>
      </div>
    </div>
  );
};

function RSVP() {

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [notListedPreference, setNotListedPreference] = useState('');
  const [songRequests, setSongRequests] = useState(['']);
  const [additionalNames, setAdditionalNames] = useState(['']);
  const [dietaryPreferences, setDietaryPreferences] = useState({
    "Vegetarian": false,
    "Vegan": false,
    "Gluten Allergy": false,
    "No Dairy": false,
    "No Beef": false,
    "No Pork": false,
    "Peanut Allergy": false,
    "Shellfish Allergy": false,
    "Low Carb": false,
    "Not Listed:": false
  });
  

  const logToGSheets = (infoArray) => {
    console.log('logging to gsheets!');

    console.log(infoArray[4])
    let altered = JSON.parse(infoArray[4])
    console.log(altered)

    infoArray[4] = altered.join(", ")
    console.log(infoArray)

    let info = [
      infoArray
    ]

    if (infoArray[4] === "") {
      infoArray[4] = '-'
    }

    if (infoArray[5] === "") {
      infoArray[5] = '-'
    }

    if (infoArray[3] === "") {
      infoArray[3] = '-'
    }

    if (infoArray[6] === "") {
      infoArray[6] = '-'
    }

    // Create a new Date object
    const currentDate = new Date();

    // Get the current date and time
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Month starts from 0
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Construct a string representation of the current date and time
    const currentDateTimeString = `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`;

    console.log(currentDateTimeString);

    infoArray.push(currentDateTimeString)


    console.log(info)

    // Show loader
    document.getElementById('loader').style.display = 'block';

    fetch('https://gsheetsapi.onrender.com/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: info })
    })
    .then(response => {console.log("GOT DATA FROM SERVER", response.json())})
    .then(data => {
      console.log('Response from server:', data);
      // Hide loader after receiving response
      setSubmitted(true)
      document.getElementById('loader').style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);
      // Hide loader in case of error
      document.getElementById('loader').style.display = 'none';
    });

};


  const handleAdditionalNameChange = (index, value) => {
    const newNames = [...additionalNames];
    newNames[index] = value;
    setAdditionalNames(newNames);
  };

  const handleAddNameField = (e) => {
    e.preventDefault(); // Prevent form submission
    setAdditionalNames([...additionalNames, '']);
  };

  const handleRemoveNameField = (indexToRemove) => {
    setAdditionalNames(prevNames => prevNames.filter((_, index) => index !== indexToRemove));
  };

  const handleSongRequestChange = (index, value) => {
    const newRequests = [...songRequests];
    newRequests[index] = value;
    setSongRequests(newRequests);
  };
  
  const handleAddSongRequest = (e) => {
    e.preventDefault(); // Prevent form submission
    setSongRequests([...songRequests, '']);
  };
  
  const handleRemoveSongRequest = (indexToRemove) => {
    setSongRequests(prevRequests => prevRequests.filter((_, index) => index !== indexToRemove));
  };
  
  const handleDietaryPreferenceChange = (e) => {
    const { name, value, checked } = e.target;
    
    // If the input is a checkbox, update the state of dietary preferences
    if (e.target.type === 'checkbox') {
      setDietaryPreferences({
        ...dietaryPreferences,
        [name]: checked,
      });
    } else { // If it's a text input, update the state of the "Not listed" preference
      setNotListedPreference(value);
    }
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HERE ARE THE SUBMISSION ITEMS")
    openModal();
  };


  return (
    <div className="top">
      {submitted ? (
         <div onScroll={handleScroll} className="RSVP">
           <div className="nav-bg"></div>
         <div id="loader">
           <div className="loader"></div>
           <br/>
           <br/>
           <br/>
           <p className="loading">Submitting your RSVP (Please do not refresh!)...</p>
         </div>
         
         <Border class="top-left border"/>
         <Border class="top-right border"/>
         <Border class="bottom-left border"/>
         <Border class="bottom-right border"/>
   
         <h1 className="RSVP-title">RSVP</h1>
         <hr className="gold"/>
         <br/>
         <br/>
         <br/>
   
         <p className="more-info1">Your RSVP has been submitted!</p>
         <p className="more-info1">You will be getting a confirmation email with your RSVP details within a few minutes! <em>Please be sure to check your spam/junk folder.</em></p>
         <p className="more-info1">In the meantime, please visit our Schedule, Information, and FAQ pages!!</p>
       </div>
      ) : (
        <div onScroll={handleScroll} className={`RSVP ${['Accept', 'Tentative'].includes(response)? 'expanded' : ''}`}>
           <div className={`nav-bg ${['Accept', 'Tentative'].includes(response) ? 'scroll' : ''}`}></div>
        <div id="loader">
          <div className="loader"></div>
          <br/>
          <br/>
          <br/>
          <p className="loading">Submitting your RSVP (Please do not refresh!)...</p>
        </div>
        
        <Border class="top-left border"/>
        <Border class="top-right border"/>
        <Border class="bottom-left border"/>
        <Border class="bottom-right border"/>
  
        <h1 className="RSVP-title">RSVP</h1>
        <p className="RSVP-by">Please RSVP by July 31</p>
        <hr className="gold"/>
        <br/>

  
        <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label className="label-heading">Your Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Please enter your full name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-section">
            <label className="label-heading">Your Email:</label>
            <input
              type="email"
              value={email}
              placeholder="Please enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        <div className="form-section" required>
          <label className="label-heading">Your Response:</label>
            <label>
              <input
                type="radio"
                name="response"
                value="Accept"
                checked={response === 'Accept'}
                onChange={(e) => setResponse(e.target.value)}
              />
              Joyfully <i>accepts</i>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Decline"
                checked={response === 'Decline'}
                onChange={(e) => setResponse(e.target.value)}
              />
              Respectfully <i>declines</i>
            </label>
            <label>
              <input
                type="radio"
                name="response"
                value="Tentative"
                checked={response === 'Tentative'}
                onChange={(e) => setResponse(e.target.value)}
              />
              Is <i>tentative</i>
            </label>
          </div>
          <div className="more-guests" style={{ display: ['Accept', 'Tentative'].includes(response)? 'flex' : 'none' }}>
            <br/>
            <div className="symbol-divider">─ ❧ ─</div>
            <br/>
            <label className="label-heading">Additional People In Your Party:</label>
            {additionalNames.map((value, index) => (
              <div className="guest" key={index}>
                <input
                  type="text"
                  value={value}
                  placeholder="Enter additional name in your party"
                  onChange={(e) => handleAdditionalNameChange(index, e.target.value)}
                />
                <button className="remove" onClick={() => handleRemoveNameField(index)}>-</button>
              </div>
            ))}
            <button className="add" onClick={handleAddNameField}>+ Add Guest</button>
          </div>
          <div className="form-section" style={{ display: ['Accept', 'Tentative'].includes(response) ? 'flex' : 'none' }}>
            <br/>
            <div className="symbol-divider">─ ❧ ─</div>
            <br/>
            <label className="label-subheading">Are there any dietary restrictions/preferences in your party? Please select all that apply:</label>
            <label className="label-subheading-note">*Note: We cannot guarantee we will be able to accommodate all dietary restrictions/preferences in our buffet-style reception dinner, but will do our best!</label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Vegetarian"
                checked={dietaryPreferences.vegetarian}
                onChange={handleDietaryPreferenceChange}
              /> Vegetarian
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Vegan"
                checked={dietaryPreferences.vegan}
                onChange={handleDietaryPreferenceChange}
              /> Vegan
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Gluten Allergy"
                checked={dietaryPreferences.glutenAllergy}
                onChange={handleDietaryPreferenceChange}
              /> No Gluten
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="No Dairy"
                checked={dietaryPreferences.noDairy}
                onChange={handleDietaryPreferenceChange}
              /> No Dairy
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="No Beef"
                checked={dietaryPreferences.noBeef}
                onChange={handleDietaryPreferenceChange}
              /> No Beef
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="No Pork"
                checked={dietaryPreferences.noPork}
                onChange={handleDietaryPreferenceChange}
              /> No Pork
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Peanut Allergy"
                checked={dietaryPreferences.peanutAllergy}
                onChange={handleDietaryPreferenceChange}
              /> Peanut Allergy
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Shellfish Allergy"
                checked={dietaryPreferences.shellfishAllergy}
                onChange={handleDietaryPreferenceChange}
              /> Shellfish Allergy
            </label>
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Low Carb"
                checked={dietaryPreferences.lowCarb}
                onChange={handleDietaryPreferenceChange}
              /> Low Carb
            </label>
           {/* "Not listed" checkbox */}
            <label className="dietary-option">
              <input
                type="checkbox"
                name="Not Listed:"
                checked={dietaryPreferences.notListed}
                onChange={handleDietaryPreferenceChange}
              /> Not listed:
            </label>
            <input className="simple-text"
              type="text"
              value={notListedPreference}
              placeholder="Please specify"
              onChange={(e) => setNotListedPreference(e.target.value)}
            />
          </div>
          <div className="more-guests" style={{ display: ['Accept', 'Tentative'].includes(response) ? 'flex' : 'none' }}>
            <br/>
            <div className="symbol-divider">─ ❧ ─</div>
            <br/>
            <label className="label-subheading">Finally, we are accepting song requests for the reception dance party! Please suggest us some songs:</label>
            {songRequests.map((value, index) => (
              <div className="song-request" key={index}>
                <input
                  type="text"
                  className="simple-text"
                  value={value}
                  placeholder="Enter song request"
                  onChange={(e) => handleSongRequestChange(index, e.target.value)}
                />
                <button className="remove" onClick={() => handleRemoveSongRequest(index)}>-</button>
              </div>
            ))}
            <button className="add" onClick={handleAddSongRequest}>+ Add Song</button>
          </div>
          <div className="center"  style={{ display: ['Accept', 'Tentative', 'Decline'].includes(response) ? 'flex' : 'none' }}>
            <button className="submit-button" >Confirm RSVP</button>
          </div>
      </form>
      <p style={{ display: ['Accept', 'Decline', 'Tentative'].includes(response) ? 'none' : 'block' }} className='more-info'>Please only enter one name from your party. You will be able to add more people later. :)</p>
      <Modal isOpen={isModalOpen} onClose={closeModal} name={name} response={response} email={email} additionalNames={additionalNames} dietaryPreferences={dietaryPreferences} notListedPreference={notListedPreference} songRequests={songRequests} logToGSheets={logToGSheets} />
      </div>
      )}
    </div>
  );
}

export default RSVP;