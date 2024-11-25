import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { mySystem } from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={mySystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
)
