import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <section className="content-section">
                    <h1 className="text-primary">Hallo, my name is Kevin.</h1>
                    <h3 className="text-secondary">Nice to meet you! :)</h3>
                    <p>I am a programmer and enjoy building software. I have done <Link reloadDocument to="/pages/software/configuration-automation">configuration automation</Link>, <Link reloadDocument to="/pages/software/dxp-development">DXP development</Link> and other <Link reloadDocument to="/pages/software#list-projects">projects</Link>.</p>
                    <p>When it comes to technology and engineering, I am always curious and eager to learn and adept myself. One of the things I enjoy the most is being able to teach others. Interns who enthousiastically become better programmers themselves through my knowledge is amazing! Check out my <Link reloadDocument to="/pages/software">Software</Link> journey.</p>
                    <p>My other interests are:</p>
                    <ul>
                        <li><Link reloadDocument to="/pages/radio">amateur radio</Link></li>
                        <li>Linux</li>
                        <li>electronics</li>
                        <li><Link reloadDocument to="/pages/japanese">learning Japanese</Link></li>
                        <li>woodworking</li>
                        <li>synthesize music</li>
                        <li>yoga</li>
                    </ul>
                    <p>I am based in Helmond, the Netherlands.</p>
                    <p>
                        <a href="https://github.com/PA4KEV" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/github.webp`} alt="github icon" />
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/kevin-van-der-vleuten-b190b032/" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/linkedin.webp`} alt="linkedin icon" />
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://exercism.io/profiles/PA4KEV" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/exercism.webp`} alt="exercism icon" />
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://stackoverflow.com/users/6340687/pa4kev" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/stackoverflow.webp`} alt="stackoverflow icon" />
                        </a>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Home;