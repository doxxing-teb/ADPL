import React from 'react'
import Association from "../../assets/zyro-image.png"
import "./Header.css"

function Header() {
  return (
    <header className='header'>
      <a href="#Suscribe"><img src={Association} alt="Icon Association" /></a>
      <p>Asociación De Programadores Latinoamericana</p>
    </header>
  )
};

export default Header
