import './main.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/index.jsx'
import Signup from './pages/Signup/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import PlayersContextProvider from './contexts/PlayersContext.jsx'
import UserContextProvider from './contexts/UserContext.jsx'
import RedirectDashboardRoute from './routes/RedirectRoutes/RedirectDashboardRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/login')
  },
  {
    path: '/login',
    element: (
      <RedirectDashboardRoute>
        <Login />
      </RedirectDashboardRoute>
    )
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '*',
    element: <NotFound />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <PlayersContextProvider>
      <RouterProvider router={router} />
    </PlayersContextProvider>
  </UserContextProvider>
)
