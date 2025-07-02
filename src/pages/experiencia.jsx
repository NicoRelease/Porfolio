
import H2 from "../componentes/contenido";

import "../css/experiencia.css";


function Experiencia() {
  const id = "Experiencia";
  const Proyecto = [
    { nombre: "QA", valor: "Desempeño como QA (Quality assurance) validando los desarrollos itinerantes" },
    { nombre: "Analista Funcional", valor: "Encargado de analizar tickets y generación de documentos funcionales que permiten el avance del desarrollo" },
    { nombre: "Consultor tecnologías a medida", valor: "Asesoramiento a empresas y emprendedores para el desarrollo de sus proyectos tecnológicos" },
    { nombre: "Consultor Salesforce", valor: "Desarrollo de soluciones y documentación en tecnólogías Salesforce" },
    { nombre: "Release Manager", valor: "Encargardo de la implementación de los desarrollos realizado por los distintos desarrolladores que hacen al total de la solución" }
  ];

  return (
    <section id={`${id}`}>
      <div className="Titulo">
        <div className="Nombre">
          <h1>
            <a href="./">{`${id}`}</a>
          </h1>
        </div>
      </div>
      <div className="Cuerpo">
        <div className="Descripcion">
          {Proyecto.map((item, index) => (
            <H2 key={index} nombre={item.nombre} valor={item.valor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;