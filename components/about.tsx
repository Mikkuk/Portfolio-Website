'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.8 });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection('About');
        }
    }, [inView, setActiveSection]);

    return (
        <motion.section
            ref={ref}
            className=" max-w-[45rem] text-center leading-8 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am an information technology student from{' '}
                <span className="font-medium">Tampere University</span>. I have
                completed my bachelor's degree with a major in software
                development. Currently, I am pursuing a master's degree in{' '}
                <span className="font-medium">web and cloud development</span>.{' '}
                Over the past four years, I have gained experience with various{' '}
                <span className="font-medium">full-stack development</span>{' '}
                related technologies. I am also familiar with cloud and
                virtualization technologies like{' '}
                <span className="font-medium">Docker</span>. I am always eager
                to further expand my skills in this field and learn new
                technologies. I am currently looking for a position as a
                software developer.
            </p>

            <p>
                <span className="italic">During my free time</span>, I enjoy
                reading and watching movies. Inspired by my love of cinema this
                page has a small movie trivia game that you can play if reading
                about me gets boring.
            </p>
        </motion.section>
    );
}
