import { Header } from '../components/header'
// import { Menu } from './menu'
import { Hero } from '../components/hero'
import { Companie } from './companie'
import { Catalogue } from '../components/catalogue'
import { Metale } from '../components/metale'
import { Popular } from '../components/popular'
import { Footer } from '../components/footer'
import { Scroll } from '../components/back-to-top'

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