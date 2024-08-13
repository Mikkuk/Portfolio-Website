import React from "react";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors Degree in Information Technology",
    location: "Tampere University",
    description:
      "Finished my bachelors degree in Information Technology majoring in software development. I learned the basics of programming, web development and the overall software development process. ",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Master's Degree in Information Technology",
    location: "Tampere University",
    description:
      "Continuing my studies with the master's degree program in Information Technology. Majoring in web and cloud development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce website ",
    description:
      "As a summer project participated in the development of an ecommerce website for selling secondhand computer hardware. Learned to design and develop according to customer requirements and how to work with an existing code base",
    tags: ["React", "Redux", "MongoDB", "Tailwind", "Node.js", "Express"],
    url: null
  },
  {
    title: "Fullstack movie rating app",
    description:
      "Developed a full-stack application where users can register and review movies",
    tags: ["React", "Redux", "MongoDB", "MaterialUI", "Node.js", "Express"],
    url: "https://github.com/Mikkuk/MovieRatingApp"
  },
  {
    title: "Server communication app",
    description:
      "Project utilizing DevOps practices such as CI/CD pipelines, containerization with Docker and test automation. Built an application using microservices architecture that consists of two servers communicating with each other through HTTP and RabbitMQ with additional Monitor and API-gateway services.",
    tags: ["Node.js", "express", "Docker", "RabbitMQ", "Jest", "Python"],
    url: "https://github.com/Mikkuk/DevOps"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Docker",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "C++",
  "Linux",
] as const;