'use client'
import { InView, useInView } from 'react-intersection-observer';

const ResponsiveDesign = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  return (
    <InView>
      <section
        ref={ref}
        className={`max-w-screen flex max-h-screen min-h-screen snap-center flex-col items-center justify-center`}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute flex flex-col items-center text-center lg:flex-row lg:text-left">
            <div
              className={`${
                inView
                  ? 'after:opacity-1 flex flex-col delay-200 duration-[1200ms] after:transition after:delay-[1200ms] after:duration-[800ms] after:ease-in'
                  : '-translate-y-32 translate-x-0 opacity-0 after:opacity-0 lg:-translate-x-32 lg:translate-y-0'
              } relative transform bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text pb-4 text-5xl font-black uppercase text-transparent transition after:fixed after:bottom-0 after:h-0 after:w-full after:transform-gpu after:border lg:border-b-0 lg:pb-0 lg:pr-4 lg:after:right-0 lg:after:h-full lg:after:w-0`}
            >
              Responsiv design
            </div>
            <div>
              <div
                className={`${
                  inView ? 'align-center flex flex-col' : 'invisible'
                } whitespace-nowrap pt-4 text-4xl font-thin uppercase lg:pl-4 lg:pt-0`}
              >
                <div
                  className={`${
                    inView
                      ? 'opacity-1 translate-x-0 delay-[700ms] duration-[1200ms]'
                      : ' translate-x-80 opacity-0'
                  } transform transition`}
                >
                  Som ser bra ut
                </div>
                <div
                  className={`${
                    inView
                      ? 'opacity-1 translate-x-0 delay-[1300ms] duration-[1200ms]'
                      : 'translate-x-80 opacity-0'
                  } transform transition`}
                >
                  på alle enheter
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InView>
  );
};

export default ResponsiveDesign;
