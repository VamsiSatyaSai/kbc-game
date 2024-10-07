import { useState } from "react";

import './index.css'

function PlayerScreen({ onJoin, onSubmit }) {
    const [name, setName] = useState("");
    const [answer, setAnswer] = useState("");
  
    const handleJoin = () => {
      onJoin(name);
    };
  
    const handleSubmit = () => {
      onSubmit(name, answer);
    };
  
    return (
        <div className="player-screen">
          <h1>Join KBC Game</h1>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="input-field"
            />
            <button className="btn" onClick={handleJoin}>Join</button>
          </div>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Enter your answer (A, B, C, or D)" 
              value={answer} 
              onChange={(e) => setAnswer(e.target.value)} 
              className="input-field"
            />
            <button className="btn" onClick={handleSubmit}>Submit Answer</button>
          </div>
        </div>
      );
    }

  export default PlayerScreen