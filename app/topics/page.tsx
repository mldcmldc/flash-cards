"use client";

import Link from "next/link";
import { source } from "../definitions/answer-keys";

export default function Topics() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 min-h-screen h-full">
      <p className="mb-5 text-xl">Lessons ({source.length})</p>
      {source.map((lesson) => (
        <Link
          className="border border-black px-4 py-2 mb-2"
          key={lesson.topic}
          href={`topics/${lesson.link}`}
        >
          {lesson.topic}
        </Link>
      ))}
    </div>
  );
}
