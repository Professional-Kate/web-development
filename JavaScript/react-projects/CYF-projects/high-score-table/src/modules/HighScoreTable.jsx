import React from "react";
import PlayerScore from "./PlayerScore";
import WorldWideScores from "./WorldWideScores";

const HighScoreTableSection = (props) => {
  return (
    <div
      id={props.name + "'s-container"}
      className="card p-3 my-5 border-secondary border-3"
    >
      <h2 className="m-auto pb-4">{props.name}</h2>
      <PlayerScore scores={props.scores} />
    </div>
  );
};

const HighScoreTable = (props) => {
  const sortedPlaces = props.scores.sort((first, second) =>
    first.name > second.name ? 1 : second.name > first.name ? -1 : 0
  );

  return (
    <div id="high-score-table" className="border border-primary rounded p-5">
      <h1 id="first-header" className="display-2">
        High Scores per Country
      </h1>
      <div id="country-container">
        {/* sorts the countries then maps that array to different elements */}

        <WorldWideScores allScores={props} />

        {sortedPlaces.map((country) => (
          <HighScoreTableSection
            name={country.name}
            scores={country.scores}
            key={country.name + "'s-container"}
          />
        ))}
      </div>
    </div>
  );
};
export default HighScoreTable;

// at every iteration of making the player scores, pass that DOM node into a new component which adds onto the World Wide scores
