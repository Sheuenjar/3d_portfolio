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
  starbucks,
  tesla,
  telmark,
  accenture,
  rekrutados,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
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
    title: "Administrative",
    company_name: "Telmark Contact Center",
    icon: telmark,
    iconBg: "#ffffff",
    date: "October 2017 - September 2018",
    points: [
      "I was part of the company's customer support team, working remotely from Argentina to assist users located in Germany.",
      "I provided German users with support via tickets and phone on contractual matters, billing, sales of intangible products, and other administrative issues.",
      "Due to my sales skills, I was responsible for training new employees in the company to increase the offering of new products.",
      "I supported the sales team in achieving their goals by assisting them in identifying potential customers and providing them with the necessary information to close deals.",
    ],
  },
  {
    title: "Back Office",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#ffffff",
    date: "September 2018 - January 2019",
    points: [
      "I worked as a supplier manager for a company, where I was responsible for managing and coordinating the relationship with suppliers in Germany, Austria, and Switzerland, and handled responding to their inquiries and needs through email and phone calls.",
      "I ensured that all invoices were complete and accurate, taking into account that each country had a different invoicing format with specific data that needed to be correct.",
      "As part of my role, I worked with other teams within the company, such as finance and procurement, to ensure that all parties involved in the payment process completed their tasks efficiently, enabling suppliers to receive payment for their invoices.",
      "During this work experience, I utilized various systems such as SAP for managing supplier data and invoices, email for communicating with suppliers, and Salesforce for keeping track of supplier inquiries and needs.",
    ],
  },
  {
    title: "Sales Coach",
    company_name: "Telmark",
    icon: telmark,
    iconBg: "#ffffff",
    date: "August 2022 - December 2022",
    points: [
      "As a sales coach for Vodafone, working remotely from Argentina and communicating in German, I was responsible for monitoring and recording all sales made, as well as reviewing and re-evaluating sales when necessary to ensure their completion and accurate entry into the system.",
      "As part of my job, I conducted meetings with groups of three people to encourage them to sell intangible products and find the best approach for making sales, while providing training on sales techniques and strategies to motivate and support my team during these meetings.",
      "Throughout this work experience, I demonstrated my ability to motivate and train others in sales techniques.",
      "Additionally, I was responsible for maintaining accurate records of all sales made, and I worked closely with the sales team and other departments within the company to ensure that all sales were properly documented and recorded.",
    ],
  },
  {
    title: "German Language Instructor",
    company_name: "Rekrutados",
    icon: rekrutados,
    iconBg: "#ffffff",
    date: "November 2022 - Present day",
    points: [
      "As a German teacher for a company that provides the opportunity for nurses from all over Latin America to learn the language while preparing for interviews with German companies, my experience has been deeply rewarding.",
      "In my current job, I have the opportunity to share my passion for the German language and culture with a diverse group of students from different parts of Latin America.",
      "Through dynamic and practical classes, I help students improve their language skills and prepare for the B2 exam, a key test for getting a job in Germany.",
      "My work allows me to firsthand understand the challenges and opportunities facing Latin American nurses seeking employment in Germany. I work to help my students overcome these barriers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sheuen proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sheuen does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sheuen optimized our website, our traffic increased by 50%. We can't thank them enough!",
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