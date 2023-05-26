import React from 'react'
import Container from 'react-bootstrap/Container';
import "./Footer.css"

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-3 text-center">
        <p>&copy; 2023 ADP Latinoamericana.</p>
      </Container>
    </footer>
  )
}

export default Footer
