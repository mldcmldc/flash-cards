"use client";

type FlashCardType = {
  number: number;
  numberOfQuestions: number;
  answer: string;
  question: string;
  isAnswerDisplayed: boolean;
  toggleDisplay: () => void;
};

export default function FlashCard(props: FlashCardType) {
  const {
    answer,
    number,
    numberOfQuestions,
    question,
    isAnswerDisplayed,
    toggleDisplay,
  } = props;

  return (
    <div className="border border-black p-5 rounded-xl flex flex-col w-11/12 sm:w-[550px] min-h-[400px] h-full items-center justify-center">
      <small className="text-sm w-full text-left font-bold">
        {number}/{numberOfQuestions}
      </small>
      {isAnswerDisplayed ? (
        <p className="text-center my-4 px-4 font-medium text-2xl flex items-center flex-1">
          {answer}
        </p>
      ) : (
        <p className="text-center my-4 px-4 font-semibold text-4xl flex items-center flex-1">
          {question}
        </p>
      )}
      <button
        className="text-lg px-5 py-2 border border-black rounded-xl mt-auto"
        onClick={toggleDisplay}
      >
        {isAnswerDisplayed ? "Hide Answer" : "See Answer"}
      </button>
    </div>
  );
}
