import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <>
            <div className="footer-seperator"></div>
         
            <footer>
                <div className="ol-icons">
            <ol>
                <li>contact us</li>
                <li>about us</li>
                <li>request a catolog</li>
                <li>corporate gifts& bulk orders</li>
                        <li>blog</li>
                      
                    </ol>
                <div className='icon'>
                        <FontAwesomeIcon className='icons' icon={faFacebook} />
                <FontAwesomeIcon className='icons' icon={faTwitter} />
                <FontAwesomeIcon  className='icons'icon={faPinterest} />
                    <FontAwesomeIcon className='icons' icon={faInstagram} />
                    </div>
                </div>
                <div className="All-test-last-section">
                    <div className="desktop-Only">
               <p>Adjust vour emall subscriptions, frequency and settings:</p>
                    
                        <p className="bordered">Update Email Preferences</p>
                        </div>
                <p>  <div className="desktop-Only">Or</div> click to <u>Unsubrcibe</u></p>
                <p>You are receiving this emall because you asked us to send you emall newsletters nignlighting new fealures and products</p>
                <p>To ensure delivery to your inbox, please add: into@lists.uncommongoods.com to your address book of approved senders
Please emall us with comments at: feedback@uncommongoods.com</p>
                <p><span className="mobile-Only">©2014</span><div className="desktop-Only">©2013</div> UncommonGoodsiM L.L.C. 140 58th Street, Bullding B suite 5AB. Brooklyn, New York. 11226</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
