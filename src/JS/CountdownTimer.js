import React, { useState, useEffect } from 'react';
import '../CSS/CountdownTimer.css'

const CountdownTimer = () => {
  const targetDate = new Date('September 7, 2024 12:00:00 CST').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { months, weeks, days, hours };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="CountdownTimer">
      <div className="block">
        <p className="time">
          {timeRemaining.months}
        </p>
        <p className="label">
          months
        </p>
      </div>

      <block className="symbol"> ❧ </block>

      <div className="block">
        <p className="time">
          {timeRemaining.weeks}
        </p>
        <p className="label">
          weeks
        </p>
      </div>

      <block className="symbol"> ❧ </block>

      <div className="block">
        <p className="time">
          {timeRemaining.days}
        </p>
        <p className="label">
          days
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
