'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TbArrowBackUp } from 'react-icons/tb';
import { questions } from '@/lib/data';
import Image from 'next/image';

export default function Page() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [tries, setTries] = useState(0);
    const [hint, setHint] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
            setTries(0);
            setHint('');
        } else {
            if (tries < 2) {
                setTries(tries + 1);
                setHint(currentQuestion.hints[tries]);
            } else {
                setHint(`The correct answer was: ${currentQuestion.answer}`);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setUserAnswer('');
                setTries(0);
            }
        }
    };

    if (currentQuestionIndex >= questions.length) {
        return <div>Congratulations! You've completed the trivia.</div>;
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
                <p className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl">
                    {questions[currentQuestionIndex].question}
                </p>
                <Image
                    className="relative my-4 mx-auto max-w-[18rem] max-h-[20rem] md:max-w-[30rem] md:max-h-[35rem] rounded-lg shadow-lg"
                    src={questions[currentQuestionIndex].img}
                    alt="image from the movie"
                />
                {hint && (
                    <p className="m-4 px-4 text-xl font-medium">Hint: {hint}</p>
                )}
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
            </motion.div>
        </main>
    );
}
