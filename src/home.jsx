import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import home from "./assets/images/portfolio home.gif"

import { Link } from "react-router-dom";
import "./home.css";
import profile from "./assets/images/profile.png";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="hero-title">
          Hi, I’m  <span> Sanjay</span>
        </h1>

        <p className="hero-subtitle">
          Python Full Stack Developer
        </p>

        <p className="hero-desc">
          I build responsive, scalable web applications using Python, Django,
          React, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <Link to="/project">
            <button className="primary-btn">View Projects</button>
          </Link>

          <Link to="/contact">
            <button className="secondary-btn">Contact Me</button>
          </Link>
        </div>
      </div>

      <div className="home-image">
        <img src={profile} alt="Sanjay profile" />
      </div>
    </section>
  );
}


