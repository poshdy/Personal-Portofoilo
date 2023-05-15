import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions:{queries:{
    refetchOnWindowFocus:false
  }}
})

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>

   <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
