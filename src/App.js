import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import MainNavigation from "./shared/components/navigation/MainNavigation";
import SkillsPage from "./SkillsPage/Pages/SkillsPage";
import HomePage from "./HomePage/Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation/>
        <Routes>
          <Route path="/"  index element={<HomePage/>}/>
          <Route path="/sprawnosci" element={<SkillsPage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
