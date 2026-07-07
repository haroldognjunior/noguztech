import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { dict } = useLanguage()
  const t = dict.contact

  return (
    <section>
      <div className="wrap">
        <div className="tag">
          <b>~/</b>
          <span>{t.eyebrow}</span>
        </div>
        <h1>{t.h1}</h1>
        <p className="lede">{t.lede}</p>

        <div className="contact-block">
          <a className="contact-line" href="mailto:contact@noguztech.com">
            <span className="k">{t.emailLabel}</span>
            <span className="v">contact@noguztech.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
