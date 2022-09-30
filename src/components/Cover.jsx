import "../css/coverStyls.css"
import cover from "../assets/cover.jpg";

export const Cover = () => {
  return (
    <div className="cover-container">
        <img
            className="video" 
            src={cover} 
            
        >

        </img>

        <h1>Juan Daniel Valderrama</h1>
        <p>Developer | Frontend | Mecanico Automotriz | Desarrollador </p>
    </div>
  )
}
