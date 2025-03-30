import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import OutlinedCard from './components/TaskCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App></App>
      <OutlinedCard></OutlinedCard>
  </StrictMode>,
)
