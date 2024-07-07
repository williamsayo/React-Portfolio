import hotel_cardiff_1 from "../assets/hotel-cardiff-1.png";
import hotel_cardiff_2 from "../assets/hotel-cardiff-3.png";
import hotel_cardiff_3 from "../assets/hotel-cardiff-2.png";
import ticTacToe from "../assets/tictactoe.png";
import ticTacToe_2 from "../assets/tictactoe2.png";
import crypto_trackr from "../assets/crypto-trackr-to-scale.png";
import crypto_trackr_1 from "../assets/crypto-trackr-to-scale-1.png";
import reactSvg from "../assets/react-icon.svg";
import tailwindSvg from "../assets/tailwind.svg";
import djangoSvg from "../assets/django-icon.svg";
import postgresSvg from "../assets/postgresql.svg";
import htmlImg from "../assets/html-5.png";
import cssImg from "../assets/css-3.png";
import nodeSvg from "../assets/nodejs.svg";
import jsSvg from "../assets/javascript.svg";
import expressSvg from "../assets/express.svg";
import flaskSvg from "../assets/flask.svg";
import portfolio from "../assets/portfolio-1.png";
import portfolio_1 from "../assets/portfolio-2.png";

export const selectedWorks = [
    {
        title: "Hotel Cardiff",
        description:
            "The hotel site was built using React, a popular and powerful front-end JavaScript library. Users can easily book rooms, view amenities, and explore the hotel's offerings through the site.",
        image: [hotel_cardiff_1, hotel_cardiff_2, hotel_cardiff_3],
        category: "web",
        link: "https://hotelcardiff.netlify.app/",
        language: [{ name: "react", img: reactSvg }],
    },
    {
        title: "Crypto-trackr",
        description:
            "full-stack web application that provides real-time cryptocurrency prices from various exchange sites. React and Tailwind CSS for the frontend, Django for the backend using Django Rest Framework which will handle the data fetching and caching mechanisms and ensure that users can access up-to-date cryptocurrency prices across multiple currencies efficiently, with reduced latency and improved performance due to the cached data.",
        image: [crypto_trackr, crypto_trackr_1],
        category: "web",
        link: "https://crypto-trackr.up.railway.app/",
        language: [
            { name: "react", img: reactSvg },
            { name: "tailwind", img: tailwindSvg },
            { name: "django", img: djangoSvg },
            { name: "postreSql", img: postgresSvg },
        ],
    },
    {
        title: "Tic-Tac-Toe Game",
        description:
            "A React-based multiplayer Tic Tac Toe game that features a real-time display of players' previous moves in a detailed log",
        image: [ticTacToe, ticTacToe_2],
        category: "web",
        language: [{ name: "react", img: reactSvg }],
    },
    {
        title: "My Portfolio website",
        description:
            "A responsive portfolio website design that works across various devices and screen sizes seamlessly. It features a contact form that allows visitors to send emails directly to the me, facilitating easy communication and networking.",
        image: [portfolio, portfolio_1],
        category: "web",
        language: [{ name: "react", img: reactSvg }],
    },
];

export const frontendSkills = [
    { name: "HTML5", skillLevel: "90%", image: htmlImg, class: "html" },
    { name: "CSS", skillLevel: "80%", image: cssImg, class: "css" },
    {
        name: "Javascript",
        skillLevel: "90%",
        image: jsSvg,
        class: "javascript",
    },
    {
        name: "React JS",
        skillLevel: "90%",
        image: reactSvg,
        class: "javascript",
    },
    {
        name: "Tailwind CSS",
        skillLevel: "70%",
        image: tailwindSvg,
        class: "tailwind",
    },
];

export const backendSkills = [
    { name: "Node JS", skillLevel: "50%", image: nodeSvg, class: "node" },
    {
        name: "Express JS",
        skillLevel: "30%",
        image: expressSvg,
        class: "express",
    },
    { name: "Django", skillLevel: "80%", image: djangoSvg, class: "django" },
    { name: "Flask", skillLevel: "65%", image: flaskSvg, class: "flask" },
    {
        name: "PostgreSQL",
        skillLevel: "70%",
        image: postgresSvg,
        class: "postgres",
    },
];
