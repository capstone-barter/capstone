import Login from "./components/Login";
import NavBar from "./components/Navbar";
import useToken from "./components/useToken";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Locator from "./pages/Locator";
import Model from "./pages/Model";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GeospatialModel from "./pages/Notebook";

function App() {
  /*
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  */
  return (
    <div className="App">
      <NavBar />
      <div className="mt-20 ml-20 mr-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Locator" element={<Locator />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/Notebook" element={<GeospatialModel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
