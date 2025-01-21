import React, { useState, useEffect } from "react";

const CountdownClock = ({ setTestOver }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTestOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default CountdownClock;
