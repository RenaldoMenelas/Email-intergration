import './Hero.css'
import Images from './images.png'
//import cover from './PassOver_cover.jpg'

import React from 'react'

const Hero = () => {
    return (
        <>
        <div className="hero-container">
            <h2>Too Good to pass up</h2>
            <p className="hero-para">Take another look at the items left in<br/>your cart<span className="hero-span"> before they sell out</span></p>
            <button>See my Cart</button>
           

            </div>

            <div className="border"></div>
            
                <ul className="nav2">
                    <li>home</li>
                    <li>kitchen & Bar</li>
                    <li>jewelry</li>
                    <li>women</li>
                    <li>men</li>
                    <li>this just in</li>
                    <li>sale</li>
                </ul>
            
            <img alt="" src={ Images}/>
            </>
        
    )
}

export default Hero
