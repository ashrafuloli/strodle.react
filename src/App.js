import React from 'react'


// components
import Navbar from './Components/Navbar'
import SlideBar from './Components/SlideBar'
import Header from './Components/Header'
import Work from './Components/Work'
import Features from './Components/Features'
import Screenshots from './Components/Screenshots'
import Testimonial from './Components/Testimonial'
import Map from './Components/Map'
import Cta from './Components/Cta'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <SlideBar />
      <main id="home">
        <Header />
        <Work />
        <Features />
        <Screenshots />
        <Testimonial />
        <Map />
        <Cta />
        <Footer />
      </main>
    </>
  )
}

export default App
