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
          <Route path="/apadrinhe" element={<Apadrinhe />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
