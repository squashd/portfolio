const TOP_ROW = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const MIDDLE_ROW = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const BOTTOM_ROW = ["z", "x", "c", "v", "b", "n", "m"];
export const VALID_KEYS = [
  "enter",
  "backspace",
  ...TOP_ROW,
  ...MIDDLE_ROW,
  ...BOTTOM_ROW,
];

type KeyboardProps = {
  handleKeyInput: (letter: string) => void;
};

const Keyboard = ({ handleKeyInput }: KeyboardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex w-full items-center justify-center gap-1">
        {TOP_ROW.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleKeyInput(letter)}
            className="aspect-square h-8 rounded-lg border border-zinc-600 bg-zinc-800 uppercase hover:bg-zinc-700 sm:h-12"
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex w-full items-center justify-center gap-1">
        {MIDDLE_ROW.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleKeyInput(letter)}
            className="aspect-square h-8 rounded-lg border border-zinc-600 bg-zinc-800 uppercase hover:bg-zinc-700 sm:h-12"
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex w-full items-center justify-center gap-1">
        <button
          onClick={() => handleKeyInput("enter")}
          className="h-8 w-16 rounded-lg border border-zinc-600 bg-zinc-800 uppercase hover:bg-zinc-700 sm:h-12"
        >
          ENTER
        </button>
        {BOTTOM_ROW.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleKeyInput(letter)}
            className="aspect-square h-8 rounded-lg border border-zinc-600 bg-zinc-800 uppercase hover:bg-zinc-700 sm:h-12"
          >
            {letter}
          </button>
        ))}
        <button
          onClick={() => handleKeyInput("backspace")}
          className="flex h-8 w-12 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800 uppercase hover:bg-zinc-700 sm:h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="game-icon"
            fill="currentColor"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
