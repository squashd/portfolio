"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const processingStatesClassNameMap = {
  PENDING: "bg-zinc-500",
  PROCESSING: "bg-yellow-500",
  DONE: "bg-green-500",
  ERROR: "bg-red-500",
};
const OrderExample = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingState, setProcessingState] = useState<
    "PROCESSING" | "PENDING" | "DONE" | "ERROR"
  >("PENDING");
  const [processingStateClassName, setProcessingStateClassName] = useState(
    processingStatesClassNameMap[processingState]
  );

  const handleProcessing = async (): Promise<void> => {
    setIsProcessing(true);
    setProcessingState("PROCESSING");
    setProcessingStateClassName(processingStatesClassNameMap["PROCESSING"]);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setProcessingState("DONE");
    setProcessingStateClassName(processingStatesClassNameMap["DONE"]);
    setIsProcessing(false);
  };

  return (
    <table className="min-w-full border-separate border-spacing-0">
      <thead>
        <tr>
          <th
            scope="col"
            className="top-0 z-10 border-b border-zinc-300 py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 lg:pl-8"
          >
            <div className="flex w-32 items-center justify-center p-2">
              Print Status
            </div>
          </th>
          <th
            scope="col"
            className="top-0 z-10 table-cell border-b border-zinc-300 px-3 py-3.5 text-left text-sm font-semibold"
          >
            ID
          </th>
          <th
            scope="col"
            className="top-0 z-10 hidden border-b border-zinc-300 px-3 py-3.5 text-left text-sm font-semibold lg:table-cell"
          >
            Product
          </th>
          <th
            scope="col"
            className="top-0 z-10 hidden border-b border-zinc-300 px-3 py-3.5 text-left text-sm font-semibold md:table-cell"
          >
            Quantity
          </th>
          <th
            scope="col"
            className="top-0 z-10 hidden border-b border-zinc-300 px-3 py-3.5 text-left text-sm font-semibold md:table-cell"
          >
            Price
          </th>
          <th
            scope="col"
            className="top-0 z-10 border-b border-zinc-300 py-3.5 pl-3"
          >
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 lg:pl-8">
            <div
              className={`${processingStateClassName} flex h-9 w-32 cursor-default items-center justify-center rounded-lg p-2 font-bold`}
            >
              <span className="bold uppercase text-white">
                {processingState}
              </span>
            </div>
          </td>
          <td className="px-3 py-4 text-sm">1</td>
          <td className="hidden whitespace-nowrap px-3 py-4 text-sm lg:table-cell">
            <div className="">Minilapper</div>
          </td>
          <td className="hidden whitespace-nowrap px-3 py-4 text-sm md:table-cell">
            1
          </td>
          <td className="hidden whitespace-nowrap px-3 py-4 text-sm md:table-cell">
            149
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 text-right text-sm font-medium">
            <div className="flex w-28 items-center justify-center">
              <Button
                size="sm"
                onClick={() => void handleProcessing()}
                disabled={isProcessing}
                className={cn(
                  "w-full rounded-lg bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                )}
              >
                {isProcessing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className={cn("aspect-square w-4 animate-spin text-white")}
                  >
                    <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                  </svg>
                ) : (
                  "Lag Trykkark"
                )}
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderExample;
