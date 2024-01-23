import {
  mobile,
  backend,
  creator,
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
  Bitwise,
  Lindy,
  josephfarms,
  tesla,
  readyroast,
  carrent,
  afrolistings,
  kidskare,
  josephfarmsimg,
  threejs,
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
    title: "Front End Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JavaScript Connoisseur",
    icon: creator,
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
    title: "Full Stack Software Engineer",
    company_name: "LindyAi",
    icon: Lindy,
    iconBg: "black",
    date: "July 2021 - Current",
    points: [
      "Spearheaded key projects, including the comprehensive development of a credits-based billing system utilizing MongoDB, Stripe API, and ORB API.",
      "Enhanced user experience with OAuth authentication and integration of services like Google, GitLab, and GitHub.",
      "Utilized React and TypeScript to develop Project Templates, enabling the creation of new, shareable templates with auto-generated titles and descriptions for the Lindy marketplace's global community.",
    ],
  },
  {
    title: "Lead Software Developer",
    company_name: "Bitwise Industries",
    icon: Bitwise,
    iconBg: "black",
    date: "January 2021 - May 2023",
    points: [
      "Led the development of several full stack applications used by hundreds of users worldwide using both the MEAN and MERN stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Utilized several AWS services including Lambda, S3 and CloudFront for enhanced scalability, security, and performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Joseph Gallo Farms",
    icon: josephfarms,
    iconBg: "white",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Developed and maintained scalable RESTAPIs in addition to serving web applications written with NodeJS and React.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed several full stack applications from scratch to increase business efficiency using both the MEAN and MERN stack.",
      "Developed a CRM system for the sales team to assist in every aspect of customer relations from initial contact to placing first order. ",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ready Roast Nut Company",
    icon: readyroast,
    iconBg: "#383E56",
    date: "Jan 2017 - Jan 2018",
    points: [
      "Created custom landing page for company internal SharePoint site using JavaScript, HTML, and CSS.",
      "Coordinated with IT Manager and other managers from various departments to discuss scope of custom pages and associated functionality.",
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
    name: "Afro Listings",
    description:
      "Web application that enables users to have a place where they/we can find black owned business, housing, education etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: afrolistings,
    afrolistings,
    source_code_link: "https://github.com/",
  },
  {
    name: "KidsKare",
    description:
      "Daycare administrative application used by a local company that provides daycare for hundreds of children throughout Central California.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: kidskare,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pylon",
    description:
      "Joseph Gallo Farms web application that allows employees and customers to submit orders to the Joseph Farms sales team.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: josephfarmsimg,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
