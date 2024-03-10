import { Footer } from "../components/footer"
export const Companie = () =>{
    return(
        <>
                <div className="companie-photo">
                    <img src="/assets/pexels.jpeg" alt="" />
                </div>
                <div className="companie">
                    <h1>Companie de <span>familie</span> din 2004</h1>
                    <p>Suntem o companie de familie înființată în 2004, specializată în mecanica generală și prelucrarea prin așchiere a diverselor tipuri de materiale precum oțelul, aluminiul, bronzul și cuprul. Dispunem de un atelier dotat cu o gamă variată de utilaje, concentrându-ne pe producția de serii mici și medii. Pe lângă asta, suntem capabili să realizăm și piese unice conform unor desene sau modele specificate.</p>
                    <div className="companie-iso">
                        <img src="/assets/iso1.jpeg" alt="certificat" />
                        <img src="/assets/iso2.jpeg" alt="certificat" />
                        <img src="/assets/iso3.jpeg" alt="certificat" />
                    </div>
                </div>

        <><Footer></Footer></>
        </>
    )
}