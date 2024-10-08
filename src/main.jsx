import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode='light' />
    <App />
    </ChakraProvider>
 
  </StrictMode>,
)
