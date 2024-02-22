import React, { useState, useEffect } from "react";
import './CountTimer.css'

const CountdownTimer = ({ targetDateTime, onCancel }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());
  console.log(targetDateTime);

  function calculateRemainingTime() {
    const now = new Date();
    console.log("now", now, "tar", targetDateTime);
    const difference = targetDateTime - now;
    console.log(difference, "diff");
    if (difference <= 0) {
      onCancel();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDateTime]);

  return (
    <div className="countdown-timer">
      <h2 className="timerHead">Countdown Timer</h2>
      {/* <div id="showCounter">
        <div className="cont">
          <span className="inputcount">{String(remainingTime.days).padStart(2, "0")}</span>
          <span>Days</span>
        </div>
        <div className="cont1">
          <span className="inputcount">{String(remainingTime.hours).padStart(2, "0")}</span>
          <span>Hours</span>
        </div>
        <div>
          <span className="inputcount">{String(remainingTime.minutes).padStart(2, "0")}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span className="inputcount">{String(remainingTime.seconds).padStart(2, "0")}</span>
          <span>Seconds</span>
        </div>
      </div> */}
      <div>
      <span className="inputcount1">Days</span>
      <span className="inputcount1">Hours</span>
      <span className="inputcount1">Minutes</span>
      <span className="inputcount1">Seconds</span>

      </div>
      <div className="counterall">
      <span className="inputcount">{String(remainingTime.days).padStart(2, "0")}</span>
      <span className="inputcount" id="hou">{String(remainingTime.hours).padStart(2, "0")}</span>
      <span className="inputcount" id="min">{String(remainingTime.minutes).padStart(2, "0")}</span>
      <span className="inputcount" id="sec">{String(remainingTime.seconds).padStart(2, "0")}</span>
      </div>
      <button id="btn-cancel" onClick={onCancel}>Cancel Countdown</button>
    </div>
  );
};

export default CountdownTimer;
