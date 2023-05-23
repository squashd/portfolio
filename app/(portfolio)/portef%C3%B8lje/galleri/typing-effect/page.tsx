"use client";
import { useEffect } from "react";

const WORDS_ARRAY = [
  "Jeg skulle gjerne hatt en ny betalingsløsning. [Redacted] har økt prisene sine.",
  "Vi trenger en ny nettside for bandet vårt.",
  "Jeg vil ha hjelp med å sette opp en ny nettbutikk. Kan du fikse det?",
  "Vi trenger en mobilapplikasjon for å...",
  "Jeg skulle hatt en program som automatisk setter opp stigespill for klubben vår.",
  "Vi sliter med å få til en god brukeropplevelse på nettsiden vår.",
];
const WRITING_ANIMATION_PAUSE = 50;
const BACKSPACE_ANIMATION_PAUSE = 10;
const ANIMATION_BREAK_PAUSE = 1000;
const ANIMATION_SHORT_BREAK_PAUSE = 250;
const WORDS_ARRAY_LENGTH = WORDS_ARRAY.length;

export default function Page() {
  const pause = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const container = document.querySelector(".typing")!;

    const typeWord = async (word: string) => {
      if (container.textContent) container.textContent = "";
      const wordArray = word.split("");
      for (let i = 0; i < wordArray.length; i++) {
        container.textContent = `${container.textContent}${wordArray[i]}`;
        await pause(WRITING_ANIMATION_PAUSE);
      }
    };
    const removeWord = async (word: string) => {
      for (let i = 0; i < word.length; i++) {
        container.textContent = container.textContent!.slice(0, -1);
        await pause(BACKSPACE_ANIMATION_PAUSE);
      }
    };

    const startAnimation = async (wordsArray: string[]) => {
      for (let i = 0; i < WORDS_ARRAY_LENGTH; i++) {
        let word = wordsArray[i];
        await typeWord(word);
        await pause(ANIMATION_BREAK_PAUSE);
        await removeWord(word);
        await pause(ANIMATION_SHORT_BREAK_PAUSE);
      }
    };
    const getIntervalDuration = (wordsArray: String[]) => {
      let intervalDuration = 0;
      for (let i = 0; i < WORDS_ARRAY_LENGTH; i++) {
        let word = wordsArray[i];
        intervalDuration +=
          word.length *
            (WRITING_ANIMATION_PAUSE + BACKSPACE_ANIMATION_PAUSE + 10) +
          ANIMATION_BREAK_PAUSE * 2;
      }
      return intervalDuration + 300;
    };
    const syncAnimaton = () => {
      const intervalDuration = getIntervalDuration(WORDS_ARRAY);
      startAnimation(WORDS_ARRAY);
      setInterval(() => {
        startAnimation(WORDS_ARRAY);
      }, intervalDuration);
    };

    syncAnimaton();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skrivemaskin effekt
          </h1>
          <p className="mt-6 text-base">
            Inspirert av nettsidene til{" "}
            <a
              href={"https://www.dintero.com/"}
              className="group relative inline-block text-color transition duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              dintero
              <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
            </a>
            .
          </p>
        </header>
        <section className="py-12">
          <div className="mx-auto max-w-5xl">
            <div className="typing h-96 w-full rounded-lg border-2 border-zinc-600 bg-zinc-800 p-4 font-mono text-xl font-thin text-slate-50 after:inline after:animate-blink after:content-['|']"></div>
          </div>
        </section>
      </div>
    </>
  );
}
