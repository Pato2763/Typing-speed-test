import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getTestText } from "../../utils";

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

  useEffect(() => {
    console.log("here 2");
    setText(getTestText(difficulty).text);
    setLoading(false);
    console.log(inputRef.current);
  }, []);

  useEffect(() => {
    if (inputRef.current !== null) {
      console.log(inputRef);
      inputRef.current.focus();
    }
  }, [loading]);

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
    <div>
      <p>test page</p>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <input
            type="text"
            className="typing-input"
            ref={inputRef}
            onChange={inputChange}
          />
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`${charIndex === index ? "active-text" : ""} ${
                correctWrongChars[index]
              }`}
              ref={(e) => (charRefs.current[index] = e)}
            >
              {char}
            </span>
          ))}
          <p>{mistakes}</p>
        </div>
      )}
    </div>
  );
};

export default TestPage;
