import React from "react";
import reactLogo from "../assets/react.svg";
import "./Header.css"

function Header() {
  return (
    <div className="headerContainer">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className="header">React Flashcards</h1>
      <p className="about-text">🧠Expand your React knowledge. One flashcard at a time!🐌</p>
    </div>
  );
}

export default Header;
