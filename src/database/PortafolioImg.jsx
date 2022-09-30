import React from "react";
import "../css/PortafolioPage.css"
import portafolio1 from "../assets/todo.png";
import trello from "../assets/trello.png";
import landinPage from "../assets/landingpage.png"
import udemi from "../assets/udemi.png"
import autoYA from "../assets/autoYA.png"

const slidesInfo = [
    {
        src: portafolio1,
        alt: "To-Do",
        desc: "To-Do",
        repo: "https://github.com/juano39/To-Do-List"
    },

    {
        src: landinPage,
        alt: "proyeto 2",
        desc: "Landing Page",
        repo: "https://github.com/juano39/LandingPagePersonal"
    },

    {
        src: trello,
        alt: "proyeto 3",
        desc: "Trello",
        repo: "https://github.com/juano39/trello-fimm"
    },

    {
        src: udemi,
        alt: "proyeto 4",
        desc: "Imitacion Udemy",
        repo: "https://github.com/juano39/clonUdemy"
    },

    {
        src: autoYA,
        alt: "proyeto 4",
        desc: "AutoYa",
        repo: "https://autoya.netlify.app/index.html"
    }
]


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <a href={slide.repo} target="_blank">{slide.desc}</a>

        </div>

    </div>
))

export default slides;