import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'noguztech-lang'
const SUPPORTED = ['es', 'en', 'pt']

function detectLanguage() {
  if (typeof window === 'undefined') return 'es'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED.includes(saved)) return saved

  // navigator.language is the simplest reliable signal for the visitor's
  // preferred language (browser/OS setting) without asking for permissions.
  const browserLangs = navigator.languages || [navigator.language || 'es']
  for (const raw of browserLangs) {
    const code = raw.toLowerCase().slice(0, 2)
    if (SUPPORTED.includes(code)) return code
  }
  return 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (code) => {
    if (!SUPPORTED.includes(code)) return
    window.localStorage.setItem(STORAGE_KEY, code)
    setLangState(code)
  }

  const value = useMemo(() => ({ lang, setLang, dict: translations[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
