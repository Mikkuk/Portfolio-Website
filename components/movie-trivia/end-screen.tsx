import React from 'react';
import Image from 'next/image';
import applauseGif from '@/public/applause.webp';
import Link from 'next/link';
import { TbArrowBackUp } from 'react-icons/tb';

interface EndScreenProps {
    points: number;
    handleGameRestart: () => void;
}

export default function EndScreen({
    points,
    handleGameRestart,
}: EndScreenProps) {
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
                className="relative my-4 mx-auto w-auto h-auto max-w-[18rem] max-h-[16rem] sm:max-w-[32rem] sm:max-h-[24rem] rounded-lg shadow-lg"
                src={applauseGif}
                alt="applause gif"
                priority={true}
            />
            <Link
                href="/#home"
                className=" bg-gray-900 text-white min-w-[13rem] px-7 py-3 mt-6 mb-10
            flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10"
            >
                Back to Portfolio{' '}
                <TbArrowBackUp className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <button
                onClick={handleGameRestart}
                className=" bg-gray-900 text-white min-w-[13rem] px-7 py-3 mb-20
            flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 
            hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10"
            >
                Play again
            </button>
        </div>
    );
}
