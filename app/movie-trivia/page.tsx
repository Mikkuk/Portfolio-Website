'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TbArrowBackUp } from 'react-icons/tb';
import { questions } from '@/lib/data';
import Image from 'next/image';
import applauseGif from '@/public/applause.webp';

export default function Page() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [tries, setTries] = useState(0);
    const [hint, setHint] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(
        null
    );
    const [points, setPoints] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            setIsAnswerCorrect(true);
            setPoints(points + 1);
        } else {
            if (tries < 3) {
                setTries(tries + 1);
                setHint(currentQuestion.hints[tries]);
            } else {
                setIsAnswerCorrect(false);
            }
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        setTries(0);
        setHint('');
        setIsAnswerCorrect(null);
    };

    const handleGameRestart = () => {
        setCurrentQuestionIndex(0);
        setUserAnswer('');
        setTries(0);
        setHint('');
        setIsAnswerCorrect(null);
        setPoints(0);
    };

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="flex flex-col items-center mx-5">
                <p className="m-4 px-4 text-xl font-medium text-center">
                    Congratulations! You've completed the trivia.
                    <span className="block m-4 px-4 text-2xl font-semibold sm:text-4xl">
                        {points}/4 points.
                    </span>
                    Good Effort!
                </p>
                <Image
                    className="relative my-4 mx-auto max-w-[18rem] max-h-[16rem] sm:max-w-[32rem] sm:max-h-[24rem] rounded-lg shadow-lg"
                    src={applauseGif}
                    alt="applause gif"
                    priority={true}
                />
                <Link
                    href="/#home"
                    className=" bg-gray-900 text-white px-7 py-3 mt-6 mb-10
                    flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 
                    hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    Back to Portfolio{' '}
                    <TbArrowBackUp className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <button
                    onClick={handleGameRestart}
                    className=" bg-gray-900 text-white px-7 py-3 mb-20
                    flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 
                    hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    Play again
                </button>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center mx-5">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-[50rem] text-center "
            >
                <Link
                    href="/#home"
                    className="group bg-gray-900 text-white px-7 py-3 mt-6 mb-20
                        flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 
                        hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                    Back to Portfolio{' '}
                    <TbArrowBackUp className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <h1 className="m-4 px-4 text-2xl font-bold sm:text-4xl">
                    Movie Trivia
                </h1>
                {isAnswerCorrect === null && (
                    <>
                        <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]">
                            There are four questions about some movies I like.
                            For each question you have four tries.
                            <span className="block italic font-medium">
                                Question {currentQuestionIndex + 1}/4
                            </span>
                            <span className="block mt-4 text-2xl font-semibold">
                                {questions[currentQuestionIndex].question}
                            </span>
                            <span className="block mt-4 text-xl">
                                {tries === 0
                                    ? ''
                                    : `Wrong! Try again! ${tries}/4 tries used`}
                            </span>
                        </p>
                        <Image
                            className="relative my-4 mx-auto max-w-[20rem] max-h-[20rem] sm:max-w-[36rem] sm:max-h-[20rem] rounded-lg shadow-lg"
                            src={questions[currentQuestionIndex].img}
                            alt="image from the movie"
                            priority={true}
                        />
                        {hint && (
                            <p className="m-4 px-4 text-xl font-medium">
                                Hint: {hint}
                            </p>
                        )}
                        <form
                            className="my-20 flex flex-col items-center justify-center dark:text-black"
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
                )}
                {isAnswerCorrect === true && (
                    <div className="my-10">
                        <p className="m-4 px-4 text-xl">
                            Correct!
                            <Image
                                className="relative my-4 mx-auto max-w-[20rem] max-h-[20rem] sm:max-w-[36rem] sm:max-h-[20rem] rounded-lg shadow-lg"
                                src={questions[currentQuestionIndex].posterImg}
                                alt="poster image from the movie"
                                priority={true}
                            />
                            <span className="block italic font-semibold">
                                {questions[currentQuestionIndex].tieInLine}
                            </span>
                        </p>
                        <button
                            onClick={handleNextQuestion}
                            className="mt-4 gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
                        >
                            Continue
                        </button>
                    </div>
                )}
                {isAnswerCorrect === false && (
                    <div className="my-10">
                        <p className="m-4 text-xl font-medium">
                            The correct answer was:
                            <span className="my-4 block italic font-bold">
                                {questions[currentQuestionIndex].answer}
                            </span>
                            <Image
                                className="relative my-4 mx-auto max-w-[20rem] max-h-[20rem] sm:max-w-[33rem] sm:max-h-[20rem] rounded-lg shadow-lg object-cover"
                                src={questions[currentQuestionIndex].posterImg}
                                alt="poster image from the movie"
                                priority={true}
                            />
                            <span className="block italic font-semibold">
                                {questions[currentQuestionIndex].tieInLine}
                            </span>
                        </p>
                        <button
                            onClick={handleNextQuestion}
                            className="mt-4 gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
                        >
                            Continue
                        </button>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
