import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className="container">
            <div className="itemSellOut-View-in-Broswer">
                <div>your items are selling out</div>
                <a href="google.com"><div>View in browser</div></a>
            </div>

            <h1>Uncommon<span className="Header-span">Goods</span></h1>
            
                <ul className="nav1">
                    <li>home</li>
                    <li>kitchen & Bar</li>
                    <li>jewelry</li>
                    <li>women</li>
                    <li>men</li>
                    <li>this just in</li>
                    <li>sale</li>
                </ul>
            

            
        </div>
    )
}

export default Header
