import { InView, useInView } from 'react-intersection-observer';

const LightningFast = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  return (
    <InView>
      <section
        ref={ref}
        className={`max-w-screen flex max-h-screen min-h-screen snap-center flex-col items-center justify-center gap-8`}
      >
        <div
          className={`${
            inView ? 'animate-lightning' : 'invisible scale-x-0'
          } transform-gpu bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text text-center text-6xl font-black uppercase text-transparent transition-transform sm:block`}
        >
          Lynrask
          <br className="sm:hidden" /> ytelse
        </div>
        <p
          className={`${
            inView
              ? 'opacity-100 delay-[1900ms] duration-[400ms] ease-in'
              : 'opacity-0'
          } text-center text-xl font-thin italic sm:text-2xl lg:text-3xl`}
        >
          Jeg kan ta deg fra start til slutt
          <br />-{' '}
          <span className="bg-gradient-to-br from-sky-300 to-blue-400 bg-clip-text px-1 font-normal text-transparent">
            backend
          </span>{' '}
          til{' '}
          <span className="bg-gradient-to-br from-blue-400 to-blue-500 bg-clip-text px-1 font-normal text-transparent">
            frontend
          </span>{' '}
          -
          <br />
          for best mulig sluttresultat
        </p>
      </section>
    </InView>
  );
};

export default LightningFast;
