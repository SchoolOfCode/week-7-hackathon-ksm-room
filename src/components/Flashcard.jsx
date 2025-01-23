import React, { useState } from "react";

function Flashcard({ flashcard }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div onClick={() => setIsShowing(!isShowing)}>
      {isShowing ? flashcard.answer : flashcard.question}
    </div>
  );
}

export default Flashcard;
