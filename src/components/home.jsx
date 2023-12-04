import { Header } from './header'
// import { Menu } from './menu'
import { Hero } from './hero'
import { Companie } from './companie'
import { Catalogue } from './catalogue'
import { Metale } from './metale'
import { Popular } from './popular'
import { Footer } from './footer'
import { Scroll } from './back-to-top'

export const Home = () =>{
    return(
    <>
        <Scroll/>
        <Hero/>
        <Catalogue/>
        <Metale/>
        <Popular/>
        <Footer/>
    </>
    )
}