import { Routes, Route } from "react-router-dom";

import Sobre from "../pages/Sobre";

const Router = () => (
    <Routes>
        <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
  
  export default Router;