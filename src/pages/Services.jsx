import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Services() {
  const { dict } = useLanguage()
  const t = dict.services

  return (
    <section>
      <div className="wrap">
        <div className="tag">
          <b>~/</b>
          <span>{t.eyebrow}</span>
        </div>
        <h1>{t.h1}</h1>
        <p className="lede">{t.lede}</p>

        <div className="grid grid-2">
          {t.items.map((s) => (
            <div className="card" key={s.tag}>
              <span className="mono-index">#{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="btn-row">
          <Link to="/contacto" className="btn btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
