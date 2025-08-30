import { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from './Home';
// import Contact from './Contact';
import SowmyaResume from '../Resumes/Sowmya React CV new 1.pdf';

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark bg-gradient fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand ps-1" href="/">
            <h1 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "36px" }}>Sowmya</h1>
          </a>
          <button className="navbar-toggler" type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNavAltMarkup"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation">
            {isCollapsed ? (
              <span className="navbar-toggler-icon"></span> // default hamburger
            ) : (
              <span className="fs-1 fw-bold text-white">×</span> // close icon
            )}
          </button>
          {/* <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup"> */}
          <div className={`collapse navbar-collapse  ${!isCollapsed ? "show" : ""} justify-content-end`} id="navbarNavAltMarkup">
            <div className="navbar-nav mx-2">
              <a className="nav-link px-3 leftSideMenu" aria-current="page" href="#home" onClick={() => setIsCollapsed(true)}>Home</a>
              <a className="nav-link px-3 leftSideMenu" href="#about" onClick={() => setIsCollapsed(true)}>About</a>
              <a className="nav-link px-3 leftSideMenu" href="#service" onClick={() => setIsCollapsed(true)}>Services</a>
              <a className="nav-link px-3 leftSideMenu" href="#projects" onClick={() => setIsCollapsed(true)}>Projects</a>
              <a className="nav-link px-3 leftSideMenu" href="#contact" onClick={() => setIsCollapsed(true)}>Contact</a>
              {/* <button type="button" className="btn btn-outline-info px-3">Resume</button> */}
              <a href={SowmyaResume} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info px-3">Resume</a>

              <div className="form-check form-switch px-3 d-flex align-items-center themeButton">
                <button className="btn btn-outline-secondary px-1 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }} onClick={() => setTheme(theme === "light" ? "dark" : "light")}> <i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i> </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>

  );

}