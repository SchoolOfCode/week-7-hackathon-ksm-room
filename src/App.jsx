import React from "react";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Flashcards from "./components/Flashcards.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const cardExamples = [
  { id: 1, question: "What is JSX?", answer: "Answer Text" },
  { id: 2, question: "What is Vite?", answer: "Answer Text" },
  { id: 3, question: "What is state?", answer: "andiqjfiewf" },
];

function App() {
  const [flashcards, setFlashcards] = useState(cardExamples);

  return (
    <div className="app">
      <Header />
      <main>
        <Flashcards flashcards={flashcards} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
