import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface QuestionProps {
    questionIndex: number;
    question: string;
    img: StaticImageData;
    hint?: string;
    tries: number;
    userAnswer: string;
    setUserAnswer: (answer: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    MAX_TRIES: number;
    TOTAL_QUESTIONS: number;
}

export default function Question({
    questionIndex,
    question,
    img,
    hint,
    tries,
    userAnswer,
    setUserAnswer,
    handleSubmit,
    MAX_TRIES,
    TOTAL_QUESTIONS,
}: QuestionProps) {
    return (
        <>
            <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]">
                There are four questions about some movies I like. For each
                question you have four tries.
                <span className="block italic font-medium">
                    Question {questionIndex + 1}/{TOTAL_QUESTIONS}
                </span>
                <span className="block mt-4 text-2xl font-semibold">
                    {question}
                </span>
                <span className="block mt-4 text-xl min-h-16">
                    {tries === 0
                        ? ''
                        : `Wrong! Try again! ${tries}/${MAX_TRIES} tries used`}
                </span>
            </p>
            <Image
                className="relative my-4 mx-auto max-w-[20rem] max-h-[20rem] sm:max-w-[36rem] sm:max-h-[20rem] rounded-lg shadow-lg"
                src={img}
                alt="image from the movie"
                priority={true}
            />
            <div className="mt-4 text-xl min-h-24">
                {hint && <span>Hint: {hint}</span>}
            </div>
            <form
                className="my-10 flex flex-col items-center justify-center dark:text-black"
                onSubmit={handleSubmit}
            >
                <input
                    className="h-14 w-full px-4 rounded-lg border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    type="text"
                    value={userAnswer}
                    placeholder="Type your answer here"
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
                <button
                    className="mt-4 gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
