"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function BreadCrumb() {
  const segments = useSelectedLayoutSegments();

  const compoundedSegments = segments.map((segment, index) => {
    return decodeURI(segments.slice(0, index + 1).join("/"));
  });

  return (
    <ul className="flex flex-wrap items-center gap-x-1 text-xs uppercase sm:text-sm">
      {segments.length > 0 ? (
        <li>
          <Link
            href="/"
            className="group relative inline-block text-zinc-100 transition duration-300"
          >
            Hjem
            <span className="relative bottom-1 block h-[1px] max-w-0 bg-zinc-200 transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
        </li>
      ) : null}
      {segments.map((segment, index) => (
        <li
          key={index}
          className="text-zinc-200 before:mx-1 before:text-white before:content-['/']"
        >
          {index < segments.length - 1 ? (
            <Link
              href={`${compoundedSegments[index]}`}
              className="group relative inline-block transition duration-300"
            >
              {decodeURI(segment).replace("-", " ")}
              <span className="relative bottom-1 block h-[1px] max-w-0 bg-current transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          ) : (
            <span className="text-sky-400">
              {decodeURI(segment).replace("-", " ")}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
