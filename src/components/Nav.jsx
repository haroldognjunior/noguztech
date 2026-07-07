import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { languages } from '../i18n/translations.js'

export default function Nav() {
  const { lang, setLang, dict } = useLanguage()

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
            {dict.nav.home}
          </NavLink>
          <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')}>
            {dict.nav.services}
          </NavLink>
          <NavLink to="/proyectos" className={({ isActive }) => (isActive ? 'active' : '')}>
            {dict.nav.projects}
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
            {dict.nav.about}
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
            {dict.nav.contact}
          </NavLink>
        </nav>

        <div className="lang-switch" role="group" aria-label="Language">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              className={l.code === lang ? 'active' : ''}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
