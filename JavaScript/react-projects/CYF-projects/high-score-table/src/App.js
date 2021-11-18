import HighScoreTable from "./modules/HighScoreTable";
import allCountryScores from "./data/scores";

function App() {
  return (
    <div className="d-flex justify-content-center p-3">
      <HighScoreTable scores={allCountryScores} />
    </div>
  );
}

export default App;
