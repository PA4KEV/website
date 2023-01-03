import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <section className="content-section">  
                    <h1 className="text-primary">Hallo, my name is Kevin.</h1>
                    <h3 className="text-secondary">Nice to meet you! :)</h3>
                    <p>I have done <Link reloadDocument to="/pages/software/configuration-automation">configuration automation</Link>, <Link reloadDocument to="/pages/software/dxp-development">DXP development</Link> and ...</p>
                    <p>When it comes to technology and engineering, I am always curious and eager to learn and adept myself. One of the things I enjoy the most is being able to teach others. Interns who enthousiastically become better programmers themselves through my knowledge is amazing! Check out my <Link reloadDocument to="/pages/software">Software</Link> journey.</p>
                    <p>My other interests are:</p>
                    <ul>
                        <li><Link reloadDocument to="/pages/radio">amateur radio</Link></li>
                        <li><Link reloadDocument to="/pages/linux">Linux</Link></li>
                        <li>electronics</li>
                        <li>learning Japanese</li>
                        <li>woodworking</li>
                        <li>synthesize music</li>
                        <li>yoga</li>
                    </ul>
                    <p>I am based in Helmond, the Netherlands.</p>
                    <p>
                        <a href="https://github.com/PA4KEV" target="_blank" rel="noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="github icon"/>
                        </a>
                    </p>
                    <hr/>
                    <p class="small">This site was made with: <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://www.nginx.com/" target="_blank">Nginx</a> and <a href="https://www.docker.com/" target="_blank">Docker</a><br/>on <a href="https://www.digitalocean.com/" target="_blank">DigitalOcean</a> cloud droplets.</p>
                </section>
            </div>
        </div>
        )
}

export default Home;