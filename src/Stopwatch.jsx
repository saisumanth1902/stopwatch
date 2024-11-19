import React, { useState, useRef } from "react";
function Stopwatch () {
    const [time, setTime] = useState(0); // Track time in seconds
  const [isRunning, setIsRunning] = useState(false); // Track timer state
  const timerRef = useRef(null); // Reference for the interval timer

  // Function to start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true); // Set the timer state to running
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    }
  };

  // Function to stop the timer
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false); // Set the timer state to stopped
      clearInterval(timerRef.current); // Clear the interval
      timerRef.current = null;
    }
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsRunning(false); // Reset the timer state
    clearInterval(timerRef.current); // Clear the interval
    timerRef.current = null; // Reset the interval reference
    setTime(0); // Reset time to zero
  };

  // Format time as mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
    return <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <p>
        <strong>Time:</strong> {formatTime(time)}
      </p>
      <div>
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
    </>
    
}

export default Stopwatch