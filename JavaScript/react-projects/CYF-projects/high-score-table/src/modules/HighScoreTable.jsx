import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
  return (
    <div id="high-score-table" className="border border-primary rounded p-5">
      <h1 id="first-header" className="display-2">
        High Scores per Country
      </h1>
      <div id="country-container">
        {props.scores.map((country) => (
          <div
            key={country.name + "-container"}
            className="card p-3 my-5 border-secondary border-3"
          >
            <h2 key={country.name + "-header"} className="m-auto pb-4">
              <span className="text-uppercase">High Scores:</span>{" "}
              {country.name}
            </h2>
            <PlayerScore scores={country.scores} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighScoreTable;
