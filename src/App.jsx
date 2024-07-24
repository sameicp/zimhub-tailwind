import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
