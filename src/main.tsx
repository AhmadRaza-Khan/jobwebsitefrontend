import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <div>
    <AppProvider>
      <main>
        <App />
      </main>
      </AppProvider>
    </div>
)
