"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import profilePicUnsaturated from "public/images/profile.jpg";

const Intro = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className={`${
        inView ? "opacity-100" : "opacity-0"
      } flex max-h-screen min-h-full snap-center flex-col items-center justify-center gap-4 transition`}
    >
      <div
        className={`${
          inView ? "translate-0" : "-translate-x-[25vw] opacity-0"
        } aspect-square w-48 transform overflow-hidden rounded-full duration-[1200ms] ease-out`}
      >
        <Image
          src={profilePicUnsaturated}
          alt={"Profile picture"}
          className={`${
            inView ? "opacity-100" : "opacity-0"
          } transition duration-1000 ease-out`}
        />
      </div>
      <div
        className={`${
          inView
            ? "translate-0 duration-[1200ms]"
            : "translate-x-[25vw] opacity-0"
        } sm:text-md font-thin italic ease-[cubic-bezier(0.45,-0.45,0.25,1.75)] lg:text-xl`}
      >
        Hei, jeg heter Daniel og jeg er en
      </div>
      <h1
        className={`${
          inView
            ? "translate-0 opacity-100 duration-[1200ms]"
            : "-translate-x-[25vw] opacity-0"
        } transform bg-gradient-to-br from-sky-400 to-blue-600 bg-clip-text text-center text-5xl font-black uppercase leading-none tracking-tight text-transparent ease-[cubic-bezier(0.45,-0.45,0.25,1.75)] sm:text-6xl`}
      >
        Fullstack
        <br />
        utvikler
      </h1>
      <div
        className={`${
          inView
            ? "translate-0 opacity-100 duration-[1200ms]"
            : "translate-x-[25vw] opacity-0"
        } mt-4 transform whitespace-nowrap text-center text-lg font-thin italic tracking-tight ease-[cubic-bezier(0,0,0.5,1.5)] sm:text-2xl lg:text-3xl`}
      >
        <p>
          Jeg leverer applikasjoner og nettsider
          <br />
          tilpasset dine unike behov.
        </p>
      </div>
    </section>
  );
};

export default Intro;
