import React from "react";
import Flashcard from "./Flashcard";
import "./css/Flashcards.css";

function Flashcards({ flashcards }) {
  // introduce state to flip between flashcards, showing one at a time
  // render flashcards inside div and use .map to loop through the flashcards array
  // use key to identify each flashcard
  return (
    <div className="flashcards">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} />;
      })}
    </div>
  );
}

export default Flashcards;
