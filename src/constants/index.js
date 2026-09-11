import {
  backend,
  mobile,
  cut,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rawasii,
  teaching,
  multimedia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
   
  {
    title: "Video editor",
    icon: cut,
  },
  {
    title: "Backend developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Team Leader & Flutter Developer",
    company_name: "RAWASII — 2nd Year School Project (ESI)",
    icon: rawasii,
    iconBg: "#383E56",
    date: "2nd Year, ESI Alger",
    points: [
      "Led a team to design and develop RAWASII, a full-stack social platform for documenting Algerian architectural heritage.",
      "Built the mobile app with Flutter and managed the backend using Dart Frog and Supabase.",
      "Coordinated task distribution and progress across the team as project lead.",
      "Deployed the backend to Railway and handled Supabase integration, including storage, auth, and admin queries.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "RAWASII",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "ESI Alger",
    points: [
      "Worked on the backend side of RAWASII using Dart Frog and Supabase.",
      "Handled service-role queries, storage, and authentication logic.",
      "Deployed and maintained the backend on Railway.",
      "Resolved integration issues between Flutter Web and Supabase, including data-shape mismatches in foreign key joins.",
    ],
  },
  {
    title: "Math Tutor",
    company_name: "Baccalaureate Level Students",
    icon: teaching,
    iconBg: "#383E56",
    date: "Freelance",
    points: [
      "Tutored math for Baccalaureate-level students, breaking down complex topics into clear, approachable lessons.",
      "Taught some basic foundational subjects alongside math when needed.",
      "Adapted teaching style to each student's pace and level of understanding.",
    ],
  },
  {
    title: "Multimedia Member → Manager",
    company_name: "[Club Name] Club",
    icon: multimedia,
    iconBg: "#E6DEDD",
    date: "Ex-Member — Now Manager (This Season)",
    points: [
      "Started as a multimedia member handling filming and video editing for club content.",
      "Promoted to manager this season, overseeing the multimedia department.",
      "Directed the department's creative vision and coordinated content production.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Directed Projects",
    icon: web,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Developed simple websites in free time to practice and expand web development skills.",
      "Worked across frontend and basic backend needs depending on the project.",
      "Used these projects to explore new tools and techniques outside of coursework.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };