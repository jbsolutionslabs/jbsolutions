import React from 'react'

function Visual(){
  return (
    <div className="hero-visual" aria-hidden>
      <div className="card card-1" />
      <div className="card card-2" />
      <div className="card card-3" />
      <svg className="hero-ornament" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#g)" opacity="0.08" />
      </svg>
    </div>
  )
}

export default function Hero(){
  return (
    <section className="hero container" id="hero">
      <div className="hero-left">
        <p className="eyebrow">Custom software & websites</p>
        <h1>We build tailored digital tools for small businesses</h1>
        <p className="lead">Modern websites, internal tools, and automations designed around your business — built to drive leads, save time, and scale operations.</p>
        <div className="hero-ctas">
          <a className="btn primary" href="mailto:jbsolutionslabs@gmail.com">Start a project</a>
          <a className="btn secondary" href="#services">See services</a>
        </div>
        <p className="minor">Not sure what you need? Email us — we’ll suggest practical options without jargon.</p>
      </div>
      <div className="hero-right">
        <Visual />
      </div>
    </section>
  )
}
