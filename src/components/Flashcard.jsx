import React, { useState } from "react";
import "./flashcard.css";

function Flashcard({ flashcard }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="flashcard" onClick={() => setIsShowing(!isShowing)}>
      <div className="flashcard-content">
        {isShowing ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
}
export default Flashcard;
