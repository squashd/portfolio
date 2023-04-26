'use client';
import { useEffect } from 'react';

const WORDS_ARRAY = [
  'Jeg skulle gjerne hatt en ny betalingsløsning. [Redacted] har økt prisene sine.',
  'Vi trenger en ny nettside for bandet vårt.',
  'Jeg vil ha hjelp med å sette opp en ny nettbutikk. Kan du fikse det?',
  'Vi trenger en mobilapplikasjon for å...',
  'Jeg skulle hatt en program som automatisk setter opp stigespill for klubben vår.',
  'Vi sliter med å få til en god brukeropplevelse på nettsiden vår.',
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
    const container = document.querySelector('.typing')!;

    const typeWord = async (word: string) => {
      if (container.textContent) container.textContent = '';
      const wordArray = word.split('');
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
      <main className="h-screen w-screen">
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <h1>Skrivemaskin effekt</h1>
          <div>
            <p className="text-xl">
              En effekt inspirert av{' '}
              <a href="https://www.dintero.no" target="_blank">
                <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text font-bold duration-300 ease-out hover:text-transparent">
                  Dintero
                </span>
              </a>{' '}
              sine sider
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text text-5xl font-black uppercase text-transparent">
            Hva kan jeg
            <br />
            hjelp deg med?
          </div>
          <div className="relative flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-blue-700 p-1">
            <div className="typing h-full w-96 whitespace-pre-wrap rounded-xl border-transparent bg-neutral-800 bg-clip-border p-4 font-mono text-xl font-thin after:inline after:animate-blink after:content-['|']"></div>
          </div>
        </div>
      </main>
    </>
  );
}
