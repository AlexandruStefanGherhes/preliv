import './app.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import { Home } from "./components/home"
// import { Companie } from "./components/companie"
import { Layout } from "./components/layout"
import { Contact } from "./components/contact"
import { Utilaje } from "./components/utilaje"
import { Servicii } from "./components/servicii"
import { Cookies } from "./components/cookies"
import { Confidentialiate } from "./components/confidentialitate"
import { Companie } from "./components/companie"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
      <Route  path="servicii" element={<Servicii/>} />
      <Route  path="companie" element={<Companie/>} />
      <Route  path="utilaje" element={<Utilaje/>} />
      <Route  path="contact" element={<Contact/>} />
      <Route  path="cookies" element={<Cookies/>} />
      <Route  path="confidentialiate" element={<Confidentialiate/>} />
    </Route>
  )
)

function App() {
  window.addEventListener("scroll",()=>{
    const header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY > 0)
  })

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
