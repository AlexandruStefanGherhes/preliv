import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

export const Header = ({showMenu}) =>{

    return(
        <div className="header">
            <NavLink to="/" className="logo navlink">Preliv</NavLink>
            <div className="header-container">
                <ul className="category-list-big">
                    <NavLink className="navlink" to="Servicii"> <a href="#" className="navlink" onClick={showMenu}>Servicii</a> <span><FontAwesomeIcon icon={faArrowRight} /></span></NavLink>
                    {/* <NavLink className="navlink" to="Produse"> <a href="#" className="navlink" onClick={showMenu}>Produse</a> <span><FontAwesomeIcon icon={faArrowRight} /></span></NavLink> */}
                    <NavLink className="navlink" to="Utilaje"> <a href="#" className="navlink" onClick={showMenu}>Utilaje</a> <span><FontAwesomeIcon icon={faArrowRight} /></span></NavLink>
                    <NavLink className="navlink" to="Contact"> <a href="#" className="navlink" onClick={showMenu}>Contact</a> <span><FontAwesomeIcon icon={faArrowRight} /></span></NavLink>
                    <NavLink className="navlink" to="Companie"> <a href="#" className="navlink" onClick={showMenu}>Companie</a> <span><FontAwesomeIcon icon={faArrowRight} /></span></NavLink>
                </ul>
            </div>
            <button className="menu" onClick={showMenu}><FontAwesomeIcon icon={faBars} /></button>
            {/* <button className="menu-about" ><FontAwesomeIcon icon={faBars} /></button> */}
        </div>
    )
}

