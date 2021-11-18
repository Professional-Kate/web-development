import React from "react";

const PlayerScore = (props) => {
  return (
    <div id="score-container">
      {props.scores.map((score) => (
        <div
          key={score.n + "'s-container"}
          className="p-3 mt-3 border border-info border-5"
        >
          <h3 key={score.n + "'s-score"} className="text-center">
            "{score.n}" : <span className="text-primary">{score.s}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PlayerScore;
