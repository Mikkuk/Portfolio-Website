'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
    return (
        <section className="mb-26 max-w-[50rem] text-center sm:mb-0">
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="m-4 px-4 text-2xl font-bold sm:text-4xl">
                        Mikko Kukkonen
                    </h1>
                    <p className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl">
                        Information technology student at Tampere University
                        majoring in software development. 4 years of experience
                        in software development through studies and various
                        projects.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 
                        flex items-center gap-2 rounded-full outline-none focus:scale-110 
                        hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                        Contact info{' '}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
                    <a
                        className="bg-white text-grey-900 px-7 py-3 
                        flex items-center gap-2 rounded-full outline-none focus:scale-110 
                        hover:scale-110 active:scale-105 transition"
                        href="https://github.com/Mikkuk"
                        target="_blank"
                    >
                        GitHub {' '}
                        <FaGithubSquare/>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
