import CountdownClock from "../components/CountdownClock.jsx";
import DifficultySelectorForm from "../components/DifficultySelectorForm.jsx";
import { useEffect, useState } from "react";
import { getTestText } from "../../utils.js";
import "./HomePage.css";

function Home() {
  const [difficulty, setDifficulty] = useState(null);
  const [text, setText] = useState("You're test will appear here");
  const [testOver, setTestOver] = useState(false);

  useEffect(() => {
    const testObj = getTestText(difficulty);
    if (getTestText(difficulty) !== undefined) setText(testObj.text);
  }, [difficulty]);

  return (
    <div className="home-container">
      <h1>Typing Test</h1>
      <p>
        Select the difficulty and then start. The test will start immediately.
      </p>
      <DifficultySelectorForm setDifficulty={setDifficulty} />
    </div>
  );
}

export default Home;
