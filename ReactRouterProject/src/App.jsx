import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Movie } from "./pages/Movie"
import { AppLayout } from './Components/layout/AppLayout'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [

        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/movie",
          element: <Movie></Movie>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/home",
          element: <Home></Home>
        }
      ],
    }
  ])

  return (<>
    <h1>Hello React Router</h1>
    <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
