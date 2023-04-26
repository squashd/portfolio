import { useEffect, useState } from 'react';

const ScrollDownIndicator = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const element = document.querySelector('.overflow-scroll');
    let bottom: boolean;

    const handleScroll = () => {
      if (element)
        bottom =
          element?.scrollHeight - element?.scrollTop <
          element?.clientHeight + 300;

      if (bottom) setIsHidden(true);
      else setIsHidden(false);
    };

    if (element) element.addEventListener('scroll', handleScroll);

    return () => element?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          isHidden ? 'opacity-0' : 'opacity-1'
        } duration-[500ms] delay-300 absolute bottom-4 flex w-full transform items-center justify-center transition-opacity ease-out`}
      >
        <div
          className={
            'flex aspect-square w-12  animate-bounce items-center justify-center rounded-full border bg-blue-500 p-2'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="aspect-square w-6 fill-blue-50"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollDownIndicator;
