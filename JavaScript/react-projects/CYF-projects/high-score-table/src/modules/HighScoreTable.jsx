import React from "react";
import PlayerScore from "./PlayerScore";

const WorldWideScores = ({ allScores }) => {
  // making this because it's easier than writing allScores.scores every time
  const scores = allScores.scores;
  let personsScores = [];

  // only gets the score and name pairs from the nested object
  for (let i = 0; i < scores.length; i++) {
    for (let k = 0; k < scores[i].scores.length; k++)
      personsScores.push(scores[i].scores[k]);
  }

  return (
    <div
      className="card p-3 my-5 border-secondary border-3"
      id="world-wide-container"
    >
      <h2 className="m-auto pb-4">World Wide!</h2>

      {/* sort the whole person object then map that to add elements to the DOM */}
      {personsScores
        .sort((first, second) =>
          first.s < second.s ? 1 : second.s < first.s ? -1 : 0
        )
        .map((person) => (
          <div
            key={person.n + "'s-container"}
            className="p-3 mt-3 border border-info border-5"
          >
            <h3 key={person.n + "'s-score"} className="text-center">
              "{person.n}" : <span className="text-primary">{person.s}</span>
            </h3>
          </div>
        ))}
    </div>
  );
};

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
