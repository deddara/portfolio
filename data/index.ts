export const contactEmail = "amirhan16616@gmail.com";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I build backend systems for bookings and payments, where a failed request has a real cost.",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full [filter:hue-rotate(-72deg)_saturate(0.85)]",
        titleClassName: "justify-end",
        img: "/16.webp",
        spareImg: "",
    },
    {
        id: 2,
        title: "Remote-first, working across time zones",
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
        description: "Go first, JVM when it fits",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Open to Go backend roles.",
        description: "Right now",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        // размер зафиксирован: grid.webp имеет удвоенное разрешение (720x369) против прежнего grid.svg (351x180)
        imgClassName: "w-[351px] h-[180px]",
        titleClassName: "justify-start",
        img: "/grid.webp",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "I lead features end to end, from shaping requirements with partners to the release.",
        description: "How I work",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.webp",
        spareImg: "/grid.webp",
    },
    {
        id: 6,
        title: "Have a role in mind? Let's talk.",
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
        title: "Sorta",
        des: "Photograph your belongings, an LLM recognises and prices each one, and you get a sell / take / store / toss call before a move. " +
            "A single Go binary with the React PWA embedded via go:embed, on Postgres with sqlc.",
        img: "/sorta-cover.svg",
        urlImg: "/external-link.svg",
        iconLists: ["/go.svg", "/re.svg", "/ts.svg", "/dock.svg"],
        link: "https://thesorta.com",
    },
    {
        id: 2,
        title: "Burnout problem",
        des: "A hackathon solution tackling emotional burnout in remote learning, built with React + TypeScript, " +
            "that placed 1st in the Junction 2020 Kazan campus.",
        img: "/burnout.webp",
        urlImg: "/youtube.svg",
        iconLists: ["/telegram.svg", "/ts.svg", "/re.svg", "/tail.svg"],
        link: "https://www.youtube.com/watch?v=s-PjsfRpamM&ab_channel=zkerriga",
    },
    {
        id: 3,
        title: "Water consumption",
        des: "An IoT-based project from Junction 2021 that visualizes real-time water usage, " +
            "encouraging sustainable habits through React and JavaScript dashboards.",
        urlImg: "/youtube.svg",
        img: "/water-consumption.webp",
        iconLists: ["/js.svg", "/re.svg", "/tail.svg"],
        link: "https://www.youtube.com/watch?v=jsw0MfUus-o&ab_channel=zkerriga",
    },
    {
        id: 4,
        title: "Wolfenstein",
        des: "A custom raycasting engine in C inspired by Wolfenstein 3D, showcasing advanced low-level graphics, collision detection, and math-driven optimizations.",
        img: "/wolf3d.jpg",
        urlImg: "/git.svg",
        iconLists: ["/c.svg"],
        link: "https://github.com/deddara/cub3d",
    },
    {
        id: 5,
        title: "Ping Pong",
        des: "A social network where users can play online ping pong, create guilds, and track matches in real time, built with Next.js, Tailwind, and TypeScript.",
        img: "/ping-pong.png",
        urlImg: "/git.svg",
        iconLists: ["/js.svg", "/rb.svg"],
        link: "https://github.com/deddara/ft_transcendense/",
    },
    {
        id: 6,
        title: "HTTP Server",
        des: "A lightweight C++ server for parsing HTTP requests, routing, and concurrency, demonstrating networking fundamentals and efficient resource management.",
        img: "/http-server.webp",
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
        title: "Go Backend Developer, Feature Lead",
        company_name: "2GIS - Otello",
        icon: "/2gis-bw.svg",
        iconBg: "#19AA1E",
        date: "June 2025 - Present",
        points: [
            "Owned guest relocations end to end as feature lead: a two-month team effort replacing manual rehousing by support, who used to rebook stranded guests by hand and occasionally pay with personal cards.",
            "Every relocation now creates its own booking and payment, links them to the original order and writes the whole chain into history, instead of the trail living in support chat logs.",
            "Led the epic fixing attribution across three CPA networks (Admitad, Travelpayouts, Perfluence) - returning customers were billed as new ones, costing 100-600k RUB a month. Shipped a week ahead of schedule.",
            "Integrated Gimmonix, an international aggregator, owning the whole conversion block - booking, cancellation, payment, receipts - including a nested supplier hierarchy our single-provider architecture never anticipated.",
            "Extracted the booking module behind a clean service contract (hexagonal architecture), moving every direct DB query across all domains onto it, so changes to bookings stop breaking orders and payments.",
            "Automated engineer support: status changes with a role model and full audit instead of manual DB edits, plus automatic retries for fatal booking errors and a retry endpoint in the admin panel.",
        ],
    },
    {
        title: "Kotlin/Java Product Developer",
        company_name: "Qiwi",
        icon: "/qiwi-bw.svg",
        iconBg: "#FF8C00",
        date: "April 2022 - June 2025",
        points: [
            "Led payday loan service, influencing business decisions and architecture, serving ~50k clients.",
            "Authored high-quality Kotlin code with Spring Boot, reducing production incidents by 30%.",
            "Contributed React (TypeScript) features to expedite product launches.",
            "Implemented microservices to handle 10,000+ concurrent users, boosting scalability by 40%.",
            "Leveraged AWS services (S3, SQS) to build distributed, fault-tolerant systems."
        ],
    },
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
];
