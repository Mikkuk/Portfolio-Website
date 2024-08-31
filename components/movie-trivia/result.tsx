import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ResultProps {
    isCorrect: boolean;
    question: {
        answer: string;
        posterImg: StaticImageData;
        tieInLine: string;
    };
    handleNextQuestion: () => void;
}

export default function Result({
    isCorrect,
    question,
    handleNextQuestion,
}: ResultProps) {
    return (
        <section className="my-10">
            <p className="m-4 text-xl font-medium">
                {isCorrect ? 'Correct!' : 'The correct answer was:'}
                <span className="my-4 block italic font-bold">
                    {question.answer}
                </span>
                <Image
                    className="my-4 mx-auto max-w-[20rem] max-h-[20rem] sm:max-w-[33rem] sm:max-h-[20rem] rounded-lg shadow-lg object-cover"
                    src={question.posterImg}
                    alt="poster image from the movie"
                    priority={true}
                />
                <span className="block italic font-semibold">
                    {question.tieInLine}
                </span>
            </p>
            <button
                onClick={handleNextQuestion}
                className="mt-4 gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
            >
                Continue
            </button>
        </section>
    );
}
