import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Builder from "@/pages/Builder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
