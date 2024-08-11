import { Component } from "react"

import { FaRegUser } from 'react-icons/fa';

import './index.css'

class Header extends Component{
    render(){
        return(  
            <nav className="nav-container"> 
                <div className="logo-icons-container"> 
                <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723229030/Logoappscrip_ue1un0.png" alt="app logo" className="app-logo" />
                <h1 className="website-logo">shopEFFORTLESS</h1>
                <div className="icons-container">  
                <button  className="icon-button"> 
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723357087/search-icon_o1r51b.png" alt="search" className="search-icon" />
                </button> 
                <button  className="icon-button">
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723230395/shopping-bag_ttjrlv.png" alt="shopping bag" className="shopping-bag-icon" />
                </button>
                <button className="icon-button"><FaRegUser  size={25}/> </button>
                <select className="language-options">
                    <option>ENG</option>
                    <option>TEL</option> 
                    <option>HIN</option>
                </select> 
                </div>
                </div>
                <ul className="tabs-container">
                    <li className="tab-item">SHOP</li>
                    <li className="tab-item">SKILLS</li>
                    <li className="tab-item">STORIES</li>
                    <li className="tab-item">ABOUT</li>
                    <li className="tab-item">CONTACT US</li>
                </ul>
            </nav>
        )
    }
}

export default Header

