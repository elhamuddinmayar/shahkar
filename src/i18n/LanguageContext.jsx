import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from '../locales/en.json'
import fa from '../locales/fa.json'
import ps from '../locales/ps.json'

const dictionaries = { en, fa, ps }
const languageMeta = {
  en: { name: 'English', nativeName: 'EN', dir: 'ltr' },
  fa: { name: 'دری', nativeName: 'دری', dir: 'rtl' },
  ps: { name: 'پښتو', nativeName: 'پښتو', dir: 'rtl' },
}

const LanguageContext = createContext(null)

function readSavedLanguage() {
  const saved = localStorage.getItem('shahkar-language')
  return dictionaries[saved] ? saved : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readSavedLanguage)
  const direction = languageMeta[language].dir

  useEffect(() => {
    localStorage.setItem('shahkar-language', language)
    document.documentElement.lang = language
    document.documentElement.dir = direction
  }, [language, direction])

  const value = useMemo(() => {
    const t = (key) => key.split('.').reduce((value, part) => value?.[part], dictionaries[language]) ?? key
    return { language, setLanguage, direction, t, languages: languageMeta }
  }, [language, direction])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
