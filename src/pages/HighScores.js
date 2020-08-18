import React, { useState, useEffect } from "react";

export default function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.error(err);
      }
    };
    loadHighScores();
  }, []);

  return (
    <>
      <h1>High Scores</h1>
      <ul>
        {highScores.map((result) => (
          <li>
            {result.fields.name} - {result.fields.score}
          </li>
        ))}
      </ul>
    </>
  );
}
