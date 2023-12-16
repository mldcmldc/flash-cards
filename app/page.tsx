"use client";

import { useState } from "react";
import FlashCard from "./components/flash-card";
import { source } from "./definitions/answer-keys";

export default function Home() {
  const [currentAnswerKeyIndex, setCurrentAnswerKeyIndex] = useState(0);

  const { topic, answerKeys } = source[currentAnswerKeyIndex];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-4xl">
      <p className="mb-5 text-2xl">{topic}</p>
      <FlashCard
        number={currentAnswerKeyIndex + 1}
        numberOfQuestions={answerKeys.length}
        {...answerKeys[currentAnswerKeyIndex]}
      />
      <div className="mt-8 space-x-5">
        {currentAnswerKeyIndex != 0 ? (
          <button
            className="text-lg px-5 py-2 border border-black"
            onClick={() =>
              setCurrentAnswerKeyIndex((prevState) => prevState - 1)
            }
          >
            Previous
          </button>
        ) : null}

        {currentAnswerKeyIndex != answerKeys.length - 1 ? (
          <button
            className="text-lg px-5 py-2 border border-black"
            onClick={() =>
              setCurrentAnswerKeyIndex((prevState) => prevState + 1)
            }
          >
            Next
          </button>
        ) : null}
      </div>
    </main>
  );
}
