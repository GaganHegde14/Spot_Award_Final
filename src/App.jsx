import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import First from "./pages/First.jsx";
import Second from "./pages/Second.jsx";
import Third from "./pages/Third.jsx";
import Fourth from "./pages/Fourth.jsx";
import Fifth from "./pages/Fifth.jsx";
import Sixth from "./pages/Sixth.jsx";
import Seventh from "./pages/Seventh.jsx";
import Eighth from "./pages/Eighth.jsx";
import Ninth from "./pages/Ninth.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="/seventh" element={<Seventh />} />
        <Route path="/eighth" element={<Eighth />} />
        <Route path="/ninth" element={<Ninth />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
