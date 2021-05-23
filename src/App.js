import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  // regex if you find a capital letter in the middle of the word and even if you find it multiple times, replace it with space
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

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
          {isChecked
            ? "Button is disabled"
            : `Change to ${replaceCamelWithSpaces(newButtonColor)}`}
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
