import React from 'react'
import Awards from './Awards'
import Education from './Education'
import Navbar from '../../UI/Navbar.jsx'
import Pricing from './Pricing'
import Stats from './Stats'
import Openaccount from "../../UI/OpenAccount.jsx"
import Footer from '../../UI/Footer.jsx'
import HeroSec from './HeroSec.jsx'

function HomePage() {
    return (
        <div>
            <HeroSec />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <Openaccount />
        </div>
    )
}

export default HomePage
