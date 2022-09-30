import "../css/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h2>Juan Valderrama</h2>
            <p>Desarrollador de SoftWare</p>

        </div>

        <div className="footer-contact">
            <h3>Contactame</h3>
            <p>Y pongamonos manos a la obra</p>

        </div>

        <div className="footer-sns">
            <div className="desing-by">
                <h2>Diseñado Por Juan Daniel Valderrama</h2>
            </div>

            <div className="sns-links">

                <a href="https://twitter.com/juandanielvg02" target="_blank">
                    <i className="fab fa-twitter twitter"></i>
                </a>

                <a href="https://www.linkedin.com/in/juan-daniel-valderrama-976a2620b/" target="_blank">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="https://www.facebook.com/jd.mono38" target="_blank">
                    <i className="fab fa-facebook facebook"></i>
                </a>
            </div>


        </div>

    </footer>
  )
}
