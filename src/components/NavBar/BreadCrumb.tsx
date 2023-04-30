"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function BreadCrumb() {
  const segments = useSelectedLayoutSegments();

  return (
    <ul className="flex items-center gap-1 text-sm uppercase">
      {segments.length > 0 ? (
        <li>
          <Link href="/">
            <span>Hjem</span>
          </Link>
        </li>
      ) : null}
      {segments.map((segment, index) => (
        <li
          key={index}
          className="before:mx-1 before:text-white before:content-['/'] last:text-sky-600"
        >
          <Link href={`${segment}`}>{segment.replace("-", " ")}</Link>
        </li>
      ))}
    </ul>
  );
}
