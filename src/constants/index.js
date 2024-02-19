import {
    cinema,
    computer,
    computeradv,
    crypto,
    css,
    film,
    git,
    html,
    javascript,
    jest,
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
        date: "October 2014 - Present",
        points: [
            "Translating films and tv-shows from English to Russian and Ukrainian.",
            "Collaborating with editors and other translators.",
            "For a couple of months I've worked as a translators managers.",
            "Created a video-guide for effective and fast work for my colleagues.",
        ],
    },
    {
        title: "Studying",
        icon: computer,
        iconBg: "#fbc3bc",
        date: "October 2023 - Present",
        points: ['Finished several courses, such as: "Web-разработчик", "Полный курс по JavaScript + React - с нуля до результата" on Udemy',
            'Finished Youtube-courses and, as a result, created several projects',
            'Studied for 3-4 hours every day',
            'Took couple sessions with mentor for deeper understanding of my\n' +
            'weak points',
            'Right now working on my main pet project and building\n' +
            'application from scratch with bundle setup, theming,\n' +
            '    internationalization, infinite scroll, and so on'
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