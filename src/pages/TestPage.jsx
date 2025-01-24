import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getTestText } from "../../utils";
import CountdownClock from "../components/CountdownClock";
import { getAccuracy, getWpm } from "../../test-page-calculations";
import "./TestPage.css";
import Modal from "@mui/material/Modal";

const TestPage = () => {
  const inputRef = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const charRefs = useRef([]);
  const [correctWrongChars, setCorrectWrongChars] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [prevTyped, setPrevTyped] = useState("");
  const { difficulty } = useParams();
  const [text, setText] = useState("sample");
  const [loading, setLoading] = useState(true);
  const [testOver, setTestOver] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    setText(getTestText(difficulty).text);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [loading]);

  useEffect(() => {
    setAccuracy(getAccuracy(correctWrongChars));
    setWpm(getWpm(correctWrongChars.length, timeLeft));
  }, [correctWrongChars]);

  const inputChange = (e) => {
    const characters = charRefs.current;
    let currentChar = charRefs.current[charIndex];
    let typedChars = e.target.value;

    if (typedChars.length < prevTyped.length) {
      setCharIndex(charIndex - 1);
      setCorrectWrongChars(
        correctWrongChars.slice(0, correctWrongChars.length - 1)
      );
    } else if (charIndex < characters.length) {
      setCharIndex(charIndex + 1);
      const typedChar = typedChars.slice(-1);
      if (typedChar === currentChar.textContent) {
        setCorrectWrongChars([...correctWrongChars, "correct-text"]);
      } else {
        setCorrectWrongChars([...correctWrongChars, "incorrect-text"]);
        setMistakes(mistakes + 1);
      }
    }
    setPrevTyped(typedChars);
  };

  return (
    <div className="test-container">
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="text-container">
          <input
            type="text"
            className="typing-input"
            ref={inputRef}
            onChange={inputChange}
          />
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`test-text ${
                charIndex === index ? "active-text" : ""
              } ${correctWrongChars[index]}`}
              ref={(e) => (charRefs.current[index] = e)}
            >
              {char}
            </span>
          ))}
          <div className="stats-container">
            <CountdownClock
              setTestOver={setTestOver}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
            />
            <p>
              Mistakes: <span className="bold">{mistakes}</span>
            </p>
            <p>
              Accuracy: <span className="bold">{accuracy}%</span>
            </p>
            <p>
              WPM: <span className="bold">{wpm}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
