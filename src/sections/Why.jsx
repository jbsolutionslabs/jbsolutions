import React from 'react'

const points = [
  'Custom-built solutions — we adapt to your business, not the other way around.',
  'Clear, conversion-focused design that communicates your value simply.',
  'Practical software that improves operations and saves time.',
  'Transparent process and regular communication throughout the project.'
]

export default function Why(){
  return (
    <section className="why container" id="why">
      <h2>Why JB Solutions</h2>
      <p className="section-lead">We partner with small businesses to deliver digital tools that actually help — no unnecessary complexity, only measurable value.</p>
      <ul className="why-list">
        {points.map(p => <li key={p}>{p}</li>)}
      </ul>
    </section>
  )
}
