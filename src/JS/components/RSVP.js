import '../../CSS/RSVP.css';
import { ReactComponent as Border } from '../../assets/GoldBorder.svg'

function RSVP() {

  const handleClick = () => {
    console.log('Button clicked!');
    // You can put your function logic here
    let info = [
      ["rashez", "NO"],      // Sample data row
      ["gobu", "YA"],      // Another sample data row
      // Add more rows as needed
    ];
 
    fetch('https://gsheetsapi.onrender.com/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: info })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  };

  return (
    <div className="RSVP">

      <Border class="top-left border"/>
      <Border class="top-right border"/>
      <Border class="bottom-left border"/>
      <Border class="bottom-right border"/>

      <h1 className="RSVP-title">RSVP</h1>
      <hr className="gold"/>
      <p className="RSVP-subtitle">Coming Soon!</p>

      
     
    </div>
  );
}

export default RSVP;