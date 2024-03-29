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
  telmark,
  accenture,
  rekrutados,
  videoplayer,
  dalle,
  aiChat,
  threejs,
  lyrics,
  threejs_ai,
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
  /* {
    name: "TypeScript",
    icon: typescript,
  }, */
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
  /* {
    name: "figma",
    icon: figma,
  }, */
  /* {
    name: "docker",
    icon: docker,
  }, */
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
    name: "Lyriks",
    description:
      "For this developer portfolio project, I designed and developed a user-friendly music streaming site. The site allows users to search for and listen to their favorite music. It also features a recommendation system that suggests new music based on users' listening habits.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: lyrics,
    source_code_link: "https://github.com/Sheuenjar/music-player-online/",
    externlink_link: "https://lyriks-player-app.netlify.app/"
  },
  {
    name: "Video Player",
    description:
      "I created a video-sharing platform using the YouTube API that allows users to find videos easily searching through YouTube's vast library. The platform provides a seamless user experience with an intuitive interface, quick loading, and optimization for various devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: videoplayer,
    source_code_link: "https://github.com/Sheuenjar/Youtube/",
    externlink_link: "https://a-video-player.netlify.app/",
  },
  {
    name: "DALL-E Img Gnr.",
    description:
      "For my latest developer portfolio project, I utilized the DALL-E API to design an innovative image generator. Driven by AI, this generator is capable of producing exceptional quality images based on user-defined parameters. The potential for creative exploration and expression with this technology is limitless.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/Sheuenjar/dalle_clone/",
    externlink_link: "https://dall-e-img-generator.netlify.app/",
  },
  {
    name: "AI CHAT 3.0",
    description:
      "For this portfolio project, I utilized the DALL-E API to design an innovative image generator. Driven by AI, this generator is capable of producing exceptional quality images based on user-defined parameters. The potential for creative exploration and expression with this technology is limitless.",
    tags: [
      {
        name: "vanilla",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "openAi",
        color: "blue-text-gradient",
      },
    ],
    image: aiChat,
    source_code_link: "https://github.com/Sheuenjar/open_ai_chat/",
    externlink_link: "https://open-ai-chat-pi.vercel.app//",
  },
  {
    name: "Threejs AI Project",
    description:
      "A dynamic and exciting web application allows users to experiment with customizing a piece of clothing and explore AI's capabilities to create unique images. Users can change t-shirt colors, upload images, and print them, while also downloading photos of the personalized t-shirt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "openAi",
        color: "blue-text-gradient",
      },
    ],
    image: threejs_ai,
    source_code_link: "https://github.com/Sheuenjar/threejs_ai_project",
    externlink_link: "https://threejs-ai-project.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };