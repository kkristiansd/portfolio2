// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact";
import ExperienceCarousel from "./components/experience";

function App() {
  return (
    <div style={appStyle}>
      <div>
        <Header />
      </div>
      <div className=" mt-4 ">
        <Hero />
      </div>
      <div className=" mt-4 ">
        <ExperienceCarousel />
      </div>

      <Contact />
    </div>
  );
}
const appStyle = {
  backgroundColor: "#292929",
  backgroundImage:
    "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2771%27 height=%2771%27 viewBox=%270 0 200 200%27%3E%3Cdefs%3E%3ClinearGradient id=%27a%27 gradientUnits=%27userSpaceOnUse%27 x1=%27100%27 y1=%2733%27 x2=%27100%27 y2=%27-3%27%3E%3Cstop offset=%270%27 stop-color=%27%23000%27 stop-opacity=%270%27/%3E%3Cstop offset=%271%27 stop-color=%27%23000%27 stop-opacity=%271%27/%3E%3C/linearGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%27100%27 y1=%27135%27 x2=%27100%27 y2=%2797%27%3E%3Cstop offset=%270%27 stop-color=%27%23000%27 stop-opacity=%270%27/%3E%3Cstop offset=%271%27 stop-color=%27%23000%27 stop-opacity=%271%27/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill=%27%23242424%27 %3E%3Crect x=%27100%27 width=%27100%27 height=%27100%27/%3E%3Crect y=%27100%27 width=%27100%27 height=%27100%27/%3E%3C/g%3E%3Cg fill-opacity=%271%27%3E%3Cpolygon fill=%27url(%23a)%27 points=%27100 30 0 0 200 0%27/%3E%3Cpolygon fill=%27url(%23b)%27 points=%27100 100 0 130 0 100 200 100 200 130%27/%3E%3C/g%3E%3C/svg%3E')",

  minHeight: "100vh",
};
export default App;
