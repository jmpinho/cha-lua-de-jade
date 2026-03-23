import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Vitrine from "./paginas/Vitrine";
import Detalhe from "./paginas/Detalhe";
import Sobre from "./paginas/Sobre";
import NotFound from "./paginas/NotFound";
import Contato from "./paginas/Contato";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import "./CSS/App.css";


function App() {
  return (
    <BrowserRouter>

      <div className="layout">

        <Navbar />

        <main className="conteudo">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Vitrine" element={<Vitrine />} />
            <Route path="/produto/:id" element={<Detalhe />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;