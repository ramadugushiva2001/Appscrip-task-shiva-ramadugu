import { Component } from "react"
import './index.css'

class MobileHeader extends Component{
    render(){
        return(
            <>
            <div className="grey-strip">
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723359141/element-4_fust6d.png" alt="grey scale" className="grey-scale-icon" />
                    <p>Lorem ipsum dolor</p></div>
            <nav className="movile-header-container">
                <div className="menu-icon-container">
                    <button className="nav-button">
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723360785/hamburger-menu_jzcpqu.png" alt="menu icon" className="logo" />
                    </button>
                    <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723267943/Logoappscrip_perlhl.png" alt="logo" className="logo" />
                </div>
                <h1 className="website-logo">shopEFFORTLESS</h1>
                <div>
                    <button  className="nav-button"> 
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723357087/search-icon_o1r51b.png" alt="search" />
                    </button>
                    <button  className="nav-button">
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723357281/liked_lkzbai.png" alt="like" />
                    </button>
                    <button  className="nav-button">
                        <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1723230395/shopping-bag_ttjrlv.png" alt="shopping bag" />
                    </button>
                </div>
            </nav>
            <div className="home-shop">
                <p>HOME</p>
                <p>SHOP</p>
            </div>
            </>
        )
    }
}

export default MobileHeader
