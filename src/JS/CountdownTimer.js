import React, { useState, useEffect } from 'react';
import '../CSS/CountdownTimer.css'

const CountdownTimer = () => {
  const targetDate = new Date('September 7, 2024 12:00:00 CST').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [daysUntil, setDaysUntil] = useState(0);
  useEffect(() => {
    // 📅 Get today's date
    const today = new Date();

    // 📅 Set the target date (September 7, 2024)
    const targetDate = new Date(today.getFullYear(), 8, 7); // Month is 0-indexed (8 for September)

    // Check if the target date has already passed this year
    if (today > targetDate) {
      targetDate.setFullYear(today.getFullYear() + 1); // Move to next year
    }

    // 🧮 Calculate the difference in milliseconds
    const differenceInMilliseconds = targetDate - today;

    // 🕒 Convert milliseconds to days
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.ceil(differenceInMilliseconds / millisecondsPerDay);

    // 📊 Update the state
    setDaysUntil(differenceInDays);
  }, []); // Empty dependency array to run only once on component mount

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

      <block className="symbol"> ❧ </block>

      <div className="block">
        <p className="time">
          {daysUntil} days!
        </p>
        <p className="label">
          We're so close!
        </p>
      </div>

      <block className="symbol"> ❧ </block>

    </div>
  );
};

export default CountdownTimer;
