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
  shopify,
  jobit,
  tripguide,
  threejs,
  Natours,
  Proshop,
  devconnect,
  oneEight,
  icog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "1888e.c",
    icon: oneEight,
    iconBg: "#383E56",
    date: "Jan 2023 - Mar 2024",
    points: [
      "Developing and maintaining web applications using React.js| Remix.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AGI Intern",
    company_name: "iCog-Labs",
    icon: icog,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Jun 2024",
    points: [
      "Algorithm Development: Successfully developed and optimized several machine learning algorithms, improving their performance and accuracy for various cognitive tasks.",
      "Integration and Testing: Played a key role in integrating machine learning modules into the Hyperion Metta architecture, ensuring seamless functionality and robustness.",
      "Research Contribution: Contributed to research papers and presentations, sharing insights and findings with the broader AGI research community.",
      "Collaboration and Teamwork: Worked closely with a multidisciplinary team, enhancing collaborative efforts and driving project success through effective communication and problem-solving skills.",
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
    name: "Proshop",
    description:
      "ProShop is a comprehensive e-commerce mobile application designed to offer a seamless shopping experience for a wide range of products. Built with modern web technologies, ProShop ensures high performance, scalability, and an intuitive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Redux/tool-kit",
        color: "violet-gradient",
      },
    ],
    image: Proshop,
    source_code_link: "https://github.com/Basliel-Amsalu/Proshop-ecommerce",
  },
  {
    name: "Natours nature tour",
    description:
      "A dynamic nature tour application, Natours, using Express for server-side rendering with the Pug template engine. The app offers users an immersive experience in discovering and booking nature tours.",
    tags: [
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "pug",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Natours,
    source_code_link:
      "https://github.com/Basliel-Amsalu/Natours-website-express",
  },
  {
    name: "DevConnector",
    description:
      "a social networking platform, DevConnector, tailored for developers to connect, collaborate, and showcase their skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: devconnect,
    source_code_link:
      "https://github.com/Basliel-Amsalu/mern-social-networking",
  },
];

export { services, technologies, experiences, testimonials, projects };
