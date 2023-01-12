import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';

// Cheating, but it works until I know better.
let section = window.location.pathname.split('/')[2];
let chapter = window.location.pathname.split('/')[3];

const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top text-light navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Kevin Matsubara<br/><span className='logo-sub'>Software Developer</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Portal
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link reloadDocument to="/pages/software" className="dropdown-item">Software</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link reloadDocument to="/pages/radio" className="dropdown-item">Radio Amateur</Link></li>
                        {/* <li><hr className="dropdown-divider"/></li>
                        <li><Link reloadDocument to="/pages/linux" className="dropdown-item">Linux</Link></li> */}
                    </ul>
                    </li>
                    {section === 'software' &&
                    <li className="nav-item">
                        <Link reloadDocument to="/pages/software#list-projects" className="nav-link">Projects</Link>
                    </li>
                    }
                    {section === 'radio' &&
                    <li className="nav-item">
                        <Link reloadDocument to="/pages/radio/components" className={`nav-link ${chapter === "components" ? "active" : ""}`}>Components</Link>
                    </li>
                    }
                    {section === 'radio' &&
                    <li className="nav-item">
                        <Link reloadDocument to="/pages/radio/balcony" className={`nav-link ${chapter === "balcony" ? "active" : ""}`}>Balcony</Link>
                    </li>
                    }
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navigation;