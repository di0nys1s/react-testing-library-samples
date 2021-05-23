import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const buttonStyle = {
    backgroundColor: isChecked ? "grey" : buttonColor,
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
          {isChecked ? "Button is disabled" : `Change to ${buttonColor}`}
        </button>
        <div>
          <input
            type="checkbox"
            aria-checked={isChecked}
            defaultChecked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
