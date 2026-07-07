import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { dict } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {year} noguztech.com</span>
        <span>{`</${dict.footer.built}>`}</span>
      </div>
    </footer>
  )
}
