import Image from 'next/image';
import { InView, useInView } from 'react-intersection-observer';

import profilePic from 'public/images/profile.jpg';

const Intro = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  return (
    <InView>
      <section
        ref={ref}
        className={`${
          inView ? 'opacity-100' : 'opacity-0'
        } max-w-screen flex max-h-screen min-h-screen transform snap-center flex-col items-center justify-center gap-4`}
      >
        <div
          className={`${
            inView ? 'translate-0' : '-translate-x-[25vw] opacity-0'
          } aspect-square w-48 transform overflow-hidden rounded-full duration-[1200ms] ease-out`}
        >
          <Image src={profilePic} alt={'Profile picture'} />
        </div>

        <div
          className={`${
            inView ? 'translate-0 opacity-100' : '-translate-x-[25vw] opacity-0'
          } transform text-center text-4xl font-bold duration-[1200ms] ease-[cubic-bezier(0.45,-0.45,0.25,1.75)] sm:text-5xl`}
        >
          <span>
            Fullstack-
            <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent">
              utvikler
            </span>
          </span>
          <br />
          med <span className="text-sky-300">full</span>{' '}
          <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent">
            kontroll.
          </span>
        </div>
        <div
          className={`${
            inView ? 'translate-0 opacity-100' : 'translate-x-[25vw] opacity-0'
          } mt-8 transform whitespace-nowrap text-center text-lg font-thin italic duration-[1200ms] ease-[cubic-bezier(0,0,0.5,1.5)] sm:text-2xl lg:text-3xl`}
        >
          <p>
            Jeg leverer applikasjoner og nettsider
            <br />
            tilpasset dine unike behov.
          </p>
        </div>
      </section>
    </InView>
  );
};

export default Intro;
