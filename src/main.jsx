import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './site.css'

// Fade out the loading screen from index.html only after the logo animation
// has fully played AND the page has loaded, however fast the connection is.
const HOLD_AFTER_ANIMATION = 450 // ms to show the finished logo before fading
const ANIMATION_CAP = 4000 // never wait longer than this for the animation (it takes ~1.8s)

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

function logoAnimationDone(loader) {
  const inner = loader.querySelector('.loader-inner')
  if (!inner?.getAnimations) return Promise.resolve()
  // Wait for the one-time intro animations; skip the looping ones (twinkle, float, bar).
  const intro = inner.getAnimations({ subtree: true }).filter(animation => animation.effect.getComputedTiming().iterations !== Infinity)
  return Promise.all(intro.map(animation => animation.finished.catch(() => {})))
}

function pageLoaded() {
  if (document.readyState === 'complete') return Promise.resolve()
  return new Promise(resolve => window.addEventListener('load', resolve, { once: true }))
}

const loader = document.getElementById('app-loader')
if (loader) {
  Promise.all([Promise.race([logoAnimationDone(loader), wait(ANIMATION_CAP)]), pageLoaded()]).then(() => {
    setTimeout(() => {
      loader.classList.add('app-loader--hide')
      setTimeout(() => loader.remove(), 600)
    }, HOLD_AFTER_ANIMATION)
  })
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider><BrowserRouter><App /></BrowserRouter></LanguageProvider>
  </React.StrictMode>,
)
