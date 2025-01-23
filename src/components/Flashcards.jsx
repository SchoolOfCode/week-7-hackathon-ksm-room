import React from "react";
import Flashcard from "./Flashcard";
import "./flashcards.css";

function Flashcards({ flashcards }) {
  return (
    <div className="flashcard-container">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

export default Flashcards;
