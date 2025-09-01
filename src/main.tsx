import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'

// normalize + глобальні дрібні стилі
import 'modern-normalize'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
