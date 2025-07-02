import { Routes, Route } from "react-router-dom";
import Header from "./componentes/header.jsx";
import Footer from "./componentes/footer.jsx";
import "../src/App.css";
import Index from "./pages/index.jsx";
import Experiencia from "./pages/experiencia.jsx";
import Proyectos from "./pages/proyectos.jsx";
import SobreMi from "./pages/sobremi.jsx";

function App() {
  return (
 <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobremi" element={<SobreMi />} />
        </Routes>
      </main>
      <Footer></Footer>
 </div>
  );
}

export default App;
