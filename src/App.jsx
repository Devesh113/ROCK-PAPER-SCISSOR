import { useState } from "react";

function App() {

  const [userMove, setUserMove] = useState("rock");
  const [compMove, setCompMove] = useState("rock");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const moves = ["rock", "paper", "scissor"];

  const emojis = {
    rock: "🪨",
    paper: "📃",
    scissor: "✂"
  };

  function play(move) {

    const comp = moves[Math.floor(Math.random() * 3)];

    setUserMove(move);
    setCompMove(comp);

    if (move === comp) return;

    const win =
      (move === "rock" && comp === "scissor") ||
      (move === "paper" && comp === "rock") ||
      (move === "scissor" && comp === "paper");

    if (win) {
      setUserScore(prev => prev + 1);
    } else {
      setCompScore(prev => prev + 1);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>Computer : You</h1>

      <h2>
        {emojis[compMove]} : {emojis[userMove]}
      </h2>

      <p>Computer Score: {compScore}</p>
      <p>Your Score: {userScore}</p>

      <div style={{ marginTop: "20px" }}>
        {moves.map(move => (
          <button
            key={move}
            onClick={() => play(move)}
            style={{ fontSize: "30px", margin: "10px" }}
          >
            {emojis[move]}
          </button>
        ))}
      </div>

    </div>
  );
}

export default App;