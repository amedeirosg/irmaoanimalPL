import Conteudo from "./components/Conteudo.js";
import Adote from "./components/Adote.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Conteudo />} />
          <Route path="/adote" element={<Adote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;