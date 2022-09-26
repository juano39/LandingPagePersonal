import React from "react";
import "../css/PortafolioPage.css"
import portafolio1 from "../assets/portafolio1.jpg";

const slidesInfo = [
    {
        src: portafolio1,
        alt: "proyeto 1",
        desc: "project 1"
    },

    {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        alt: "proyeto 2",
        desc: "project 2"
    },

    {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "proyeto 3",
        desc: "project 3"
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