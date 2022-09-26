import "../css/PerfilPage.css";
import perfil from "../assets/myprofile.png";

export const PerfilPage = () => {
  return (
    <div
        className="about-container">

            <div className="about-desc">
                <h3>Te dire algo sobre mi</h3>
                <p>Mi nombre es Juan Daniel Valderrama Gonález, soy tecnico en Desarrollo de SoftWare, Frontend Developer Enfocado a aplicaciones y desarrollo web.
                </p>
                <p>
                    
                He trabajado como mecanico Automotriz 8 años donde queriendo buscar sobre programcion de computadoras automotrices me econtre con esta carrera y me enamore todos los dias trato de estar a la vanguardia de las tecnologias por que es lo que me apaciona.
                </p>
            </div>

            <div className="about-img">
              <img src={perfil} alt="Mi foto"  />
            </div>
    </div>
  )
}
