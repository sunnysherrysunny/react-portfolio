import Contact from "../pages/Contact"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Home from "../pages/Home"

const routes = [
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/",
    element: <Home/>
  }
]

export default routes