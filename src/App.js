import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Come one, Come all, gather round and hear the tale of the Learnd Astronomer</h1>
      <h3>
        When I heard the learn’d astronomer,<br/>
        When the proofs, the figures, were ranged in columns before me,<br/>
        When I was shown the charts and diagrams, to add, divide, and measure them,<br/>
        When I sitting heard the astronomer where he lectured with much applause in the lecture-room,<br/>
        How soon unaccountable I became tired and sick,<br/>
        Till rising and gliding out I wander’d off by myself,<br/>
        In the mystical moist night-air, and from time to time,<br/>
        Look’d up in perfect silence at the stars.<br/>
      <h3>
      <br />
      <h2>The date is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
