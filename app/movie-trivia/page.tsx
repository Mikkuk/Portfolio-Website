'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
    {
        question: "What is the name of the spaceship in 'Alien'?",
        answer: 'Nostromo',
        hints: ["It starts with 'N'", 'It has 7 letters', "It ends with 'o'"],
    },
    {
        question: "Who directed 'Pulp Fiction'?",
        answer: 'Quentin Tarantino',
        hints: [
            "First name starts with 'Q'",
            "Last name starts with 'T'",
            'Famous for non-linear storytelling',
        ],
    },
    // Add more questions as needed
];

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
        <main className="flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-[50rem] sm:my-[5rem] text-center "
            >
                <h1 className="m-4 px-4 text-2xl font-bold sm:text-4xl">
                    Movie Trivia
                </h1>
                <p className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl">
                    {questions[currentQuestionIndex].question}
                </p>
                <form
                    className="my-10 flex flex-col items-center justify-center dark:text-black"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="h-14 w-3/4 px-4 rounded-lg border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <button
                        className="mt-4 gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                {hint && <p>Hint: {hint}</p>}
            </motion.div>
        </main>
    );
}
