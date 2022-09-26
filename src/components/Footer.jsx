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
                <h2>Desing By Your Name</h2>
            </div>

            <div className="sns-links">
                <a href="http://" target="_blank">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>

                <a href="http://" target="_blank">
                    <i className="fab fa-twitter twitter"></i>
                </a>

                <a href="http://" target="_blank">
                    <i className="fab fa-facebook facebook"></i>
                </a>
            </div>


        </div>

    </footer>
  )
}
