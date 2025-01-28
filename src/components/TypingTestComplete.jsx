import { useNavigate } from "react-router-dom";
import "../pages/TestPage.css";
const TypingTestComplete = ({
  accuracy,
  wpm,
  mistakes,
  setTestComplete,
  setTimeLeft,
  setAccuracy,
  setWpm,
  setMistakes,
}) => {
  const navigate = useNavigate();

  const goBackClick = () => {
    navigate(-1);
  };

  const tryAgainClick = () => {
    setTestComplete(false);
    window.location.reload();
  };
  return (
    <div className="stats-finished-container">
      <p>
        Mistakes: <span className="bold">{mistakes}</span>
      </p>
      <p>
        Accuracy: <span className="bold">{accuracy}%</span>
      </p>
      <p>
        WPM: <span className="bold">{wpm}</span>
      </p>
      <div className="buttons-container">
        <button onClick={goBackClick} className="button">
          Go Back
        </button>
        <button onClick={tryAgainClick} className="button">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default TypingTestComplete;
