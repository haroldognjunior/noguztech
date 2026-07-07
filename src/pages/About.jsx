import { useLanguage } from '../i18n/LanguageContext.jsx'

const stack = ['JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'NestJS', 'Redux', 'GraphQL', 'Docker', 'PostgreSQL', 'MongoDB', 'AWS']

const contactInfo = {
  dev: { email: 'junior@noguztech.com', links: [{ label: 'GitHub', href: 'https://github.com/haroldognjunior' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hgnjr/' }] },
  support: { email: 'felipe@noguztech.com', links: [] },
}

export default function About() {
  const { dict } = useLanguage()
  const t = dict.about

  return (
    <>
      <section>
        <div className="wrap">
          <div className="tag">
            <b>~/</b>
            <span>{t.eyebrow}</span>
          </div>
          <h1>{t.h1}</h1>
          <p className="lede">{t.lede}</p>

          <div className="grid grid-2">
            {t.team.map((m) => {
              const info = contactInfo[m.tag]
              return (
                <div className="card" key={m.tag}>
                  <span className="mono-index">#{m.tag}</span>
                  <h3>{m.name}</h3>
                  <p className="role-line">{m.role}</p>
                  <p>{m.bio}</p>
                  <div className="btn-row btn-row-tight">
                    <a className="btn btn-ghost" href={`mailto:${info.email}`}>
                      {info.email}
                    </a>
                    {info.links.map((l) => (
                      <a key={l.label} className="btn btn-ghost" href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="tag">
            <b>#</b>
            <span>{t.stackEyebrow}</span>
          </div>
          <h2>{t.stackH2}</h2>
          <ul className="tech-chips">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
