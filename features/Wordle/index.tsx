"use client";
import { useEffect, useState } from "react";

import GuessRow from "./components/GuessRow";
import Keyboard from "./components/Keyboard";
import useWordList from "./hooks/useWordList";
import Message from "./components/Message";

const VALID_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
const VALID_INPUTS = ["backspace", "enter"];
const VALID_KEYS = [...VALID_LETTERS, ...VALID_INPUTS];

const Wordle = () => {
  const [guessArray, setGuessArray] = useState<string[]>(["", "", "", "", ""]);
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [messageStack, setMessageStack] = useState<string[]>([]);
  const [shake, setShake] = useState(false);

  const { solution, wordlist } = useWordList();

  useEffect(() => {
    const handleKeyInput = async (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (paused) return;
      if (gameOver) return;
      if (!VALID_KEYS.includes(key)) return;

      if (key === "enter") return handleSubmit();
      if (key === "backspace") return handleBackspace();
      if (VALID_LETTERS.includes(key)) return handleValidLetter(key);
    };

    const handleValidLetter = (key: string) => {
      if (guessArray[currentGuessIndex].length === 5) return;
      let guessString = guessArray[currentGuessIndex];
      guessString += key;
      let mutatedArray = guessArray.slice();
      mutatedArray[currentGuessIndex] = guessString;
      setGuessArray(mutatedArray);
    };
    const handleBackspace = () => {
      if (guessArray[currentGuessIndex].length === 0) return;
      let guessString = guessArray[currentGuessIndex];
      guessString = guessString.slice(0, -1);
      let mutatedArray = guessArray.slice();
      mutatedArray[currentGuessIndex] = guessString;
      setGuessArray(mutatedArray);
    };
    const handleSubmit = async () => {
      if (guessArray[currentGuessIndex].length !== 5)
        return handleNotLongEnough();

      if (!wordlist.includes(guessArray[currentGuessIndex]))
        return handleInvalidWord();

      if (guessArray[currentGuessIndex] === solution) setGameOver(true);

      setCurrentGuessIndex(currentGuessIndex + 1);
      await handlePause();
    };
    const handleNotLongEnough = () => {
      let tempArray = messageStack.slice();
      tempArray.push("Not long enough");
      setMessageStack(tempArray);
    };

    const handleInvalidWord = () => {
      let tempArray = messageStack.slice();
      tempArray.push("Invalid word");
      setMessageStack(tempArray);
      handleShake();
    };
    const handleShake = async () => {
      await startShake();
      await endShake();
    };
    const startShake = async () => {
      setShake(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
    };
    const endShake = async () => {
      setShake(false);
    };
    const handlePause = async () => {
      await startPause();
      await endPause();
    };
    const startPause = async () => {
      setPaused(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };
    const endPause = async () => {
      setPaused(false);
    };

    window.addEventListener("keydown", handleKeyInput);

    return () => {
      window.removeEventListener("keydown", handleKeyInput);
    };
  }, [
    currentGuessIndex,
    gameOver,
    guessArray,
    messageStack,
    paused,
    shake,
    solution,
    wordlist,
  ]);

  const handlePause = async () => {
    await startPause();
    await endPause();
  };
  const startPause = async () => {
    setPaused(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };
  const endPause = async () => {
    setPaused(false);
  };

  const handleKeyInput = async (key: string) => {
    if (gameOver) return;
    if (!VALID_KEYS.includes(key)) return;

    if (key === "enter") return handleSubmit();
    if (key === "backspace") return handleBackspace();
    if (VALID_LETTERS.includes(key)) return handleValidLetter(key);
  };

  const handleValidLetter = (key: string) => {
    if (paused) return;
    if (guessArray[currentGuessIndex].length === 5) return;
    let guessString = guessArray[currentGuessIndex];
    guessString += key;
    let mutatedArray = guessArray.slice();
    mutatedArray[currentGuessIndex] = guessString;
    setGuessArray(mutatedArray);
  };
  const handleBackspace = () => {
    if (guessArray[currentGuessIndex].length === 0) return;
    let guessString = guessArray[currentGuessIndex];
    guessString = guessString.slice(0, -1);
    let mutatedArray = guessArray.slice();
    mutatedArray[currentGuessIndex] = guessString;
    setGuessArray(mutatedArray);
  };
  const handleSubmit = async () => {
    blur();
    if (guessArray[currentGuessIndex].length !== 5)
      return handleNotLongEnough();

    if (!wordlist.includes(guessArray[currentGuessIndex]))
      return handleInvalidWord();

    if (guessArray[currentGuessIndex] === solution) setGameOver(true);

    setCurrentGuessIndex(currentGuessIndex + 1);
    handlePause();
  };
  const handleNotLongEnough = () => {
    let tempArray = messageStack.slice();
    tempArray.push("Not long enough");
    setMessageStack(tempArray);
  };

  const handleInvalidWord = () => {
    let tempArray = messageStack.slice();
    tempArray.push("Invalid word");
    setMessageStack(tempArray);
    handleShake();
  };
  const handleShake = async () => {
    await startShake();
    await endShake();
  };
  const startShake = async () => {
    setShake(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
  };
  const endShake = async () => {
    setShake(false);
  };

  return (
    <>
      <section className="flex h-full flex-col items-center justify-center gap-4">
        <div className="relative h-2 w-40 flex-col items-center justify-center">
          {messageStack.map((message, index) => {
            return <Message key={index} text={message} />;
          })}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-black capitalize text-gray-200">
            Hello Wordle
          </h1>
          <h2 className="text-gray-200">Guess the 5-letter word</h2>
        </div>
        <div className="flex w-full flex-col gap-1">
          {guessArray.map((value: string, index: number) => {
            return (
              <GuessRow
                key={index}
                value={value}
                solution={solution}
                submitted={index < currentGuessIndex}
                shake={shake && index === currentGuessIndex}
              />
            );
          })}
        </div>
        <Keyboard handleKeyInput={handleKeyInput} />
      </section>
    </>
  );
};

export default Wordle;
