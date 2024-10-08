import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

import AppLayout from './components/AppLayout'
import Error from './components/Error'
import MovieList from './components/MovieList'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'

function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <MovieList/>
        },
        {
          path: "/details",
          element: <Upcoming/>
        },
        {
          path: "/types",
          element: <TopRated/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
