import {
    mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs,
    mongodb, git, figma, docker, starbucks, shopify, carrent, jobit, tripguide, threejs, spikwell, syllogistekjpeg, tesla, powerbi,
    mobile1, newspaper, todolist, weatherwebp, dashboard, ecommerce1,
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
        id: "project",
        title: "Project",
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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Data Analyst",
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
    {
        name: "Power bi",
        icon: powerbi,
    },
];

const experiences = [
    {
        title: "MERN Stack (Intership)",
        company_name: "Syllogistek Tech",
        icon: syllogistekjpeg,
        iconBg: "#383E56",
        date: "June 2022 - August 2022",
        points: [
            "Acquired advanced skills in MongoDB, Express.js, React.js, and Node.js through rigorous training, leading to the development of high-performance applications that enhanced user experience and reduced server load by 25%.",
            "Engineered a full-fledged e-commerce website from inception, ensuring seamless functionality and optimal user experience.",
            "Integrated key features including user authentication, product listings, and a shopping cart, enhancing application functionality and improving user engagement.",
        ],
    },
    {
        title: "Devops (Intership)",
        company_name: "Syllogistek Tech",
        icon: syllogistekjpeg,
        iconBg: "#E6DEDD",
        date: "September 2023 - November 2023",
        points: [
            "Implemented continuous integration and deployment pipelines using Jenkins and Docker, resulting in a 30% reduction in deployment time and improved overall project efficiency.",
            "Collaborated with development teams to automate infrastructure provisioning on AWS using Terraform, enhancing scalability and reducing manual errors.",
            "Conducted performance monitoring and implemented alerting systems with Prometheus and Grafana, ensuring high availability and reliability of production systems.",
        ],
    },
    {
        title: "SDE",
        company_name: "Spikewell India Private Limited",
        icon: spikwell,
        iconBg: "#383E56",
        date: "Jan 2024 - June 2024",
        points: [
            "Architected and launched an interactive hospital website with React.js and .NET, resulting in a 35% increase in online consultations within the first quarter.",
            "Spearheaded the development of a full-fledged e-commerce website from inception, enhancing functionality and boosting user engagement.",
            "Integrated critical features such as user authentication, product listings, and a shopping cart, augmenting functionality and enhancing user engagement by 40%.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Newspaper Website",
        description:
            "Web-based platform that allows users to categorise, search and sorting news from various topics, providing a real-time tech newspaper website delivering up-to-date technology news and articles to users.",
        tags: [
            {
                name: "reactjs",
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
        image: newspaper,
        source_code_link: "https://github.com/",
    },
    {
        name: "E-commerce website",
        description:
            "Web application that is integrated essential features including product listings, shopping cart, user authentication, payment gateway ensuring high responsiveness across mobile and desktop devices.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: ecommerce1,
        source_code_link: "https://github.com/",
    },
    {
        name: "To-do-List",
        description:
            "Web application that is allowing users to effortlessly add, update, and delete tasks. Utilized React Router for seamless navigation and state management tools for efficient data handling.",
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
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: todolist,
        source_code_link: "https://github.com/",
    },
    {
        name: "Society Management",
        description:
            "Mobile application that enabling society security guards to digitally log visitor information, including photographs, eliminating the need for pen and paper. Real-time data entry and retrieval, secure storage of records.",
        tags: [
            {
                name: "react native",
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
        image: mobile1,
        source_code_link: "https://github.com/",
    },
    {
        name: "Power BI Dashboard",
        description:
            "Developed a Power BI dashboard, performing data cleaning, transformation, and visualization to deliver clear, actionable insights, enhancing data-driven decision-making processes and improving overall business intelligence.",
        tags: [
            {
                name: "Power BI",
                color: "blue-text-gradient",
            },
            {
                name: "Excel",
                color: "green-text-gradient",
            },
        ],
        image: dashboard,
        source_code_link: "https://github.com/",
    },
    {
        name: "Weather website",
        description:
            "Developed a dynamic weather website using React.js, featuring real-time weather updates, forecasts, and location-based data, enhancing user experience with a responsive design and intuitive interface.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "open source API",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: weatherwebp,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };