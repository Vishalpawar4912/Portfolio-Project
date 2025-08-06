import React, { useState } from "react";
import "./CharCount.scss";

const CharCount = () => {
  const [text, setText] = useState("");
  const maxLength = 500;

  return (
    <div className="charcount-container">
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        placeholder="Type something..."
      ></textarea>
      <div className={`counter ${text.length === maxLength ? "limit" : ""}`}>
        {text.length} / {maxLength}
      </div>
    </div>
  );
};

export default CharCount;
