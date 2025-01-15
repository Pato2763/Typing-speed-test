import useKeyPress from "./hooks/useKeyPress";
import { useState, useEffect } from "react";

const KeyPressTest = () => {
  const [charsTyped, setChrsTyped] = useState([]);

  useKeyPress((key) => {
    console.log(charsTyped, key);
    if (key != "Backspace") {
      console.log("here");
      setChrsTyped((prevCharsTyped) => [...prevCharsTyped, key]);
    } else {
      setChrsTyped((prevChrsTyped) =>
        prevChrsTyped.filter((_, i) => i != prevChrsTyped.length - 1)
      );
    }
  });

  return <p>{charsTyped}</p>;
};

export default KeyPressTest;
