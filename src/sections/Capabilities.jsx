import React from 'react'

const caps = [
  {title: 'Service business websites', desc: 'Clear pages that convert visitors into bookings and leads.'},
  {title: 'Lead generation sites', desc: 'Focused flows and CTAs to grow your pipeline.'},
  {title: 'Scheduling & contact workflows', desc: 'Simple, reliable systems for bookings and follow-up.'},
  {title: 'Client portals', desc: 'Secure areas for client communication, files, and billing.'},
  {title: 'Internal ops dashboards', desc: 'Real-time views of business performance and tasks.'},
  {title: 'Custom automations', desc: 'Reduce manual work by connecting tools and automating routine tasks.'}
]

export default function Capabilities(){
  return (
    <section className="capabilities container" id="capabilities">
      <h2>Featured solutions</h2>
      <p className="section-lead">Types of solutions we design and build.</p>
      <div className="cap-grid">
        {caps.map(c => (
          <article className="cap-card" key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
