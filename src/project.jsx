import React from "react";
import Nav from "./nav"
import "./project.css";

const projects = [
    {
        title: "Movie Ticket Booking System",
        description:
            "A full-stack web application for booking movie tickets with real-time seat availability, secure booking, and dynamic pricing.",
        tech: "Python, Django, HTML, CSS, JavaScript, PostgreSQL",
        link: "https://github.com/2309Sanjay"
    },
    {
        title: "Meat Website",
        description:
            "A mobile-responsive meat delivery website with dynamic product cards and user-friendly layout.",
        tech: "HTML, CSS, JavaScript",
        link: "https://2309sanjay.github.io/Meat-website/"
    },
    {
        title: "Gaming Website",
        description:
            "A visually appealing gaming website featuring hero banners, cards, and CSS animations.",
        tech: "HTML, CSS",
        link: "https://2309sanjay.github.io/gaming-website/"
    },
];

export default function Projects() {
    return (
        <section className="project">
            <h1>My Projects</h1>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p className="description">{project.description}</p>
                        <p className="tech">
                            <strong>Tech Stack:</strong> {project.tech}
                        </p>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
