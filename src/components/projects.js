// src/components/Projects.js
import React from "react";

function Projects() {
  return (
    <section id="projects" className="p-5 bg-light">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="project1.jpg"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of the project...</p>
              </div>
            </div>
          </div>
          {/* More projects */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
