import React from 'react'

export default function TopNav(){
  return (
    <header className="topnav" role="banner">
      <div className="container nav-inner">
        <div className="brand">
          <a href="#" aria-label="JB Solutions homepage">JB Solutions</a>
        </div>
        <nav className="nav-links" role="navigation" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#capabilities">Capabilities</a>
          <a className="cta" href="mailto:jbsolutionslabs@gmail.com">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}
