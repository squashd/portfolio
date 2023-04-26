import Image from 'next/image';
import { InView, useInView } from 'react-intersection-observer';

import profilePicUnsaturated from 'public/images/profile.jpg';
import profilePicColor from 'public/images/profile_colour.jpeg';

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
          } group relative aspect-square w-48 transform overflow-hidden rounded-3xl duration-[1200ms] ease-out`}
        >
          <Image
            src={profilePicUnsaturated}
            alt={'Profile picture'}
            className="opacity-100 absolute transition duration-500 group-hover:opacity-0"
          />
          <Image
            src={profilePicColor}
            alt={'Profile picture'}
            className="opacity-0 absolute transition duration-500 group-hover:opacity-100"
          />
          
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
