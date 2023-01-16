import { Routes, Route } from "react-router-dom";
import Country from "./core/pages/Country";
import Home from "./core/pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/states" element={<h1>Estados</h1>} />
      <Route path="/country/:isoCode" element={<Country/>} />
      <Route path="*" element={<h1>Pagina nao encontrada</h1>} />
    </Routes>
  );
};

export default App;
