import { InView, useInView } from 'react-intersection-observer';
import logo from '/public/squashd.svg';
import Image from 'next/image';

const Squashd = () => {
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
        <div className="flex justify-center gap-8 items-center">
          <Image src={logo} alt={'Squashd logo'} />
          <div>|</div>
          <div>Daniel Hjartland</div>
        </div>
      </section>
    </InView>
  );
};

export default Squashd;
