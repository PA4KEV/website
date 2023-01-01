import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const Home = () => {
    return (        
        <div className='row'>
            <div className="col-6 offset-3">
                <section className="content-section">  
                <h1>Kevin van der Vleuten</h1>
                <p>Welcome to my simple website.</p>

                <p>I am a software developer and enjoy creating solutions.                    
                </p>

                <p>Check out my <Link to="/pages/software">Software</Link> journey.<br/> I also enjoy working with <Link to="/pages/linux">Linux</Link>.</p>

                <p>
                    <a href="https://github.com/PA4KEV" target="_blank" rel="noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/icons/github.png`} alt="github icon"/>
                    </a>                    
                </p>
                
                <hr/>

                <p>Aside from software tinkering, check out my other interests here:</p>
                <ul>
                    <li><Link to="/pages/radio">Radio amateur</Link></li>
                </ul>

                <hr/>
                <p class="small">This site was made with: <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://www.nginx.com/" target="_blank">Nginx</a> and <a href="https://www.docker.com/" target="_blank">Docker</a><br/>on <a href="https://www.digitalocean.com/" target="_blank">DigitalOcean</a> cloud droplets.</p>

                </section>
            </div>
        </div>
        )
}

export default Home;