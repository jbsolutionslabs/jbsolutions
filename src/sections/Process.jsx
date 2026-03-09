import React from 'react'

const steps = [
  {title: 'Discover', desc: 'Understand your priorities, users, and outcomes.'},
  {title: 'Plan', desc: 'Define scope, timeline, and measurable goals.'},
  {title: 'Design', desc: 'Craft clear, conversion-focused interfaces.'},
  {title: 'Build', desc: 'Ship reliable, maintainable frontends and tools.'},
  {title: 'Refine', desc: 'Iterate based on feedback and real usage.'},
  {title: 'Launch', desc: 'Deploy with confidence and provide ongoing support.'}
]

export default function Process(){
  return (
    <section className="process container" id="process">
      <h2>Our process</h2>
      <p className="section-lead">A focused, collaborative approach that keeps projects on track.</p>
      <ol className="process-steps">
        {steps.map(s => (
          <li key={s.title} className="step">
            <strong>{s.title}</strong>
            <p>{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
