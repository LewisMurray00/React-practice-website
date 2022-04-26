import React from 'react';
import '../../App.css'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../Hero/HeroSection'
import AboutHome from '../About(Home)/AboutHome'

function Home(){
    return (
        <>
            <HeroSection />
            <AboutHome />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;