'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function Contact() {
    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 mb-[5rem] dark:text-white/80">
                You can contact me directly at{' '}
                <a
                    className="underline"
                    href="mailto:mikko.kukkonenhml@gmail.com"
                >
                    mikko.kukkonenhml@gmail.com
                </a>
            </p>

            <SectionHeading>Movie Trivia</SectionHeading>
            <h3>Tired of reading about me? Take a small trivia about movies I really like!</h3>

            <Link
                        href="/movie-trivia"
                        className="group bg-gray-900 text-white px-7 py-3 mt-6
                        flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 
                        hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                        Play movie trivia{' '}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
        </motion.section>
    );
}
