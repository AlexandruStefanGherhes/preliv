import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Scroll } from "./back-to-top"
// import { Menu } from "./menu"
export const Layout = () =>{
    const toggleMenu = () =>{
    const menu = document.querySelector('.category-list-big')
    menu.classList.toggle('show')
}
    return(
        <div className="root-layout">
            <Header
            showMenu={toggleMenu}
            />
            <Scroll/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}