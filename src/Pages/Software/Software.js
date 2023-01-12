import React from 'react';

import {Link} from 'react-router-dom';

const Software = () => {
    return (        
        <div className='row'>
            <div className="sidebar col-3 position-fixed">
                <div id="list-example" className="list-group">
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-skills">Skills</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-projects">Projects</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-education">Education</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-certification">Certification</a>
                    <a className="list-group-item list-group-item-action list-group-item-primary" href="#list-courses">Courses</a>
                </div>
            </div>

            <div className="scrollspy-example col-6 offset-3" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">

                <section className="content-section">
                    <h2 id="list-skills" className="text-primary">Skills</h2>
                    <hr/>
                    <h4>Programming languages & Tools</h4>
                    <ul>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Docker</li>
                        <li>C#</li>
                        <li>JavaScript</li>
                        <li>Node JS</li>
                        <li>Git</li>
                        <li>Jenkins</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2 id="list-projects" className="text-primary">Projects</h2>
                    <hr/>
                    <p>Projects I have worked on:</p>
                    <ul>
                        <li><Link reloadDocument to="/pages/software/dxp-development">DXP development- OPPLE catalog generator</Link></li>
                        <li><Link reloadDocument to="/pages/software/configuration-automation">Configuration automation</Link></li>
                        <li><Link reloadDocument to="/pages/software/wifi-prototype">Wi-Fi prototype</Link></li>
                        <li><Link reloadDocument to="/pages/software/embedded-game">Embedded Game</Link></li>
                        <li><Link reloadDocument to="/pages/software/kanji-application">Kanji flashcard Android application</Link></li>
                        <li><Link reloadDocument to="/pages/software/raspberry-pi-jukebox">Raspberry Pi Jukebox</Link></li>
                        <li><Link reloadDocument to="/pages/software/attachment-module">Attachment Module</Link></li>
                        <li><Link reloadDocument to="/pages/software/teslamaze">TeslaMaze</Link></li>
                        <li><Link reloadDocument to="/pages/software/embedded-internet-radio">Embedded Internet Radio</Link></li>
                        <li><Link reloadDocument to="/pages/software/windows10-cookbook">Windows 10 Cookbook</Link></li>
                    </ul>
                </section>

                <section className="content-section">
                    <div className='content-item'>
                        <h2 id="list-education" className="text-primary">Education</h2>
                        <hr/>
                        <h4 className="mb-0">Computer engineering of applied computer science</h4>
                        <h6>Bachelor of computer science</h6>
                        <p className="mb-3">Avans Hogeschool - Breda, Netherlands</p>
                        <span className="text-primary">2012 - 2016</span>
                    </div>

                    <div className='content-item'>
                        <h4 className="mb-0">Interactive media design</h4>
                        <h6>MBO diploma</h6>
                        <p className="mb-3">Eindhovenseschool / Sint Lucas - Eindhoven, Netherlands</p>
                        <span className="text-primary">2009 - 2012</span>
                    </div>
                </section>


                <section className="content-section">
                    <h2 id="list-certification" className="text-primary">Certification</h2>
                    <hr/>
                    <div className='content-item'>
                        <h4 className="mb-0">LPIC-1</h4>
                        <h6>Linux professional institute certification</h6>
                        <p><a target="_blank" rel="noreferrer" href="https://www.lpi.org/our-certifications/lpic-1-overview">lpi.org</a></p>                    
                        <span className="text-primary">2022  (expires in 2027)</span>
                    </div>
                    <div className='content-item'>
                        <h4 className="mb-0">Drupal 9 Site Builder</h4>
                        <p><a target="_blank" rel="noreferrer" href="https://certification.acquia.com/user/18196">acquia.com</a></p>                    
                        <span className="text-primary">2022</span>
                    </div>
                </section>


                <section className="content-section">
                    <h2 id="list-courses" className="text-primary">Courses</h2>
                    <hr/>
                    <div className='content-item'>
                        <h6 className="mb-0">Docker Mastery: Kubernetes + Swarm from a Docker Captain</h6>
                        <p>
                            <a target="_blank" rel="noreferrer" href="https://www.udemy.com/course/docker-mastery/">udemy.com</a>
                            &nbsp;|&nbsp;
                            <a href={`${process.env.PUBLIC_URL}/udemy-certs/UC-19ac22fe-70fa-47bd-804c-83f3aa4ac218.jpg`}>certificate</a>
                            </p>
                        <span className="text-primary">2021</span>
                    </div>
                    <div className='content-item'>
                        <h6 className="mb-0">Beginning C++ Programming From Beginner to Beyond</h6>
                        <p>
                            <a target="_blank" rel="noreferrer" href="https://www.udemy.com/course/beginning-c-plus-plus-programming/">udemy.com</a>
                            &nbsp;|&nbsp;
                            <a href={`${process.env.PUBLIC_URL}/udemy-certs/UC-9f15ebd2-2a9a-489f-b8ca-7e8b175bc12f.pdf`}>certificate</a>
                        </p>
                        <span className="text-primary">2020</span>
                    </div>
                    <div className='content-item'>
                        <h6 className="mb-0">Learn Linux in 5 Days and Level Up Your Career</h6>
                        <p>
                            <a target="_blank" rel="noreferrer" href="https://www.udemy.com/course/learn-linux-in-5-days/">udemy.com</a>
                            &nbsp;|&nbsp;
                            <a href={`${process.env.PUBLIC_URL}/udemy-certs/UC-0BB6GYJ1.pdf`}>certificate</a>
                        </p>
                        <span className="text-primary">2019</span>
                    </div>
                </section>
            </div>

        </div>
        )
}

export default Software;