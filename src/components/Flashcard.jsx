import React, { useState } from "react";
import "./css/Flashcard.css";

function Flashcard({ flashcard }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      className={`flashcard ${isShowing ? "open" : "closed"}`}
      onClick={() => setIsShowing(!isShowing)}
    >
      {isShowing ? flashcard.answer : flashcard.question}
    </div>
  );
}

export default Flashcard;
