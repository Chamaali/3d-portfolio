import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css, estate,
    git, github,
    html,
    javascript, linkedin,
    nextjs, pricewise,
    react,
    redux,
    sass, snapgram, summiz,
    tailwindcss, threads,
    typescript, webpack, jest, threejs, shadcn, cinema, computer, bachoo
} from "../assets/icons";



export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: webpack,
        name: "Webpack",
        type: "Build",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: jest,
        name: "Jest",
        type: "Testing",
    },
    {
        imageUrl: threejs,
        name: "ThreeJs",
        type: "Frontend",
    },
    {
        imageUrl: shadcn,
        name: "shadcn",
        type: "UI",
    },


];

export const experiences = [
    {
        title: "Translator",
        company_name: "Freelance",
        icon: cinema,
        iconBg: "#accbe1",
        date: "October 2015 - March 2021",
        points: [
            "Translating films and tv-shows from English to Russian and Ukrainian.",
            "Collaborating with editors and other translators.",
            "For a couple of months I've worked as a translators managers.",
            "Created a video-guide for effective and fast work for my colleagues.",
        ],
    },
    {
        title: "Junior React developer",
        company_name: "ITOP1000",
        icon: computer,
        iconBg: "#fbc3bc",
        date: "August 2021 - February 2022",
        points: [
            "Designed and developed a Websockets chat for technical support of the users. That helped to reduce the load on phone and email support and improved UX.",
            "Created a customizable and adaptable profile page where user can see his wallets, create new ones and edit personal information.",
            "Created a registration and authorisation forms with Formik"
        ],
    },
    {
        title: "React Developer",
        company_name: "Bachoo Studio",
        icon: bachoo,
        iconBg: "black",
        date: "Jan 2022 - Present",
        points: [
            "Implemented an intuitive filter, search and sorting interfaces to improve user experience, operating data through Redux Toolkit.",
            "Set up a Webpack configuration for build optimization and decomposition of config files, that helped to speed up a build up to 30% and shrink its size up to 20%.",
            "Developed an internal review and rating system, that is connected to Tripadvisor API, developed an infinite scroll for reviews.",
            "Developed a map-component , using Leaflet and connected it to database with registered hotels, add a search field, marking feature and feature for search in certain area.",
            "Increased components test coverage from 40% to 71%, using Jest framework, that helped to imrove stability of the application"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];