import React from 'react';

import './Footer.css';


const Footer = (props) => {
    return (
        <footer className="bg-primary text-center text-lg-start text-light">            
            <p className="small">This site was made with: <a className="link-light" href="https://reactjs.org/" target="_blank"rel="noopener noreferrer">React</a>, <a className="link-light" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>, <a className="link-light" href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">Nginx</a> and <a className="link-light" href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> on <a className="link-light" href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">DigitalOcean</a> cloud droplets.</p>            
        </footer>
    )
}

export default Footer;
