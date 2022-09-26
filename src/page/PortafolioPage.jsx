import "../css/PortafolioPage.css"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "../database/PortafolioImg"

export const PortafolioPage = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
            <h2>Mis Proyectos</h2>

        </div>

        <Carousel
            arrows
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={Slides}
            breakpoints={{
              960: {
                slidesPerPage: 1,
                arrows: false,
                itemWidth: 250,
              },
            }}
        />

    </div>
  )
}
