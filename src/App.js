import React, { useState } from 'react';
import {QRCodeCanvas} from 'qrcode.react';

import HostScreen from './components/HostScreen';
import PlayerScreen from './components/PlayerScreen';

import './App.css'

const questions = [
  { question: "What is the capital of France?", options: ["A: Berlin", "B: Madrid", "C: Paris", "D: Rome"], answer: "C" },
  { question: "What is 5 + 5?", options: ["A: 8", "B: 9", "C: 10", "D: 11"], answer: "C" },
  { question: "Who wrote 'Hamlet'?", options: ["A: Dickens", "B: Tolstoy", "C: Shakespeare", "D: Hemingway"], answer: "C" },
  { question: "What is the chemical symbol for water?", options: ["A: CO2", "B: H2O", "C: O2", "D: NaCl"], answer: "B" },
  { question: "Which planet is closest to the Sun?", options: ["A: Earth", "B: Venus", "C: Mars", "D: Mercury"], answer: "D" }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [players, setPlayers] = useState([]);
  const [correctPlayer, setCorrectPlayer] = useState("");

  const handlePlayerJoin = (name) => {
    setPlayers([...players, { name, answeredCorrectly: false }]);
  };

  const handleAnswerSubmit = (name, answer) => {
    if (answer === questions[currentQuestion].answer) {
      setCorrectPlayer(name);
      setTimeout(() => {
        setCorrectPlayer("");
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        }
      }, 2000);
    }
  };

  return (
    <div className='app-container'>
      <HostScreen 
        question={questions[currentQuestion]} 
        correctPlayer={correctPlayer} 
      />
      <div className="qr-code-container">
        <QRCodeCanvas value="https://kbc-game-pi.vercel.app/player" size={150} />
        <p>Scan this QR code to join the game!</p>
      </div>
      <PlayerScreen onJoin={handlePlayerJoin} onSubmit={handleAnswerSubmit} />
    </div>
  );
}


export default App;
