import React from 'react'
import './App.css'
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Article from "./Components/Articles/Article"
import Suscribe from './Components/Suscribe/Suscribe'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
     <Header />
     <Navbar />
     <Article />
     <Suscribe />
      <Footer />
    </>
  )
}

export default App
