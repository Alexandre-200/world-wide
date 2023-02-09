import { Routes, Route } from "react-router-dom";
import IsCountry from "./core/pages/IsCountry";
import Home from "./core/pages/Home";
import NotFound from "./core/pages/NotFound";
import IsState from "./core/pages/IsState";
import State from "./core/pages/State";

const App = () => {
  return (
    <Routes>
      <Route path="/world-wide/" element={<Home />} />
      <Route path="/states" element={<State/>} />
      <Route path="/country/:isoCode" element={<IsCountry />} />
      <Route path="/state/:isoCode" element={<IsState />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
