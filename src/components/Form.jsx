import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./css/Form.css";

// create a form that adds new flashcards with question and answer
// each flashcard needs a unique id
// return form, title, label, two input fields one for question and one for answer - wrap in a div
// show alert if inputs are submitted when empty
// on submission inputs need to be validated
// create new flashcard object with: unique id, inputted question and answer
// pass new flashcard to parent component using callback
// reset the input fields after successful submission
// add submit button

function Form({ addFlashcard }) {
  const [question, setQuestion] = useState(""); // init with empty string to represent the current state (empty by default)
  const [answer, setAnswer] = useState("");

  // function to handle submit
  function handleSubmit() {
    if (!question || !answer) {
      alert("You need to give a question and an answer!");
      return;
    }
    const newFlashcard = {
      id: uuidv4(),
      question,
      answer,
    };
    // informs the parent about new card so parent can manage it
    addFlashcard(newFlashcard);
    // clear q and a back to empty strings after new card creation
    setQuestion("");
    setAnswer("");
  }

  return (
    <form className="form">
      <h2>Add your own flashcards</h2>
      <div className="form-group">
        <label htmlFor="question">Question   </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)} // event.target refers to the DOM element where event occured (<input>), setQ updates the state with the new value
          placeholder="Enter question here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer">Answer   </label>
        <input
          type="text"
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Enter answer here"
        />
      </div>
      <button className="button" type="button" onClick={handleSubmit}>
        Add flashcard
      </button>
    </form>
  );
}

export default Form;
