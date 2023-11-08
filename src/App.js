import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavigation from "./shared/components/navigation/MainNavigation";
import SkillsPage from "./SkillsPage/Pages/SkillsPage";
import GroupSkillsPage from "./GroupSkillsPage/Pages/GroupSkillsPage";
import CustomiseSkillPage from "./CustomiseSkillPage/Pages/CustomiseSkillPage";
import HomePage from "./HomePage/Pages/HomePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/sprawnosci/:id/edytuj" element={<CustomiseSkillPage />} />
        <Route path="/sprawnosci/:id" element={<SkillsPage />} />
        <Route path="/sprawnosci/" element={<SkillsPage />} />

        <Route path="/tropy" element={<GroupSkillsPage />} />
        <Route path="/tropy/:id" element={<GroupSkillsPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
