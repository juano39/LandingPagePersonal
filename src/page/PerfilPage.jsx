import "../css/PerfilPage.css";
import perfil from "../assets/myprofile.png";

export const PerfilPage = () => {
  return (
    <div
        className="about-container">

            <div className="about-desc">
                <h3>Te dire algo sobre mi</h3>
                <p>Mi nombre es Juan Daniel Valderrama González, soy técnico en Desarrollo de SoftWare, Frontend Developer Enfocado a aplicaciones y desarrollo web.
                </p>
                <p>
                    
                He trabajado como mecanico Automotriz 8 años donde queriendo buscar sobre programación de computadoras automotrices me encontré con esta carrera y me enamore todos los dias trato de estar a la vanguardia de las tecnologías porque es lo que me apasioná.
                </p>
            </div>

            <div className="about-img">
              <img src={perfil} alt="Mi foto"  />
            </div>
    </div>
  )
}
