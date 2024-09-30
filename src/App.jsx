import React from 'react'
import { Navbar } from './component/navbar'
import HeroSection from './component/HeroSection'
import BlogSection from './component/BlogSection'
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <BlogSection/>
     <Footer/>
    </div>
  )
}

export default App