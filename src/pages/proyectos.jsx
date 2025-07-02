
import H2 from "../componentes/contenido";
function Proyectos() {
  const id = "Proyectos";
  const Proyecto = [
    { nombre: "Aseguradora", valor: "Sancor Seguros" },
    { nombre: "Banco", valor: "Banco Internacional" },
    { nombre: "Financiera", valor: "Financiera Internacional" },
    { nombre: "E-commerce", valor: "Avon cosmeticos" },
    { nombre: "E-learning", valor: "Diageo" }
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

export default Proyectos;