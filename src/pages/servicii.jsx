import { Footer } from "../components/footer"

export const Servicii = () => {
    return(
        <>
        <div className="servicii">
            <div className="servicii-main">
                <h1>Dispunem de o gama <span>larga</span> de servicii</h1>
                <h4> Soluții variate pentru nevoile tale, de la consultanță specializată la servicii personalizate, menite să răspundă cerințelor tale unice.</h4>
            </div>
            <div className="servicii-grid">
                <div>Debitare materiale</div>
                <div>Strunjire clasică si CNC</div>
                <div>Frezare</div>
                <div>Mortezare</div>
                <div>Frezare dantură cilindrică</div>
                <div>Frezare dantură conică cu dinți drepți si inclinati</div>
                <div>Frezare dantură paloidă modul 1/4</div>
                <div>Mortezare dantură</div>
                <div>Rectificare plană</div>
                <div>Rectificare dantură</div>
                <div>Rectificare interioară si exterioara</div>
                <div>Găurire, alezare și frezare CNC</div>
                <div>Frezare caneluri</div>
                <div>Lăcătușerie</div>
                <div>Reparații diverse</div>
            </div>
        </div>
        <Footer/>
        </>
    )
}