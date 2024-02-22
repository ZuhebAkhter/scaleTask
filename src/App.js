import React, { useState, useEffect } from "react";
import CountdownForm from "./Components/CountForm";
import CountdownTimer from "./Components/CountTimer";

const App = () => {
  const [targetDateTime, setTargetDateTime] = useState(null);

  useEffect(() => {
    const storedTargetDateTime = localStorage.getItem("targetDateTime");
    if (storedTargetDateTime) {
      setTargetDateTime(new Date(storedTargetDateTime));
    }
  }, []);

  const handleSetCountdown = (dateTime) => {
    console.log(dateTime);
    setTargetDateTime(dateTime);

    localStorage.setItem("targetDateTime", dateTime);
  };
  console.log(targetDateTime);

  const handleCancelCountdown = () => {
    setTargetDateTime(null);

    localStorage.removeItem("targetDateTime");
  };

  return (
    <div className="app">
      {targetDateTime ? (
        <CountdownTimer
          targetDateTime={targetDateTime}
          onCancel={handleCancelCountdown}
        />
      ) : (
        <CountdownForm onSetCountdown={handleSetCountdown} />
      )}
    </div>
  );
};

export default App;
