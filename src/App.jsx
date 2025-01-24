import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Flashcards from "./components/Flashcards.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const cardExamples = [
  {
    id: 1,
    question: "What are React Hooks? ",
    answer:
      "React Hooks are tools that allow you to use state and other React features without writing class components. They're designed to simplify your code and make it easier to share logic across components.",
  },
  { id: 2, question: "Question Test", answer: "Answer Text" },
  { id: 3, question: "Question Test", answer: "andiqjfiewf" },
];

function App() {
  const [flashcards, setFlashcards] = useState(cardExamples);

  const addCard = (newFlashCard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashCard]);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Flashcards flashcards={flashcards} />
        <Form addFlashcard={addCard} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
