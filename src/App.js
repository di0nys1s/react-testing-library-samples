import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const buttonStyle = {
    backgroundColor: isChecked ? "gray" : buttonColor,
    color: "#fff",
    margin: "1rem",
    padding: "2rem",
    fontSize: "2rem",
    fontWeight: 600,
    cursor: !isChecked && "pointer",
  };

  return (
    <>
      <div className="App">
        <button
          onClick={() => setButtonColor(newButtonColor)}
          style={buttonStyle}
          disabled={isChecked}
        >
          {isChecked ? "Button is disabled" : `Change to ${newButtonColor}`}
        </button>
        <div>
          <input
            type="checkbox"
            id="disable-button-checkbox"
            aria-checked={isChecked}
            defaultChecked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="disable-button-checkbox">
            {!isChecked ? `Disable button` : `Enable button`}
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
