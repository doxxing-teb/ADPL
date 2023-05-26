import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import "./Suscribe.css"
import Navbar from "../Navbar/Navbar"

function Suscribe() {

    function handleSendEmail(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const subject = fd.get('subject');
        const message = fd.get('message');
        const mailToLink = `mailto:crew2k22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        document.getElementById('emailA').setAttribute('href', mailToLink);
        document.getElementById('emailA').click();

        showNotification();
    }

    function showNotification() {
        const [show, setShow] = useState(true);

        const handleClose = () => setShow(false);

        return (
            <>
                {show && (
                    <Alert variant="success" onClose={handleClose} dismissible>
                        Mensaje enviado. ¡Gracias!
                    </Alert>
                )}
            </>
        );
    }

    return (
        <div className="content">
            <div className="Text_for_Suscribe">
                <p>
                    únase a <strong>ADP</strong> para formar un grupo de programadores que se ayudan entre si y realizan trabajos en equipo para crear colectivamente proyectos y juntar experiencia en equipo de programadores y desarrolladores incluyendo diseñadores gráficos y creadores de juegos.
                </p>
            </div>
            <div id='Suscribe'>
                <h3>Suscribase e Ingrese</h3>
                <form action="" id="form" onSubmit={handleSendEmail}>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Asunto</label>
                        <input type="text" className="form-control" id="subject" placeholder="Asunto" name="subject" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" rows="3" name="message" placeholder='Mensaje de unión'></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">únirse al equipo</button>
                    <a href="" id="emailA"></a>
                </form>
            </div>
        </div>
    )
}

export default Suscribe
