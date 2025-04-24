import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Component/Router/Routes'
import './App.css'
const App = () => {
  return (
    <div>
     <RouterProvider router={router} id="router"> </RouterProvider>
    </div>
  )
}

export default App

