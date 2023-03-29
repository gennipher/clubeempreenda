import { Routes, Route } from "react-router-dom";

import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Router = () => (
    <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
  
  export default Router;