

import H2 from "../componentes/contenido";

import "../css/experiencia.css";

function Sobremi() {
   const id = "Sobre mi";
  const Proyecto = [
    { nombre: "La experiencia por sobre todo", valor: "El estudio te dá conocimientos que como herramientas te da la posibilidad de utilizarlas y producir cosasa increibles, pero la experiencia de como y cuando aplica usar una u otra, solo proviene de haber puesto en práctica ese conocimiento adquirido" }
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

export default Sobremi;