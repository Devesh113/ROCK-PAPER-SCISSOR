import { useState } from "react";
import "./App.css";

function App() {
  const [userMove, setUserMove] = useState("rock");
  const [compMove, setCompMove] = useState("rock");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("Ready to play?");
  const [animateKey, setAnimateKey] = useState(0);

  const moves = ["rock", "paper", "scissor"];

  const emojis = {
    rock: "🪨",
    paper: "📃",
    scissor: "✂️"
  };

  function play(move) {
    const comp = moves[Math.floor(Math.random() * 3)];

    setUserMove(move);
    setCompMove(comp);
    setAnimateKey(prev => prev + 1); // trigger animation

    if (move === comp) {
      setResultMessage("It's a Tie! 🤝");
      return;
    }

    const win =
      (move === "rock" && comp === "scissor") ||
      (move === "paper" && comp === "rock") ||
      (move === "scissor" && comp === "paper");

    if (win) {
      setUserScore(prev => prev + 1);
      setResultMessage("You Win! 🎉");
    } else {
      setCompScore(prev => prev + 1);
      setResultMessage("Computer Wins! 🤖");
    }
  }

  return (
    <div className="container">
      <div className="glass-panel">
        <h1 className="title">Rock Paper Scissors</h1>

        <div className="scoreboard">
          <div className="score-box">
            <span className="player-label">You</span>
            <span className="score user-score">{userScore}</span>
          </div>
          <div className="score-divider">VS</div>
          <div className="score-box">
            <span className="player-label">Computer</span>
            <span className="score comp-score">{compScore}</span>
          </div>
        </div>

        <div className="arena" key={animateKey}>
          <div className="move-display player-move-anim">
            <div className="move-emoji-wrapper">
              <span className="move-emoji">{emojis[userMove]}</span>
            </div>
            <span className="move-label">Your Move</span>
          </div>

          <div className="arena-center">
            <p className="result-message pop-in">{resultMessage}</p>
          </div>

          <div className="move-display comp-move-anim">
            <div className="move-emoji-wrapper">
              <span className="move-emoji">{emojis[compMove]}</span>
            </div>
            <span className="move-label">Computer</span>
          </div>
        </div>

        <div className="controls">
          {moves.map(move => (
            <button
              key={move}
              onClick={() => play(move)}
              className="action-btn"
            >
              <span className="btn-emoji">{emojis[move]}</span>
              <span className="btn-text">
                {move.charAt(0).toUpperCase() + move.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;