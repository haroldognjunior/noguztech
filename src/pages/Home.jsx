import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Home() {
  const { dict } = useLanguage()
  const t = dict.home

  return (
    <>
      <section className="hero">
        <span className="hero-bracket" aria-hidden="true">
          {'<NG/>'}
        </span>
        <div className="wrap hero-inner">
          <div className="tag">
            <b>~/</b>
            <span>{t.eyebrow}</span>
          </div>
          <h1>
            {t.h1a} <span className="hero-name">{t.h1b}</span>
            {t.h1end}
          </h1>
          <p className="lede">{t.lede}</p>
          <div className="btn-row">
            <Link to="/servicios" className="btn btn-primary">
              {t.ctaServices}
            </Link>
            <Link to="/contacto" className="btn btn-ghost">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="tag">
            <b>#</b>
            <span>{t.statsEyebrow}</span>
          </div>
          <h2>{t.statsH2}</h2>
          <div className="grid grid-3">
            <div className="card">
              <span className="mono-index">01</span>
              <h3>{t.stat1Title}</h3>
              <p>{t.stat1Desc}</p>
            </div>
            <div className="card">
              <span className="mono-index">02</span>
              <h3>{t.stat2Title}</h3>
              <p>{t.stat2Desc}</p>
            </div>
            <div className="card">
              <span className="mono-index">03</span>
              <h3>{t.stat3Title}</h3>
              <p>{t.stat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap about-teaser">
          <div>
            <div className="tag">
              <b>~/</b>
              <span>{t.teaserEyebrow}</span>
            </div>
            <h2>{t.teaserH2}</h2>
            <p>{t.teaserP}</p>
            <div className="btn-row">
              <Link to="/nosotros" className="btn btn-ghost">
                {t.teaserCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
