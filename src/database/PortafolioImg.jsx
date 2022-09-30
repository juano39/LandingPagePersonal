import React from "react";
import "../css/PortafolioPage.css"
import portafolio1 from "../assets/todo.png";
import trello from "../assets/trello.png";
import landinPage from "../assets/landingpage.png"
import udemi from "../assets/udemi.png"

const slidesInfo = [
    {
        src: portafolio1,
        alt: "To-Do",
        desc: "To-Do"
    },

    {
        src: landinPage,
        alt: "proyeto 2",
        desc: "Landing Page"
    },

    {
        src: trello,
        alt: "proyeto 3",
        desc: "Trello"
    },

    {
        src: udemi,
        alt: "proyeto 4",
        desc: "Imitacion Udemy"
    }
]


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>

        </div>

    </div>
))

export default slides;