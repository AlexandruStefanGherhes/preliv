import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export const Catalogue = () =>{
    return(
        <div className="catalogue-list">
            <div className="catalogue-list-first">
                <h4>Executam o gamă variată de <span>produse</span></h4>
                <p><span><FontAwesomeIcon icon={faArrowRight} /></span>Roți dințate (paloide, conice, cilindrice, melcate, cu caneluri)</p>
                <p><span><FontAwesomeIcon icon={faArrowRight} /></span>Roți de lanț</p>
                <p><span><FontAwesomeIcon icon={faArrowRight} /></span>Cremaliere</p>
            </div>
            <div className="catalogue-list-second">
                <h4>Dispunem de o gamă variată de <span>utilaje</span></h4>
                <p><span><FontAwesomeIcon icon={faArrowRight} /></span>Masini de debitat</p>
                <p><span><FontAwesomeIcon icon={faArrowRight} /></span>Strunguri normale ∅900</p>
                <p><span><FontAwesomeIcon icon={faArrowRight} /></span>Strunguri CNC</p>
            </div>
        </div>
    )
}