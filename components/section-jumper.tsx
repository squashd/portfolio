"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const useSectionJumper = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  console.log(section);

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [section]);
};
