import React from "react";
import Flashcard from "./Flashcard";
import "./css/Flashcards.css";

function Flashcards({ flashcards }) {
  // introduce state to flip between flashcards, showing one at a time
  return (
    <div className="flashcards">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

export default Flashcards;
