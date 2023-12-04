
import { Footer } from "./footer"
import { useState } from "react"
export const Contact = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [telefon,setTelefon] = useState('')
    const [mesaj,setMesaj] = useState('')

    const handleChange = (e,setState) =>{
        setState(e.target.value)
    }

    const sendForm = (e) =>{
        e.preventDefault()
        setName('')
        setEmail('')
        setTelefon('')
        setMesaj('')
        console.log('form sent')
    }

    return(
        <>
            <div className="contact-container">

                <div className="contact-page">
                    <div className="contact-details">
                        <p>Contacteaza-ne</p>
                        <h2>Pentru orice fel de <span>informatii</span> sau <span>intrebari</span> va stam la dispozitie</h2>
                        <div className="contact-info">
                            <div className="contact-address">
                                <p>Adresa noastra</p>
                                <p>CUGIR, JUD. ALBA, STR. VICTORIEI NR. 10</p>
                            </div>
                            <div className="contact-email">
                                <p>email</p>
                                <p>CONTACT@PRELIV.RO</p>
                            </div>
                            <div className="contact-phone">
                                <p>telefon</p>
                                <p>Mobil: 0743088966</p>
                            </div>
                            <div className="contact-social">
                                <p>social</p>
                                <div className="contact-social-icons">
                                    <p>fb</p>
                                    <p>tw</p>
                                    <p>inst</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={sendForm}>
                            <input type="text" placeholder="Nume" id="nume" value={name} onChange={(e)=>handleChange(e,setName)}/>
                            <input type="text" placeholder="E-mail" id="email" value={email} onChange={(e)=>handleChange(e,setEmail)}/>
                            <input type="text" placeholder="Telefon" id="telefon" value={telefon} onChange={(e)=>handleChange(e,setTelefon)}/>
                            <textarea name="mesaj" placeholder="Mesaj" id="mesaj" cols="20" rows="10" value={mesaj} onChange={(e)=>handleChange(e,setMesaj)}></textarea>
                            <button type="submit" onSubmit={sendForm}>Trimite</button>
                    </form>
                </div>
            </div>
            <><Footer></Footer></>
        </>
    )
}