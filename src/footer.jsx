import React from "react";

import './app.css'

import gmail from './assets/images/gmail.png'
import whatsapp from './assets/images/whatsapp.png'
import call from './assets/images/phone call.png'
import linkedin from './assets/images/linkedin.png'
import github from './assets/images/github.png'

import { FaGithub, FaDownload } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer>

                <div className="contact-buttons">

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/918939419545"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn whatsapp"
                    >
                        <img src={whatsapp} alt="" /> <p> Whatsapp </p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/sanjayv2309"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-btn"
                    >
                        <img src={linkedin} alt="" /> <p> LinkedIn </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/2309Sanjay"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-btn"
                    >
                        <FaGithub /> <p> GitHub </p>
                    </a>

                    {/* Gmail */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjayvasudevan2309@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-btn">
                        <img src={gmail} alt="" /> <p> Email </p>
                    </a>

                    {/* Phone */}
                    <a href="tel:+918939419545" className="contact-btn">
                        <img src={call} alt="" /> <p> Call </p>
                    </a>
                </div>

                <div>
                    {/* CV Download */}
                    <a
                        href={`${import.meta.env.BASE_URL}Sanjay_resume.pdf`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-btn"
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>

                <strong> &copy; 2024 Sanjay AD. All rights reserved. </strong>
            </footer >
        </>
    )
}