import React from 'react'
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/WhatsApp Image 2023-05-25 at 6.45.31 PM.jpeg"
import "react-bootstrap"

function Navbar() {

    return (
        <nav className="navbar bg-body-tertiary background nav">
            <div className="container-fluid">
                <a className="navbar-brand" id='color' href="#Suscribe">
                    <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top border" />
                    ADP
                </a>
                <a href="#Notices" className='Link'>noticias</a>
                <a href="#Suscribe" className='Link'>únete</a>
                <a href="#Footer" className='Link'>más</a>
            </div>
        </nav>
    )
};

export default Navbar