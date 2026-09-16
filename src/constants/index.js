import {
  backend,
  mobile,
  cut,
  web,
  javascript,
 
  html,
  css,
  reactjs,
  
  git,
  
  rawasii,
  teaching,
  multimedia,
  davinci,
  flutter,
  capcut,
  dart,
  supabase,
  rawasiiapp,
  portfolio,
  chefapp,
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
    name: "Flutter",
    icon: flutter,
  },
   {
    name: "Dart",
    icon: dart,
  },
   {
    name: "Supabase",
    icon: supabase,
  },
  
  
  {
    name: "git",
    icon: git,
  },
   {
    name: "Davinci Resolve",
    icon: davinci,
  },
  
   {
    name: "CapCut",
    icon: capcut,
  },
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
    name: "React JS",
    icon: reactjs,
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
    name: "Portfolio",
    description:
      "My personal 3D portfolio website, showcasing my projects and experience through interactive 3D scenes, smooth animations, and a responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/halima-sal-11235/portfolio",
  },
  {
    name: "RAWASII",
    description:
      "A full-stack social platform for documenting Algerian architectural heritage, built as a 2nd-year school project. Led the team and handled the app's backend and deployment, letting users explore, document, and share heritage sites.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart-frog",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: rawasiiapp,
    source_code_link: "https://github.com/halima-sal-11235/Rawasii_frontend",
  },
  {
    name: "One Minute Chef",
    description:
      "A recipe web app that generates quick recipe ideas using the Google Gemini API, with a clean interface for browsing, searching, and viewing recipes based on user input.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chefapp,
    source_code_link: "https://github.com/halima-sal-11235/one-minute-chef-app",
  },
 
];
export { services, technologies, experiences, testimonials, projects };