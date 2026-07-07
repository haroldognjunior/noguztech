import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-bracket" aria-hidden="true">
          {'<NG/>'}
        </span>
        <div className="wrap hero-inner">
          <div className="tag">
            <b>~/</b>
            <span>home</span>
          </div>
          <h1>
            Construyo software que <span className="hero-name">funciona bajo presión</span>.
          </h1>
          <p className="lede">
            Soy Júnior Nogueira, desarrollador full stack y líder técnico. Trabajo el stack
            completo — React, Angular, Node.js, TypeScript — y las decisiones de arquitectura que
            hacen que un sistema aguante producción real.
          </p>
          <div className="btn-row">
            <Link to="/servicios" className="btn btn-primary">
              Ver servicios →
            </Link>
            <Link to="/contacto" className="btn btn-ghost">
              Hablemos
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="tag">
            <b>#</b>
            <span>en números</span>
          </div>
          <h2>Resultados, no promesas</h2>
          <div className="grid grid-3">
            <div className="card">
              <span className="mono-index">01</span>
              <h3>60x más rápido</h3>
              <p>Optimización de queries de backend en un sistema con alto volumen de tráfico.</p>
            </div>
            <div className="card">
              <span className="mono-index">02</span>
              <h3>-85% latencia SQL</h3>
              <p>Reducción del tiempo de respuesta en consultas críticas de negocio.</p>
            </div>
            <div className="card">
              <span className="mono-index">03</span>
              <h3>6+ años, 5 industrias</h3>
              <p>Seguros, fintech, salud, e-commerce y energía renovable.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
