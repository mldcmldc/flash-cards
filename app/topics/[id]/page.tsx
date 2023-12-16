"use client";
import FlashCard from "@/app/components/flash-card";
import { source } from "@/app/definitions/answer-keys";
import { useState } from "react";

export default function SingleTopicPage({
  params,
}: {
  params: { id: string };
}) {
  const [currentAnswerKeyIndex, setCurrentAnswerKeyIndex] = useState(0);
  const [isAnswerDisplayed, setIsAnswerDisplayed] = useState(false);

  const { id } = params;
  const currentSource = source.find((lesson) => lesson.link == id);

  if (!currentSource) return <div className="flex items-center justify-center">Page does not exist</div>;

  const { answerKeys = [], topic = "" } = currentSource;

  function toggleDisplay() {
    setIsAnswerDisplayed((prevState) => !prevState);
  }

  function navigate(direction: "previous" | "next") {
    if (direction == "previous") {
      setCurrentAnswerKeyIndex((prevState) => prevState - 1);
      setIsAnswerDisplayed(false);
      return;
    }

    setCurrentAnswerKeyIndex((prevState) => prevState + 1);
    setIsAnswerDisplayed(false);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-full">
      <p className="mb-5 text-2xl">{topic}</p>
      <FlashCard
        number={currentAnswerKeyIndex + 1}
        numberOfQuestions={answerKeys.length}
        isAnswerDisplayed={isAnswerDisplayed}
        toggleDisplay={toggleDisplay}
        {...answerKeys[currentAnswerKeyIndex]}
      />
      <div className="mt-8 space-x-5">
        {currentAnswerKeyIndex != 0 ? (
          <button
            className="text-lg px-5 py-2 border border-black"
            onClick={() => navigate("previous")}
          >
            Previous
          </button>
        ) : null}

        {currentAnswerKeyIndex != answerKeys.length - 1 ? (
          <button
            className="text-lg px-5 py-2 border border-black"
            onClick={() => navigate("next")}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}
