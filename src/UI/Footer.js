import React from 'react';
import { useTheme } from '../ThemeContext';
import './Footer.css';
import { getString } from '../App';


const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`bg-${theme} text-center text-lg-start text-${theme}`}>
            <div className="container-fluid">
                <span className="small">{getString('footer_madewith')}: <a className={`link-${theme}`} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, <a className={`link-${theme}`} href="https://fsharp.org/" target="_blank" rel="noopener noreferrer">F#</a>, <a className={`link-${theme}`} href="https://github.com/giraffe-fsharp/Giraffe" target="_blank" rel="noopener noreferrer">Giraffe</a>, <a className={`link-${theme}`} href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>, <a className={`link-${theme}`} href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">Nginx</a> {getString('and')} <a className={`link-${theme}`} href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> {getString('on')} <a className={`link-${theme}`} href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">DigitalOcean</a> cloud droplets.</span>
                <br />
                <span className="small">{getString('footer_contentparsed')}: <a className={`link-${theme}`} href="https://github.com/quantizor/markdown-to-jsx" target="_blank" rel="noopener noreferrer">markdown-to-jsx</a></span>
                <br /><br />
            </div>
        </footer>
    )
}

export default Footer;
