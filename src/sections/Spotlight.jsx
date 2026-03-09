import React from 'react'

export default function Spotlight(){
  return (
    <section className="spotlight container">
      <div className="spotlight-inner">
        <div className="spot-text">
          <h2>Website development — a core focus</h2>
          <p className="section-lead">We build modern, responsive websites that clearly represent your brand and drive measurable results — from lead capture to bookings and sales.</p>
          <ul>
            <li>Responsive, accessible frontends</li>
            <li>Fast, SEO-friendly builds</li>
            <li>Tailored content and conversion flows</li>
          </ul>
        </div>
        <div className="spot-visual" aria-hidden>
          <div className="mock-browser">
            <div className="mock-header" />
            <div className="mock-body">
              <div className="mock-card" />
              <div className="mock-card small" />
              <div className="mock-card small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
