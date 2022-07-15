import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'
import { AppProvider } from './context'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
