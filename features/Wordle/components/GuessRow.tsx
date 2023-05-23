import LetterBox from './LetterBox';
import useGuessRow from '../hooks/useGuessRow';

type Props = {
  value: string;
  solution: string;
  submitted: boolean;
  shake: boolean;
};

const GuessRow = ({ value, solution, submitted, shake }: Props) => {
  const { colors, splitWordArray } = useGuessRow({
    value,
    solution,
    submitted,
  });

  let shakeAnimation = '';
  if (shake) shakeAnimation = 'animate-shake';

  return (
    <div
      className={`flex gap-1 w-full items-center justify-center ${shakeAnimation}`}
    >
      {splitWordArray.map((item, index) => (
        <LetterBox key={index} letter={item} color={colors[index]} />
      ))}
    </div>
  );
};

export default GuessRow;
