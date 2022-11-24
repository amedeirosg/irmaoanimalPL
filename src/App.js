import Conteudo from "./components/Conteudo.js";
import Adote from "./components/Adote.js";
import Ajude from "./components/Ajude.js";
import Apadrinhe from "./components/Apadrinhe.js";
import Sobre from "./components/Sobre.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Conteudo />} />
          <Route path="/adote" element={<Adote />} />
          <Route path="/ajude" element={<Ajude />} />
          <Route
            path="/apadrinhe"
            element={
              <Apadrinhe
                nome1="floki"
                nome2="aslan"
                idade1="2 anos"
                idade2="3 anos"
                genero1="Macho"
                genero2="femea"
              />
            }
          />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
