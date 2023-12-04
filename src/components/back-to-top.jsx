import { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const Scroll = () =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 700){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        })
    },[])

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <>
        {isVisible && (<button 
        className="scrollToTop" 
        onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>)}
        </>
    )
}