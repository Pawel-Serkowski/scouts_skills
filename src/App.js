import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<div>aaa</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
