import React from "react";
import reactLogo from "../assets/react.svg";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className="header">React Flashcards</h1>
      <p className="about-text">
        🧠Expand your React knowledge. One flashcard at a time!🐌
      </p>
      <p className="about-text">Click each card to find out the answer.</p>
    </div>
  );
}

export default Header;
