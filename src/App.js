import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('breathe in');

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(message => message === 'breathe in' ? 'breathe out' : 'breathe in');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className={"circle " + (message === 'breathe in' ? 'grow' : 'shrink')}>
        <div className="circle-inner">
          <span>{message}</span> 
        </div>
      </div>
    </div>
  );
}

export default App;
