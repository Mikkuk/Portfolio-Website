'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

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

            <p className="text-gray-700 mb-[10rem] dark:text-white/80">
                You can contact me directly at{' '}
                <a
                    className="underline"
                    href="mailto:mikko.kukkonenhml@gmail.com"
                >
                    mikko.kukkonenhml@gmail.com
                </a>
            </p>
        </motion.section>
    );
}
