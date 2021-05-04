import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // Breathe message
  const [message, setMessage] = useState('breathe in');
  
  // Time
  const [time, setTime] = useState(60);
  let seconds = time % 60;
  let minutes = Math.floor(time / 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  useEffect(() => { 
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      clearInterval();
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(message => message === 'breathe in' ? 'breathe out' : 'breathe in');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <span className="timer">{minutes + ':' + seconds}</span>
      <div className={"circle " + (message === 'breathe in' ? 'grow' : 'shrink')}>
        <div className="circle-inner">
          <span>{message}</span> 
        </div>
      </div>
    </div>
  );
}

export default App;
