import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpages from "./pages/Mainpages";
import Detailpage from "./pages/Detailpages";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
            <Header/>
      <Routes>
        <Route path="/" element={<Mainpages />} />
        <Route path="/detay/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
