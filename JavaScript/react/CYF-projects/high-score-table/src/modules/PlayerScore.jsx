import React from "react";

const PlayerScore = (props) => {
  const sortedScores = props.scores.sort((first, second) =>
    first.s < second.s ? 1 : second.s < first.s ? -1 : 0
  );

  return (
    <div id="score-container">
      {sortedScores.map((score) => (
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
