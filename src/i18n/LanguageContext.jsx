import { createContext, useContext, useEffect, useState } from 'react'
import { languages, translations } from './translations'

const STORAGE_KEY = 'shahkar-language'
const LanguageContext = createContext(null)

function initialLanguage() {
  // ?lang=ps or ?lang=fa lets a shared link open in that language
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (translations[fromUrl]) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (translations[saved]) return saved
  } catch {}
  const browser = (navigator.language || '').toLowerCase()
  if (browser.startsWith('ps')) return 'ps'
  if (browser.startsWith('fa') || browser.startsWith('prs')) return 'fa'
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage)
  const language = languages.find(item => item.code === lang)

  useEffect(() => {
    document.documentElement.lang = language.htmlLang
    document.documentElement.dir = language.dir
    try { localStorage.setItem(STORAGE_KEY, lang) } catch {}
  }, [lang, language])

  return <LanguageContext.Provider value={{ lang, setLang, dir: language.dir, t: translations[lang] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
