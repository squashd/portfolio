import { useState } from 'react';

type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  const [show, setShow] = useState(true);
  let classNameString = 'hidden';
  if (show) classNameString = 'animate-fadeaway';

  setTimeout(() => {
    setShow(false);
  }, 1500);

  return (
    <div
      className={`fixed flex -translate-y-12 my-2 items-center justify-center font-black capitalize text-l text-gray-900 bg-neutral-200 p-2 rounded-xl w-40 ${classNameString}`}
    >
      {text}
    </div>
  );
};

export default Message;
