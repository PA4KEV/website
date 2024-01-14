import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <section className="content-section">
                    <p>I am a programmer as profession.</p>
                    <p>I worked on:</p>
                    <ul>
                        <li><Link reloadDocument to="/pages/software/configuration-automation">configuration automation</Link></li>
                        <li><Link reloadDocument to="/pages/software/dxp-development">DXP development</Link></li>
                        <li><Link reloadDocument to="/pages/software#list-projects">Other software projects</Link></li>
                    </ul>

                    <p>My interests are:</p>
                    <ul>
                        <li><Link reloadDocument to="/pages/software">Software development</Link></li>
                        <li><Link reloadDocument to="/pages/japanese">Japanese language</Link></li>
                        <li><Link reloadDocument to="/pages/radio">Amateur radio</Link></li>
                        <li>Linux</li>
                        <li>Electronics</li>
                        <li>Woodworking</li>
                        <li>Yoga</li>
                        <li>synthesize music</li>
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