import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { weather } from './components'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <weather/>
  </StrictMode>,
)
