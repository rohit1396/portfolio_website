import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <About />
            <Skills />
            <Projects />
          </>
        }
      />
    </Routes>
  );
};

export default App;
