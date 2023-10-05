import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v2/launches')
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        console.log("Error while fetching from the SpaceX API:", err);
      });
  }, []); // empty dependency array ensures this useEffect runs once when the component mounts

  return (
    <ul>
      {flights.map((flight) => (
        <li key={flight.flight_number}>
          <h2>{flight.mission_name}</h2>
          <p>Flight Number: {flight.flight_number}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
