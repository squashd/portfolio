import { useEffect, useState } from "react";

import wordlist from "../assets/words.json";

const useWordList = () => {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordlist.length);
    console.log(wordlist[randomIndex]);
    setSolution(wordlist[randomIndex]);
  }, []);

  return { solution, wordlist };
};

export default useWordList;
