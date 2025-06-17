import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Home , About, Contact, Movie} from "./pages"

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>
  },
  {
    path:"/about",
    element: <About></About>
  },
  {
    path:"/movie",
    element: <Movie></Movie>
  },
  {
    path:"/contact",
    element: <Contact></Contact>
  }
])

  return (<>
  <h1>Hello React Router</h1>
  <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
