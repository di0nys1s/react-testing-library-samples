import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: "#fff",
    margin: "1rem",
    padding: "2rem",
    fontSize: "2rem",
    fontWeight: 600,
  };

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={buttonStyle}
      >
        Change to {buttonColor}
      </button>
    </div>
  );
}

export default App;
