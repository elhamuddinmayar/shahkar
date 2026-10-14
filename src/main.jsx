import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './site.css'

// Fade out the loading screen from index.html once the page has loaded,
// keeping it up long enough for the logo animation to finish.
function hideLoader() {
  const loader = document.getElementById('app-loader')
  if (!loader) return
  const minVisible = 1900
  setTimeout(() => {
    loader.classList.add('app-loader--hide')
    setTimeout(() => loader.remove(), 600)
  }, Math.max(0, minVisible - performance.now()))
}

if (document.readyState === 'complete') hideLoader()
else window.addEventListener('load', hideLoader, { once: true })

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider><BrowserRouter><App /></BrowserRouter></LanguageProvider>
  </React.StrictMode>,
)
