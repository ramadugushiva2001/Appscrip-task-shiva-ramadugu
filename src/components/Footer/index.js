import { Component } from "react"
import './index.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer-section">
                <div className="footer-top-section">
                    <div>
                        <h2>BE THE FIRST TO KNOW</h2>
                        <p>Sign up for updates from mettā muse.</p> 
                        <input className="signin-input" type="text" placeholder="Enter your E-mail..." />
                        <button className="subscribe-button">SUBSCRIBE</button>
                    </div>
                    <hr className="separater-line" />
                    <div>
                        <h2>CONTACT US</h2>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p> 
                    <hr className="separater-line" />
                        <h2>CURRENCY</h2>
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723340872/usd_qtfykh.png" className="usd-" alt="usd" />
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                <hr className="horizontal-line"/>
                <div className="footer-bottom-section">
                    <div>
                        <h2>mettā muse</h2> 
                        <p>About Us</p> 
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Botiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p> 
                    </div>
                    <hr className="separater-line" />
                    <div>
                        <h2>QUICK LINKS</h2>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>Faqs</p>
                        <p>Privacy Ploicy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <hr className="separater-line" />
                    <div> 
                        <h2>FOLLOW US</h2>
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723350383/linked_in_logo_nrub4n.png" alt="linked in" className="insta-linkedin-logos" />
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723350352/insta_logo_zalh8c.png" alt="instagram" className="insta-linkedin-logos" />
                        <h2>mettā muse Accepts</h2> 
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723350896/frame_yr2ta0.png" alt="frame" className="frame" />
                    </div>
                </div>
                <p className="copy-write">Copyright © 2023 mettamuse. All rights reserved.</p>
            </div> 
        )
    }
}

export default Footer
