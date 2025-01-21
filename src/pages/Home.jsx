import CountdownClock from "../components/CountdownClock.jsx";
import DifficultySelectorForm from "../components/DifficultySelectorForm.jsx";
import { useEffect, useState } from "react";
import { getTestText } from "../../utils.js";

function Home() {
  const [difficulty, setDifficulty] = useState(null);
  const [text, setText] = useState("You're test will appear here");
  const [testOver, setTestOver] = useState(false);

  useEffect(() => {
    const testObj = getTestText(difficulty);
    if (getTestText(difficulty) !== undefined) setText(testObj.text);
  }, [difficulty]);

  return (
    <>
      <p>home</p>
      {difficulty ? (
        <CountdownClock setTestOver={setTestOver} />
      ) : (
        <DifficultySelectorForm setDifficulty={setDifficulty} />
      )}
    </>
  );
}

export default Home;
