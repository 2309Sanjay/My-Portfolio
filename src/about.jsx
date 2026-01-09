import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./about.css"
import { Link } from 'react-router'

import Nav from "./nav"

export default function About() {

    return (
        <>
            <section className="about">
                <h1>About Me</h1>
                <div>
                    <summary>
                        <p>I’m Sanjay V, a passionate Python Full Stack Developer from Chennai with hands-on experience in building responsive, user-focused web applications. I specialize in developing end-to-end solutions using Python, Django, HTML, CSS, JavaScript, React, and REST APIs, with strong knowledge of database-driven systems using PostgreSQL and MySQL.</p>
                        <p> I enjoy turning ideas into real-world applications—whether it’s building a movie ticket booking system with real-time availability, designing mobile-responsive e-commerce interfaces, or creating visually engaging websites using clean and efficient code. I focus on writing maintainable code, debugging efficiently, and continuously improving application performance. </p>
                        <p> With a background in Engineering (EEE) and formal training as a Python Full Stack Developer, I bring a logical, problem-solving mindset to every project. </p>
                        <p> I’m eager to grow as a developer, contribute to impactful projects, and work in collaborative environments where I can learn and add value. </p>
                    </summary>
                </div>
            </section>
        </>
    )
}