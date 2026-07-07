import { Link } from 'react-router-dom'

const services = [
  {
    tag: 'build',
    title: 'Desarrollo full stack',
    desc: 'Aplicaciones web de punta a punta con React, Angular, Node.js y TypeScript. Desde el primer commit hasta producción.',
  },
  {
    tag: 'lead',
    title: 'Liderazgo técnico',
    desc: 'Arquitectura, revisión de código y decisiones de stack para equipos que necesitan escalar sin acumular deuda técnica.',
  },
  {
    tag: 'tune',
    title: 'Optimización de performance',
    desc: 'Diagnóstico y mejora de queries, tiempos de respuesta y cuellos de botella en sistemas ya en producción.',
  },
  {
    tag: 'teach',
    title: 'Mentoría técnica',
    desc: '4+ años formando desarrolladores en instituciones como Coder House, Desafío Latam y Digital House.',
  },
]

export default function Services() {
  return (
    <section>
      <div className="wrap">
        <div className="tag">
          <b>~/</b>
          <span>servicios</span>
        </div>
        <h1>En qué puedo ayudarte</h1>
        <p className="lede">Cuatro formas de trabajar juntos, según lo que tu proyecto necesite.</p>

        <div className="grid grid-2">
          {services.map((s) => (
            <div className="card" key={s.tag}>
              <span className="mono-index">#{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="btn-row">
          <Link to="/contacto" className="btn btn-primary">
            Empecemos una conversación →
          </Link>
        </div>
      </div>
    </section>
  )
}
