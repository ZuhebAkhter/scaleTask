import React, { useRef, useState } from "react";
import './CountForm.css'
const CountdownForm = ({ onSetCountdown }) => {
  const dateInputref = useRef();
  const today = new Date();
  const formattedToday = today.toISOString().slice(0, 16); 

  const [selectedDateTime, setSelectedDateTime] = useState(formattedToday);

  const handleDateTimeChange = (e) => {
    setSelectedDateTime(e.target.value);
  };

  const handleSubmit = () => {
    const EnteredDate = dateInputref.current.value;
    const targetDateTime = new Date(EnteredDate);

    onSetCountdown(targetDateTime);
  };

  return (
    <div className="countdown-form">
      <h2 id="heading">Enter the date and time for the countdown</h2>
      <div className="form">
      <label  htmlFor="datetime">Date and Time:</label><br></br>
      <input
        type="datetime-local"
        id="futureDateTime"
        name="futureDateTime"
        min={formattedToday}
        value={selectedDateTime}
        onChange={handleDateTimeChange}
        ref={dateInputref}
      />
      <button id="btn" onClick={handleSubmit}>Start Countdown</button>
      </div>

    </div>
  );
};

export default CountdownForm;
