import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='row'>
            <div className="col-6 offset-3">
                <section className="content-section">  
                    <h1 className="text-primary">Hallo, my name is Kevin.</h1>
                    <h3 className="text-secondary">Nice to meet you! :)</h3>
                    <p>I am a programmer and enjoy building software. I have done <Link reloadDocument to="/pages/software/configuration-automation">configuration automation</Link>, <Link reloadDocument to="/pages/software/dxp-development">DXP development</Link>.</p>
                    <p>When it comes to technology and engineering, I am always curious and eager to learn and adept myself. One of the things I enjoy the most is being able to teach others. Interns who enthousiastically become better programmers themselves through my knowledge is amazing! Check out my <Link reloadDocument to="/pages/software">Software</Link> journey.</p>
                    <p>My other interests are:</p>
                    <ul>
                        <li><Link reloadDocument to="/pages/radio">amateur radio</Link></li>
                        <li>Linux</li>
                        <li>electronics</li>
                        <li>learning Japanese</li>
                        <li>woodworking</li>
                        <li>synthesize music</li>
                        <li>yoga</li>
                    </ul>
                    <p>I am based in Helmond, the Netherlands.</p>
                    <p>
                        <a href="https://github.com/PA4KEV" target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="github icon"/>
                        </a>
                    </p>
                    <hr/>
                    <p className="small">This site was made with: <a href="https://reactjs.org/" target="_blank"rel="noopener noreferrer">React</a>, <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>, <a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">Nginx</a> and <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a><br/>on <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">DigitalOcean</a> cloud droplets.</p>
                </section>
            </div>
        </div>
        )
}

export default Home;