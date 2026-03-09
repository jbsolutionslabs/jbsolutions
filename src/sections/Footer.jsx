import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>JB Solutions</strong>
          <p className="muted">Custom software and websites for small businesses.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#capabilities">Capabilities</a>
        </div>
        <div className="footer-contact">
          <a href="mailto:jbsolutionslabs@gmail.com">jbsolutionslabs@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom container">
        <small>© JB Solutions</small>
      </div>
    </footer>
  )
}
