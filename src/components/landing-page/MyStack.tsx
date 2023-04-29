"use client";
import { useInView } from "react-intersection-observer";

const MyStack = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className={`max-w-screen flex max-h-screen min-h-screen snap-center flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center lg:flex-row">
          <div
            className={`${
              inView
                ? "scale-y-100 lg:scale-x-100"
                : "scale-y-0 lg:scale-x-0 lg:scale-y-100"
            } transform-gpu border-b border-white bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text pb-4 text-center text-6xl font-black uppercase text-transparent transition-transform duration-[1200ms] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4 lg:text-left`}
          >
            Moderne
            <br />
            stack
          </div>
          <div
            className={`${
              inView
                ? "opacity-100 delay-[700ms] duration-[900ms] "
                : "opacity-0"
            } flex flex-col pt-4 text-center text-3xl font-thin transition lg:pl-4 lg:pt-0 lg:text-left`}
          >
            <div
              className={`${
                inView
                  ? "opacity-1 translate-x-0 delay-[900ms] duration-[1200ms]"
                  : "translate-x-80 opacity-0"
              } transform transition`}
            >
              HTML, CSS+Tailwind
            </div>
            <div
              className={`${
                inView
                  ? "opacity-1 translate-x-0 delay-[1800ms] duration-[1200ms]"
                  : "translate-x-80 opacity-0"
              } transform transition`}
            >
              TypeScript+NextJS
            </div>
            <div
              className={`${
                inView
                  ? "opacity-1 translate-x-0 delay-[2700ms] duration-[1200ms]"
                  : "translate-x-80 opacity-0"
              } transform transition `}
            >
              Node+Express, tRPC ++
            </div>
          </div>
        </div>
        <p
          className={`${
            inView ? "opacity-100 delay-[3600ms] duration-[900ms]" : "opacity-0"
          } text-center text-xl font-thin italic sm:block sm:text-2xl lg:text-3xl`}
        >
          Selv om jeg er glad i alt som er nytt,
          <br />
          så bruker jeg teknologi som er
          <br />
          både veltestet og robust
        </p>
      </div>
    </section>
  );
};

export default MyStack;
