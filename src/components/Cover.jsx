import "../css/coverStyls.css"
import coverVideo from "../assets/coverVideo.mp4";

export const Cover = () => {
  return (
    <div className="cover-container">
        <video 
            className="video" 
            src={coverVideo} 
            autoPlay 
            loop 
            muted
        >

        </video>

        <h1>Juan Daniel Valderrama</h1>
        <p>Developer | Frontend | Mecanico Automotriz | Desarrollador </p>
    </div>
  )
}
