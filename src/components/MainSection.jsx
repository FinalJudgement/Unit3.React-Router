import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Orange from "./Orange";
import Green from "./Green";
import Pink from "./Pink";

const MainSection = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/blue"} element={<Blue />} />
        <Route path={"/red"} element={<Red />} />
        <Route path={"/orange"} element={<Orange />} />
        <Route path={"/green"} element={<Green />} />
        <Route path={"/pink"} element={<Pink />} />
      </Routes>
    </div>
  );
};

export default MainSection;
