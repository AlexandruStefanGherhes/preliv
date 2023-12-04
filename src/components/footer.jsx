import { NavLink } from "react-router-dom"

export const Footer = () =>{
    const date = new Date()
    const newDate = date.getFullYear()

    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-info">
                <h1>Contact</h1>
                    <div className="email">
                        <h2>Email:</h2>
                    <h2 >contact@preliv.ro</h2>

                    </div>
                    <div className="contact">
                    <h2>telefon:</h2>
                    <h2>0743088966</h2>
                    </div>
                    <div className="address">
                    <h2>Adresă:</h2>
                    <h2>Cugir, Jud. Alba, Str. Victoriei Nr. 10</h2>
                    </div>
                </div>
                <div className="footer-legal">
                    <h2>Legal:</h2>
                    <NavLink to="Confidentialiate"><a href="#">Politica de confidențialitate</a></NavLink>
                    <NavLink to="Cookies"> <a href="#">Cookies</a></NavLink>
                </div>
                <div className="footer-location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d656.6214727012007!2d23.361201857366538!3d45.84832058570354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1701131587837!5m2!1sen!2sro" width="400" height="200" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <p className="copyright">Copyright © {newDate} S.C. PRELIV S.R.L.</p>
        </div>
    )
}