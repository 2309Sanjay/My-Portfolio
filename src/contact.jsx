import React from "react";

import './contact.css'

import gmail from './assets/images/gmail.png'
import whatsapp from './assets/images/whatsapp.png'
import call from './assets/images/phone call.png'
import linkedin from './assets/images/linkedin.png'
import github from './assets/images/github.png'

import { FaGithub, FaDownload } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

