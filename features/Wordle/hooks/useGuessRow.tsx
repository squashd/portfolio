import { useEffect, useState } from "react";

type Props = {
  value: string;
  solution: string;
  submitted: boolean;
};

const useGuessRow = ({ value, solution, submitted }: Props) => {
  const [colors, setColors] = useState<string[]>(["", "", "", "", ""]);
  const [splitWordArray, setSplitWordArray] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    if (!submitted) return;

    const setColorArrays = async () => {
      const tempArray = value.split("");
      const solutionArray = solution.split("");
      let tempColor: string;

      for (let i = 0; i < 5; i++) {
        if (tempArray[i] === solutionArray[i]) {
          tempColor = "green";
        } else if (solutionArray.includes(tempArray[i])) {
          tempColor = "yellow";
        } else {
          tempColor = "gray";
        }
        setColors((prev) => {
          let temp = prev.slice();
          temp[i] = tempColor;
          return temp;
        });
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    };

    setColorArrays();
  }, [submitted, value, solution]);

  useEffect(() => {
    const tempArray = value.split("");
    while (tempArray.length < 5) tempArray.push("");
    setSplitWordArray(tempArray);
  }, [value]);

  return { colors, splitWordArray };
};

export default useGuessRow;
