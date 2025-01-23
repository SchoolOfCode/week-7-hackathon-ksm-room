import React from "react";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className="header">React Flashcards</h1>
      <p className="about-text">Text goes here for now</p>
    </div>
  );
}

export default Header;
