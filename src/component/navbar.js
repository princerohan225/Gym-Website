import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.HomeText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{props.ContactText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/packages">{props.PackagesText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/facilities">{props.FacilitiesText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.AboutText}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`form-check form-switch text-${props.mode !== 'dark' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" aria-checked='false' onClick={props.togglemode} />

                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.modetext}</label>
                    </div>
                </div>
            </nav>

        </>
    );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    HomeText: PropTypes.string,
    AboutText: PropTypes.string,
    ContactText: PropTypes.string,
    PackagesText: PropTypes.string,
    FacilitiesText: PropTypes.string,

}

Navbar.defaultProps = {
    title: 'The Gym',
    HomeText: 'Home',
    AboutText: 'About',
    ContactText: "Contact",
    FacilitiesText: 'Facilities',
    PackagesText: 'Packages',
}