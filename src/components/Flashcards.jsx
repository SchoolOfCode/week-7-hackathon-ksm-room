import React from "react";
import Flashcard from "./Flashcard";

function Flashcards({ flashcards }) {
  return (
    <div className="flashcards">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}

export default Flashcards;
