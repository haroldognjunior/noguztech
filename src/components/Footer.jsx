export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {year} noguztech.com</span>
        <span>{'<built with React />'}</span>
      </div>
    </footer>
  )
}
