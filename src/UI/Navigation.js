import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { getString, getLanguage } from '../App';

import './Navigation.css';

function generatePath(language) {
    const currentPath = window.location.pathname;
    return `/${language}${currentPath.substring(currentPath.indexOf('/', 1))}`;
}

const Navigation = ({ language }) => {
    const { theme, updateTheme } = useTheme();

    const toggleTheme = () => {
        updateTheme((theme === 'light') ? 'dark' : 'light');
    }

    const currentLanguage = getLanguage();

    return (
        <nav className={`navbar navbar-expand-lg fixed-top text-${theme} navbar-${theme} bg-${theme}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Kevin&nbsp;Matsubara<br /><span className='logo-sub'>|&gt;&nbsp;&nbsp;Software&nbsp;Developer</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {getString(language, 'portal')}
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link reloadDocument to={currentLanguage + '/japan'} className="dropdown-item">{getString(language, 'japanese')}</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link reloadDocument to={currentLanguage + '/radio'} className="dropdown-item">{getString(language, 'radio_amateur')}</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link reloadDocument to={currentLanguage + '/software'} className="dropdown-item">{getString(language, 'software')}</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {getString(language, 'language')}
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link reloadDocument to={generatePath("en")} className="dropdown-item">English</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link reloadDocument to={generatePath("nl")} className="dropdown-item">Nederlands</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <button onClick={toggleTheme} type="button" className={`btn btn-${theme}`}>Toggle Theme</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;