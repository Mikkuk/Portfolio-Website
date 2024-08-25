import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import barryLyndonImg from '@/public/BarryLyndon.jpg';
import theLastCrusadeImg from '@/public/lastCrusade.jpg';
import theBigLebowskiImg from '@/public/bigLebowski.jpg';
import lawrenceOfArabiaImg from '@/public/LawrenceOfArabia.jpg';
import barryLyndonPosterImg from '@/public/barryLyndonPoster.jpg';
import theLastCrusadePosterImg from '@/public/lastCrusadePoster.jpg';
import theBigLebowskiPosterImg from '@/public/bigLebowskiPoster.jpg';
import lawrenceOfArabiaPosterImg from '@/public/LawrenceOfArabiaPoster.jpg';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Education',
        hash: '#education',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const educationData = [
    {
        title: 'Bachelors Degree in Information Technology',
        location: 'Tampere University',
        description:
            'Finished my bachelors degree in Information Technology majoring in software development. I learned the basics of programming, web development and about the software development process. ',
        icon: React.createElement(LuGraduationCap),
        date: '2019 - 2022',
    },
    {
        title: "Master's Degree in Information Technology",
        location: 'Tampere University',
        description:
            "Continuing my studies with the master's degree program in Information Technology. Majoring in web and cloud development.",
        icon: React.createElement(LuGraduationCap),
        date: '2023 - present',
    },
] as const;

export const projectsData = [
    {
        title: 'E-commerce website ',
        description:
            'As a summer project participated in the development of an ecommerce website for selling secondhand computer hardware. Learned to design and develop according to customer requirements and how to work with an existing code base',
        tags: ['React', 'Redux', 'MongoDB', 'Tailwind', 'Node.js', 'Express'],
        url: null,
    },
    {
        title: 'Fullstack movie rating app',
        description:
            'Developed a full-stack application where users can register and review movies',
        tags: ['React', 'Redux', 'MongoDB', 'MaterialUI', 'Node.js', 'Express'],
        url: 'https://github.com/Mikkuk/MovieRatingApp',
    },
    {
        title: 'Server communication app',
        description:
            'Project utilizing DevOps practices such as CI/CD pipelines, containerization with Docker and test automation. Built an application using microservices architecture that consists of two servers communicating with each other through HTTP and RabbitMQ with additional Monitor and API-gateway services.',
        tags: ['Node.js', 'express', 'Docker', 'RabbitMQ', 'Jest', 'Python'],
        url: 'https://github.com/Mikkuk/DevOps',
    },
] as const;

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Next.js',
    'Node.js',
    'Express',
    'Git',
    'Docker',
    'Tailwind',
    'MongoDB',
    'PostgreSQL',
    'Python',
    'C++',
    'Linux',
] as const;

export const questions = [
    {
        question: 'What movie is this?',
        answer: 'Lawrence of Arabia',
        hints: [
            'This masterpiece was directed by David Lean',
            'The movie is based on a real person',
            'The movie takes place during World War I',
        ],
        tieInLine: '"Patience is one of my many virtues and I do not shy away from things that take time" (this movie is 3,5 hours long)',
        img: lawrenceOfArabiaImg,
        posterImg: lawrenceOfArabiaPosterImg,
    },
    {
        question: 'What movie is this?',
        answer: 'The Big Lebowski',
        hints: [
            'The movie was directed by the Coen brothers',
            'The movie stars Steve Buscemi',
            "'The Dude abides'",
        ],
        tieInLine: '"Like the Dude, I am also chill, relaxed and easy going" (and I also quite enjoy bowling)',
        img: theBigLebowskiImg,
        posterImg: theBigLebowskiPosterImg,
    },
    {
        question: 'What movie is this?',
        answer: 'Indiana Jones and the Last Crusade',
        hints: [
            "Sean Connery plays Harrison Ford's father even though he is only 12 years older",
            'Directed by Steven Spielberg',
            'This movie wraps up a legendary trilogy',
        ],
        tieInLine: '"I am also on a crusade to seek knowledge and improve as a developer"',
        img: theLastCrusadeImg,
        posterImg: theLastCrusadePosterImg,
    },
    {
        question: 'What movie is this?',
        answer: 'Barry Lyndon',
        hints: [
            'The director of this movie is infamous for his perfectionism',
            'The movie takes place in the 18th century Europe',
            'The director Stanley Kubrick insisted on using only natural light for the movie',
        ],
        tieInLine: '"Much like Kubrick, I also strive for perfection" (maybe not as obsessively though)',
        img: barryLyndonImg,
        posterImg: barryLyndonPosterImg,
    },
] as const;
