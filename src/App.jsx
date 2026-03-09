import React from 'react'
import TopNav from './components/TopNav'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Why from './sections/Why'
import Process from './sections/Process'
import Capabilities from './sections/Capabilities'
import Spotlight from './sections/Spotlight'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App(){
  return (
    <div className="site-root">
      <TopNav />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Capabilities />
        <Spotlight />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
