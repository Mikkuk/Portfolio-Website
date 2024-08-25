'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TbArrowBackUp } from 'react-icons/tb';
import { questions } from '@/lib/data';
import Image from 'next/image';
import applauseGif from '@/public/applause.webp';
import Question from '@/components/movie-trivia/question';
import Result from '@/components/movie-trivia/result';

const TOTAL_QUESTIONS = 4;
const MAX_TRIES = 4;

export default function Page() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [tries, setTries] = useState(0);
    const [hint, setHint] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(
        null
    );
    const [points, setPoints] = useState(0);

    const resetState = () => {
        setUserAnswer('');
        setTries(0);
        setHint('');
        setIsAnswerCorrect(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            setIsAnswerCorrect(true);
            setPoints(points + 1);
        } else {
            if (tries < MAX_TRIES - 1) {
                setTries(tries + 1);
                setHint(currentQuestion.hints[tries]);
            } else {
                setIsAnswerCorrect(false);
            }
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        resetState();
    };

    const handleGameRestart = () => {
        setCurrentQuestionIndex(0);
        setPoints(0);
        resetState();
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

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <main className="flex flex-col items-center mx-5">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-[50rem] text-center"
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
                    <Question
                        questionIndex={currentQuestionIndex}
                        question={currentQuestion.question}
                        img={currentQuestion.img}
                        hint={hint}
                        tries={tries}
                        userAnswer={userAnswer}
                        setUserAnswer={setUserAnswer}
                        handleSubmit={handleSubmit}
                        MAX_TRIES={MAX_TRIES}
                        TOTAL_QUESTIONS={TOTAL_QUESTIONS}
                    />
                )}
                {isAnswerCorrect !== null && (
                    <Result
                        isCorrect={isAnswerCorrect}
                        question={currentQuestion}
                        handleNextQuestion={handleNextQuestion}
                    />
                )}
            </motion.div>
        </main>
    );
}
