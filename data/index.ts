export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I focus on delivering reliable, secure backend solutions \n" +
            "                and robust product features.",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/16.jpg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Passionate about microservices, DDD, and zero-downtime deployments.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Let’s solve real-world challenges.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Burnout problem",
        des: "A hackathon solution tackling emotional burnout in remote learning, built with React + TypeScript, " +
            "that placed 1st in the Junction 2020 Kazan campus.",
        img: "/burnout.webp",
        urlImg: "/youtube.svg",
        iconLists: ["/telegram.svg", "/ts.svg", "/re.svg", "/tail.svg"],
        link: "https://www.youtube.com/watch?v=s-PjsfRpamM&ab_channel=zkerriga",
    },
    {
        id: 2,
        title: "Water consumption",
        des: "An IoT-based project from Junction 2021 that visualizes real-time water usage, " +
            "encouraging sustainable habits through React and JavaScript dashboards.",
        urlImg: "/youtube.svg",
        img: "/water-consumption.webp",
        iconLists: ["/js.svg", "re.svg", "/tail.svg"],
        link: "https://www.youtube.com/watch?v=jsw0MfUus-o&ab_channel=zkerriga",
    },
    {
        id: 3,
        title: "Wolfenstein",
        des: "A custom raycasting engine in C inspired by Wolfenstein 3D, showcasing advanced low-level graphics, collision detection, and math-driven optimizations.",
        img: "/wolf3d.jpg",
        urlImg: "/git.svg",
        iconLists: ["/c.svg"],
        link: "https://github.com/deddara/cub3d",
    },
    {
        id: 4,
        title: "Ping Pong",
        des: "A social network where users can play online ping pong, create guilds, and track matches in real time, built with Next.js, Tailwind, and TypeScript.",
        img: "/ping-pong.png",
        urlImg: "/git.svg",
        iconLists: ["/js.svg", "/rb.svg"],
        link: "https://github.com/deddara/ft_transcendense/",
    },
    {
        id: 5,
        title: "HTTP Server",
        des: "A lightweight C++ server for parsing HTTP requests, routing, and concurrency, demonstrating networking fundamentals and efficient resource management.",
        img: "http-server.webp",
        urlImg: "/git.svg",
        iconLists: ["/c++.svg"],
        link: "https://github.com/deddara/webserv",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        url: "https://github.com/deddara"
    },
    {
        id: 3,
        img: "/link.svg",
        url: "https://www.linkedin.com/in/deddara/"
    },
];

export const experiences = [
    {
        title: "Kotlin/Java Backend Developer",
        company_name: "Sberbank",
        icon: "/sber-bw.svg",
        iconBg: "#7DC244",
        date: "April 2021 - April 2022",
        points: [
            "Contributed to high-traffic financial platforms, focusing on reliability & performance.",
            "Enhanced monitoring with Grafana and ElasticSearch, reducing incident resolution by 30%.",
            "Contributed to the creation of Sberbank's largest deposit product, serving millions of users.",
            "Developed backend features for dashboards, enabling better insights for employees.",
            "Scaled systems to serve millions of users with near-zero downtime.",
        ],
    },
    {
        title: "Kotlin/Java Product Developer",
        company_name: "Qiwi",
        icon: "/qiwi-bw.svg",
        iconBg: "#FF8C00",
        date: "April 2022 - June 2024",
        points: [
            "Led payday loan service, influencing business decisions and architecture, serving ~50k clients.",
            "Authored high-quality Kotlin code with Spring Boot, reducing production incidents by 30%.",
            "Contributed React (TypeScript) features to expedite product launches.",
            "Implemented microservices to handle 10,000+ concurrent users, boosting scalability by 40%.",
            "Leveraged AWS services (S3, SQS) to build distributed, fault-tolerant systems."
        ],
    },
];
