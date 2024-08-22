'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithubSquare } from 'react-icons/fa';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    url,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-200 max-w-[42rem] border border-black/5 rounded-lg dark:text-white dark:bg-white/10">
                <div className="pt-4 pb-7 px-6 sm:pt-10 flex flex-col h-full">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    {url && (
                        <a
                            className="bg-white text-grey-900 px-7 py-3 mt-4
                            flex items-center justify-center w-full gap-2 rounded-full outline-none focus:scale-105 
                            hover:scale-105 active:scale-105 transition dark:bg-white/20"
                            href={url}
                            target="_blank"
                        >
                            GitHub <FaGithubSquare />
                        </a>
                    )}
                </div>
            </section>
        </motion.div>
    );
}
