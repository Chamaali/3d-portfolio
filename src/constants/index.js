import {
    bachoo,
    cinema,
    computer,
    computeradv,
    crypto,
    css,
    film,
    git,
    github,
    html,
    javascript,
    jest,
    linkedin,
    nextjs,
    react,
    redux,
    sass,
    shadcn,
    stack,
    tailwindcss,
    threejs,
    typescript,
    webpack
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

// export const socialLinks = [
//     {
//         name: 'Telegram',
//         iconUrl: contact,
//         link: 'https://t.me/ahtungd',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/imikongi',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/imikonlink/',
//     }
// ];

export const projects = [
    {
        iconUrl: stack,
        theme: 'btn-back-pink',
        name: 'Stack overflow analog on Next.js',
        description: 'Soon to be.',
        link: '#',
    },
    {
        iconUrl: film,
        theme: 'btn-back-blue',
        name: 'Film review app with voice control',
        description: 'Soon to be.',
        link: '#',
    },
    {
        iconUrl: crypto,
        theme: 'btn-back-black',
        name: 'Crypto app for creating NFT',
        description: 'Soon to be.',
        link: '#',
    },
    {
        iconUrl: computeradv,
        theme: 'btn-back-yellow',
        name: 'Advanced frontend development',
        description: 'This app I built from a scratch and set up all features such as: linters, Webpack, Storybook. I\'ve created' +
            'a basic UI kit, FSD architecture and many more.',
        link: 'https://github.com/imikongi/advanced-frontend',
    }
];