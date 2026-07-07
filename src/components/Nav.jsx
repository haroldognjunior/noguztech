import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <NavLink to="/" className="brand">
          <img src="/logo.png" alt="NoguzTech" />
          <span>
            NOGUZ<span className="dim">TECH</span>
          </span>
        </NavLink>
        <nav className="navlinks">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            inicio
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')}>
            servicios
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
            contacto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
