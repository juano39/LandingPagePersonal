import "../css/EstudiosPage.css";

export const EstudiosPage = () => {
  return (
    <section id="curriculum" className="curriculum">
    <div className="contenido-seccion">
        <h2>Curriculum</h2>
        <div className="fila" >
            <div className="col izquierda">
                <h3>Educación</h3>
                <div className="item izq">
                    <h4>Bachillerato</h4>
                    <span className="casa">I.E San Jose Obrero</span>
                    <span className="fecha">2005 - 2013</span>
                    <p>Estudio en esta institución 8 años y fue allá donde logre mi primer acercamiento al Desarrollo de SoftWare donde el profesor de Tecnología nos enseñaba que esto era una carrera que seria de mucha demanda y no avían quienes pudieran suplir las necesidades de esta área. </p>
                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
                <div className="item izq">
                    <h4>Tecnico en Desarrollo de SoftWare</h4>
                    <span className="casa">Sena</span>
                    <span className="fecha">2020 - 2022</span>
                    <p>Logre aplicar a una beca en Técnico de desarrollo de softWare donde logre ser aceptado, fue no más cuando ingresé que me di cuenta de que esto era algo grande y muy bonito como de la nada uno puede crear algo grande, y donde se pueden plasmar ideas grandiosas</p>
                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
                <div className="item izq">
                    <h4>Diplomado en Desarrollo Front-end con React JS</h4>
                    <span className="casa">FIMLM</span>
                    <span className="fecha">2022 - 2022</span>
                    <p>Decidiendo alcanzar más conocimiento fue como La FIMLM lanzo un diplomado front end y tu ve la dicha de ser uno de los seleccionados para participar de este diplomado donde alcance mucho conocimiento y crecí mucho en tecnologías.</p>
                    <div className="conectori">
                        <div className="circuloi"></div>
                    </div>
                </div>
            </div>

            <div className="col derecha">
                <h3>Experiencia de trabajo</h3>
                <div className="item der">
                    <h4>Mecanico Automotriz</h4>
                    <span className="casa">Servicentro AutoYA </span>
                    <span className="fecha">2017 - 2021</span>
                    <p>Inicie mi vida laborar un empleo que amo mucho y es la mecanica automotriz, la inicie en el 2013 como ayudante solo de frenos y suspensión y hoy en dia gracias a Dios soy un mecanico que no solo se encarga del área de frenos y supesion sino también del Electricidad y Electrónica, en esta empresa Servicentro AutoYa fue donde logre poner en práctica noto lo que aprendí.</p>
                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div>
                <div className="item der">
                    <h4>Front Developer</h4>
                    <span className="casa">Servicentro AutoYA</span>
                    <span className="fecha">2020 - 2021</span>
                    <p>Tambien fue en esta misma empresa que me dio la oportunidad de relizar mi primer trabajo de una pagina web qeu cree para esta emprea </p>
                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div>
                {/* <div className="item der">
                    <h4>Front Developer</h4>
                    <span className="casa">Nombre de Compañía</span>
                    <span className="fecha">2005 - 2008</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                    <div className="conectord">
                        <div className="circulod"></div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
</section>

  )
}
