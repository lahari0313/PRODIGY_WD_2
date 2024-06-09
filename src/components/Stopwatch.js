// src/Stopwatch.js
import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1); // Update interval to 1 millisecond for milliseconds accuracy
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    const milliseconds = time % 1000;

    const getMinutes = `0${minutes}`.slice(-2);
    const getSeconds = `0${seconds}`.slice(-2);
    const getMilliseconds = `0${Math.floor(milliseconds / 10)}`.slice(-2); // Display two-digit milliseconds

    return `${getMinutes} : ${getSeconds} : ${getMilliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">
        {formatTime(time)}
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => {setRunning(false); setTime(0);}}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
