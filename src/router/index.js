import Contact from "../pages/Contact"
import About from "../pages/About"
import Projects from "../pages/Projects"
import SingleProject from "../pages/SingleProject"
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
    path: "/projects/:projectIndex",
    element: <SingleProject/>
  },
  {
    path: "/",
    element: <Home/>
  }
]

export default routes