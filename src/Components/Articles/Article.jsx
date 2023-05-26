import React from 'react'
import "./Article.css"
import "react-bootstrap"
import Card from 'react-bootstrap/Card';
import card1 from "../../assets/images.jpg"
import card2 from "../../assets/Python-Symbol.png"
import card3 from "../../assets/images (1).jpg"
import card4 from "../../assets/images.png"
import card5 from "../../assets/descarga.png"
import card6 from "../../assets/dart-programming.png"
import Navbar from "../Navbar/Navbar"

function Article() {
    return (
        <>
            <div className="grid-container">
                <article className='articulo1'>
                    <section>
                        <h2>Articulos</h2>
                        <Card style={{ maxWidth: '18rem', minWidth: "150px" }}>
                            <Card.Img variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>Typescript</Card.Title>
                                <Card.Text>
                                    TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                    <section>
                        <Card style={{ maxWidth: '18rem', minWidth: "150px" }}>
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>Python</Card.Title>
                                <Card.Text>
                                    Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, ejemplos: Instagram, Netflix, Spotify, Panda3D, entre otros.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                    <section>
                        <Card style={{ maxWidth: '18rem', minWidth: "150px" }}>
                            <Card.Img variant="top" src={card3} />
                            <Card.Body>
                                <Card.Title>JavaScript</Card.Title>
                                <Card.Text>
                                    JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                </article>
                <article className='articulo2'>
                    <section>
                        <h2 id='Notices'>Noticias</h2>
                        <Card style={{ maxWidth: '18rem', minWidth: "150px" }}>
                            <Card.Img variant="top" src={card4} />
                            <Card.Body>
                                <Card.Title>Microsoft</Card.Title>
                                <Card.Text>
                                    Windows 11, la versión 22H2 es una actualización de características para Windows 11. Incluye todas las características y correcciones de las actualizaciones acumulativas anteriores a Windows 11, versión 21H2, la versión original Windows 11 versión.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                    <section>
                        <Card style={{ maxWidth: '18rem', minWidth: "150px" }}>
                            <Card.Img variant="top" src={card5} />
                            <Card.Body>
                                <Card.Title>Flutter</Card.Title>
                                <Card.Text>
                                    Flutter es un SDK de código fuente abierto de desarrollo de aplicaciones móviles creado por Google. Suele usarse para desarrollar interfaces de usuario para aplicaciones en Android, iOS y Web así como método primario para crear aplicaciones para Google Fuchsia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                    <section>
                        <Card style={{ maxWidth: '18rem', minWidth: "150px" }}>
                            <Card.Img variant="top" src={card6} />
                            <Card.Body>
                                <Card.Title>Dart</Card.Title>
                                <Card.Text>
                                    Dart es un lenguaje open source desarrollado en Google con el objetivo de permitir a los desarrolladores utilizar un lenguaje orientado a objetos y con análisis estático de tipo. Desde la primera versión estable en 2011, Dart ha cambiado bastante, tanto en el lenguaje en sí como en sus objetivos principales.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                </article>
            </div>
        </>
    )
}

export default Article
