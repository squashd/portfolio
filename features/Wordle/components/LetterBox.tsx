type props = {
  letter: string;
  color: string;
};

const LetterBox = ({ letter, color }: props) => {
  let classNameString = "text-neutral-50 bg-zinc-800";

  if (color === "gray")
    classNameString = "bg-gray-300 text-gray-700 animate-flip";
  if (color === "green")
    classNameString = "bg-green-300 text-gray-700 animate-flip";
  if (color === "yellow")
    classNameString = "bg-yellow-300 text-gray-700 animate-flip";

  return (
    <>
      <div
        className={`flex aspect-square w-14 items-center justify-center rounded-md border border-zinc-600 text-2xl font-bold uppercase ${classNameString}`}
      >
        {letter}
      </div>
    </>
  );
};

export default LetterBox;
