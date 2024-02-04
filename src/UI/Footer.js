import React from 'react';
import { useTheme } from '../ThemeContext';
import './Footer.css';


const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`bg-${theme} text-center text-lg-start text-${theme}`}>
            <p className="small">This site was made with:&nbsp;
                <a className={`link-${theme}`} href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>,&nbsp;
                <a className={`link-${theme}`} href="https://fsharp.org/" target="_blank" rel="noopener noreferrer">F#</a>,&nbsp;
                <a className={`link-${theme}`} href="https://github.com/giraffe-fsharp/Giraffe" target="_blank" rel="noopener noreferrer">Giraffe</a>,&nbsp;
                <a className={`link-${theme}`} href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>,&nbsp;
                <a className={`link-${theme}`} href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">Nginx</a>&nbsp;and&nbsp;
                <a className={`link-${theme}`} href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>&nbsp;on&nbsp;
                <a className={`link-${theme}`} href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">DigitalOcean</a>&nbsp;cloud droplets.</p>
            <p className="small">Content is parsed by: <a className={`link-${theme}`} href="https://github.com/quantizor/markdown-to-jsx" target="_blank" rel="noopener noreferrer">markdown-to-jsx</a></p>
        </footer>
    )
}

export default Footer;
