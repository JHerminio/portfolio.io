import React, { useEffect, useState } from "react";

import './Time.css';

function Time() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time" aria-live="polite">
      <h2>Real Time: {time}</h2>
    </div>
  );
}

export default Time;
