import React, { useState } from "react";
import "./css/Flashcard.css";

function Flashcard({ flashcard }) {
  const [isShowing, setIsShowing] = useState(false); // init isShowing to be false

  // if flashcard is open give it open classname, if closed give closed classname
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
