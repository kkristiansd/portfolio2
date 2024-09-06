// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
