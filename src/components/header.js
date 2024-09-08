import React from "react";
import "../../src/global.css";

function Header() {
  return (
    <header
      className="container-fluid py-4 header-container"
      style={headerStyle}
    >
      <div className="container-fluid mt-4 ">
        <div className="d-flex align-items-center">
          <h3 className="mb-0 header-text" style={nameStyle}>
            <span style={{ fontWeight: 300 }}>KRISTIANS</span> DANILOVS
          </h3>
          <div className="mt-2">
            <p className="mb-0 subtitle-text" style={subtitleStyle}>
              portfolio website
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

// Styles for the header
const headerStyle = {
  position: "relative",
  zIndex: 1000,
  textAlign: "left", // Align text to the start (left)
};

const nameStyle = {
  color: "#F9F6EE", // Light color for the text
  marginRight: "12px", // Space between name and subtitle
};

const subtitleStyle = {
  color: "#F9F6EE", // Light color for the subtitle
};

export default Header;
