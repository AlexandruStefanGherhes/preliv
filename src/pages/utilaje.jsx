import { Footer } from "../components/footer"
export const Utilaje = () =>{
    return(
        <>
            <div className="utilaje-container">
                <div className="utilaje-info">
                    <h1>Detinem o <span>selectie diversa</span> de utilaje</h1>
                    <p>Siguranța și eficiența în acțiune - cu gama noastră variată de utilaje, vă punem la dispoziție instrumentele perfecte pentru proiectele dvs. Indiferent de necesitățile specifice, avem soluții adaptate pentru a vă ajuta să faceți față oricărui tip de lucru.</p>

                </div>
                <div className="lista-utilaje">
                    <div>
                        <img src="/assets/icons/lathe.png" alt="lathe" />
                        <p>Strunguri normale ( ∅900)</p>
                    </div>
                    <div>
                        <img src="/assets/icons/cnc.png" alt="cnc" />
                        <p>Strunguri CNC</p>
                    </div>
                    <div>
                        <img src="/assets/icons/milling-machine.png" alt="milling" />
                        <p>Freze normale și CNC</p>
                    </div>
                    <div>
                        <img src="/assets/icons/milling.png" alt="milling2" />
                        <p>Mașini de danturat Klinngelnberg (FD 800; FD 500; FD 400; FD 250)</p>
                    </div>
                    <div>
                        <img src="/assets/icons/milling-machine-two.png" alt="lathe" />
                        <p>Mașini de mortezat (MD 250; MD 630;)</p>
                    </div>
                    <div>
                        <img src="/assets/icons/factory-machine.png" alt="machine" />
                        <p>Mașini de mortezat canale de pană</p>
                    </div>
                    <div>
                        <img src="/assets/icons/milling-two.png" alt="lathe" />
                        <p>Mașini de rectificat plan, interior, exterior (VOTAN 500)</p>
                    </div>
                    <div>
                        <img src="/assets/icons/drilling.png" alt="drilling" />
                        <p>Mașini de broșat</p>
                    </div>
                    <div>
                        <img src="/assets/icons/lathe.png" alt="lathe" />
                        <p>Mașini de raionat</p>
                    </div>
                    <div>
                        <img src="/assets/icons/bending.png" alt="bending" />
                        <p>FCF (Mașină de frezat caneluri)</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}