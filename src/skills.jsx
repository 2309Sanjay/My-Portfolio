import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./skills.css"
import { Link } from 'react-router'
import Python from './assets/images/python.png'
import Django from './assets/images/django.png'
import html from './assets/images/html.png'
import css from './assets/images/css.png'
import js from './assets/images/js.png'
import react from './assets/images/react.png'
import bootstrap from './assets/images/bootstrap.png'
import postgres from './assets/images/postgres.png'
import mysql from './assets/images/mysql.png'
import git from './assets/images/git.png'
import ms from './assets/images/ms office.png'


export default function Skill() {
    return (
        <>
            <section className="skills">
                <h1>Skills</h1>
                <div className='skills-list'>
                    <div className="box box1">
                        <img src={Python} alt="" />
                        <strong>Python</strong>
                    </div>
                    <div className="box box2">
                        <img src={Django} alt="" />
                        <strong>Django</strong>
                    </div>
                    <div className="box box3">
                        <img src={html} alt="" />
                        <strong>HTML</strong>
                    </div>
                    <div className="box box4">
                        <img src={css} alt="" />
                        <strong>CSS</strong>
                    </div>
                    <div className="box box5">
                        <img src={js} alt="" />
                        <strong>Java Sricpt</strong>
                    </div>
                    <div className="box box6">
                        <img src={bootstrap} alt="" />
                        <strong>Bootstrap</strong>
                    </div>
                    <div className="box box7">
                        <img src={react} alt="" />
                        <strong>React</strong>
                    </div>
                    <div className="box box8">
                        <img src={postgres} alt="" />
                        <strong>Postgres SQL</strong>
                    </div>
                    <div className="box box9">
                        <img src={mysql} alt="" />
                        <strong>MySQL</strong>
                    </div>
                    <div className="box box10">
                        <img src={git} alt="" />
                        <strong>Git</strong>
                    </div>
                    <div className="box box11">
                        <img src={ms} alt="" />
                        <strong>MS Office</strong>
                    </div>
                </div>
            </section>
        </>
    )
}