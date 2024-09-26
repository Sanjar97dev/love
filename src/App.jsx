import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className={`envelope-wrapper ${isOpen ? "flap" : ""}`}>
        <div className="envelope">
          <div className="letter">
            {isOpen && (
              <div className="text">
                <strong>Цитата </strong>
                <p>
                  Мен сени көзүм менен көрбөйм, мен сени жүрөгүм менен
                  көрүп, жүрөк менен туям.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="heart" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default App;
