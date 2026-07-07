import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getProjects } from '../data/projects.js'

export default function Projects() {
  const { lang, dict } = useLanguage()
  const t = dict.projects
  const projects = getProjects(lang)

  return (
    <section>
      <div className="wrap">
        <div className="tag">
          <b>~/</b>
          <span>{t.eyebrow}</span>
        </div>
        <h1>{t.h1}</h1>

        <div className="grid grid-3 project-grid">
          {projects.map((p) => (
            <div className="card project-card" key={p.key}>
              <div className="project-thumb">
                <img src={p.img} alt={p.title} loading="lazy" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="btn-row btn-row-tight">
                {p.demoLink && (
                  <a className="btn btn-ghost" href={p.demoLink} target="_blank" rel="noreferrer">
                    {t.demo}
                  </a>
                )}
                {p.ghLink && (
                  <a className="btn btn-ghost" href={p.ghLink} target="_blank" rel="noreferrer">
                    {t.code}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
