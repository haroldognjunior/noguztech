export default function Contact() {
  return (
    <section>
      <div className="wrap">
        <div className="tag">
          <b>~/</b>
          <span>contacto</span>
        </div>
        <h1>Escribime</h1>
        <p className="lede">
          Contame en qué estás trabajando. Respondo en 1-2 días hábiles.
        </p>

        <div className="contact-block">
          <a className="contact-line" href="mailto:contact@noguztech.com">
            <span className="k">email</span>
            <span className="v">contact@noguztech.com</span>
          </a>

          {/*
            Sumá tus redes cuando quieras, con el mismo formato:
            <a className="contact-line" href="https://linkedin.com/in/tu-usuario">
              <span className="k">linkedin</span>
              <span className="v">/in/tu-usuario</span>
            </a>
          */}
        </div>
      </div>
    </section>
  )
}
