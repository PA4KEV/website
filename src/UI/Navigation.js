import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from '../Pages/Home';
import Linux from '../Pages/Linux/Linux';
import Radio from '../Pages/Radio/Radio';
import Software from '../Pages/Software/Software';
import DXPDevelopment from '../Pages/Software/Projects/DXPDevelopment';

import './Navigation.css';


const Navigation = (props) => {
    return (
        <Router>
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Kevin Matsubara<br/><span className='logo-sub'>Software Developer</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#!">Link</a>
                    </li> */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Portal
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to="/pages/software" className="dropdown-item">Software</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link to="/pages/radio" className="dropdown-item">Radio Amateur</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link to="/pages/linux" className="dropdown-item">Linux</Link></li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <a href="#!" className="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/pages/software' element={<Software />}></Route>
            <Route exact path='/pages/software/dxp-development' element={<DXPDevelopment />}></Route>
            <Route exact path='/pages/radio' element={<Radio />}></Route>
            <Route exact path='/pages/linux' element={<Linux />}></Route>
        </Routes>
        </Router>
    )
}

export default Navigation;