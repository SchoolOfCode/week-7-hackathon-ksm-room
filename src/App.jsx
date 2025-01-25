import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header.jsx";
import Flashcards from "./components/Flashcards.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

// display 3 flashcards using array of objects
const cardExamples = [
  {
    id: uuidv4(),
    question: "What are React Hooks? ",
    answer:
      "React Hooks are tools that allow you to use state and other React features without writing class components. They're designed to simplify your code and make it easier to share logic across components.",
  },
  {
    id: uuidv4(),
    question: "What is JSX?",
    answer:
      "JSX makes it easier to write and add HTML in React. It converts HTML tags into React elements.",
  },
  {
    id: uuidv4(),
    question: "What is 'state'?",
    answer:
      "Components need to “remember” things. In React, this kind of component-specific memory is called state.",
  },
];

function App() {
  const [flashcards, setFlashcards] = useState(cardExamples);
  // addCard function to add newFlashcard to existing list
  // call setFlashcards to update the list stored in state
  // prevFlashcards to represent the current list before adding new
  // copy all current cards into new array and add new card to new array [...]
  const addCard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  return (
    <div className="app">
      <Header />
      <Flashcards flashcards={flashcards} />
      <Form addFlashcard={addCard} />
      <Footer />
    </div>
  );
}

export default App;
