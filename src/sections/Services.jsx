import React from 'react'

const services = [
  {
    title: 'Custom Website Development',
    desc: 'Beautiful, responsive websites that reflect your brand and convert visitors into customers.'
  },
  {
    title: 'Website Redesigns',
    desc: 'Revitalize outdated sites with modern UX, improved performance, and clearer calls-to-action.'
  },
  {
    title: 'Business Software Solutions',
    desc: 'Custom tools tailored to how your business works — from client portals to order management.'
  },
  {
    title: 'Workflow Automation',
    desc: 'Automate repetitive tasks and integrate systems to save time and reduce errors.'
  },
  {
    title: 'Internal Tools & Dashboards',
    desc: 'Clear, usable dashboards and admin tools that help teams work faster and smarter.'
  },
  {
    title: 'Tailored Digital Experiences',
    desc: 'Unique interfaces and interactions crafted for your customers’ needs.'
  }
]

export default function Services(){
  return (
    <section className="services container" id="services">
      <h2>Services</h2>
      <p className="section-lead">Focused services that deliver practical impact for small businesses.</p>
      <div className="services-grid" role="list">
        {services.map(s => (
          <article key={s.title} className="service-card" role="listitem">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
