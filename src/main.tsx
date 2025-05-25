import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { GothamDrawer } from './shared/components/Gotham/Drawer.tsx'
import { AuthContextProvider } from './shared/context/auth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <GothamDrawer>
        <App />
      </GothamDrawer>
    </AuthContextProvider>
  </StrictMode>,
)
