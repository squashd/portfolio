"use client";
import { useInView } from "react-intersection-observer";

const LightningFast = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="my-12 flex h-full snap-center flex-col items-center justify-center gap-8"
    >
      <div
        className={`${
          inView ? "animate-lightning" : "invisible"
        } w-full bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text text-center text-6xl font-black uppercase text-transparent transition-transform sm:block`}
      >
        Lynrask
        <br className="sm:hidden" /> ytelse
      </div>
    </section>
  );
};

export default LightningFast;
