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
  const [isTextView, setIsTextView] = useState(false);

  const { id } = params;
  const currentSource = source.find((lesson) => lesson.link == id);

  if (!currentSource)
    return (
      <div className="flex items-center justify-center">
        Page does not exist
      </div>
    );

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

  function navigateJumpToIndex(index: number) {
    setCurrentAnswerKeyIndex(index);
    setIsTextView(false);
  }

  const component = isTextView ? (
    <div
      className="flex flex-col justify-center items-center min-h-screen h-full mt-28 mx-20
      text-left w-full"
    >
      <button
        className="text-lg p-2 border border-black fixed top-5 right-5 bg-white"
        onClick={() => setIsTextView((prevState) => !prevState)}
      >
        Card View
      </button>

      {answerKeys.map((answerKey, index) => (
        <button
          className="w-10/12 px-10 py-2 border border-black mb-2"
          key={answerKey.answer}
          onClick={() => navigateJumpToIndex(index)}
        >
          {index + 1}. {answerKey.question}
        </button>
      ))}
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center min-h-screen h-full">
      <p className="mb-5 text-2xl">{topic}</p>
      <FlashCard
        number={currentAnswerKeyIndex + 1}
        numberOfQuestions={answerKeys.length}
        isAnswerDisplayed={isAnswerDisplayed}
        toggleDisplay={toggleDisplay}
        {...answerKeys[currentAnswerKeyIndex]}
      />
      <div className="mt-8 space-x-3">
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

        <button
          className="text-lg px-5 py-2 border border-black"
          onClick={() => setIsTextView((prevState) => !prevState)}
        >
          Text View
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-full">
      {component}
    </div>
  );
}
