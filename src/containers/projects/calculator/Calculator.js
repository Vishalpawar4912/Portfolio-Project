import React, { useState } from "react";
import "./Styles.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className={`calculator ${darkMode ? "dark" : ""}`}>
      <div className="theme-toggle">
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          Dark Mode
        </label>
      </div>
      <input className="display" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
