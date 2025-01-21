import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DifficultySelectorForm = ({ setDifficulty }) => {
  const [activeButton, setActiveButton] = useState(null);
  const difficulties = ["easy", "medium", "hard"];
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setDifficulty(difficulties[activeButton]);
    navigate(`test/${difficulties[activeButton]}`);
  };

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <form onSubmit={handleSubmit} className="difficultyButtonContainer">
      {difficulties.map((difficulty, index) => (
        <button
          type="button"
          key={index}
          onClick={() => handleClick(index)}
          className={`button ${activeButton === index ? "clicked" : ""}`}
        >
          {difficulty}
        </button>
      ))}
      <button
        type="submit"
        className="button submit-button"
        disabled={activeButton === null}
      >
        Start
      </button>
    </form>
  );
};

export default DifficultySelectorForm;
