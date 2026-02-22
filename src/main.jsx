import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from "./Router"

const rootElement = document.getElementById('root')

// Prevent default image dragging across the app.
document.addEventListener('dragstart', (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault()
  }
})

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
