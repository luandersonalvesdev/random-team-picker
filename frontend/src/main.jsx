import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/index.jsx'
import Signup from './pages/Signup/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/login')
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
