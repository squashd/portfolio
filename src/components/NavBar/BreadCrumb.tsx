"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function BreadCrumb() {
  const segments = useSelectedLayoutSegments();

  return (
    <ul className="flex items-center gap-1 text-sm uppercase">
      {segments.length > 0 ? (
        <li>
          <Link
            href="/"
            className="group relative inline-block text-zinc-200 transition duration-300"
          >
            Hjem
            <span className="relative bottom-1 block h-[1px] max-w-0 bg-zinc-200 transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
        </li>
      ) : null}
      {segments.map((segment, index) => (
        <li
          key={index}
          className="text-zinc-200 before:mx-1 before:text-white before:content-['/'] last:text-sky-400"
        >
          <Link
            href={`${segment}`}
            className="group relative inline-block transition duration-300"
          >
            {segment.replace("-", " ")}
            <span className="relative bottom-1 block h-[1px] max-w-0 bg-current transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
