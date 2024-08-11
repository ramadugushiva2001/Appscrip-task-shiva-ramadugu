import {Component} from 'react'

import Header from '../Header'
import Products from '../Products'
import Footer from '../Footer'
import MobileHeader from '../MobileHeader'
import './index.css'

class Home extends Component{ 
    render() {
        return (
          <div className='home-container'>
            <MobileHeader/>
            <Header />
              <h1 className='heading'>DISCOVER OUR PRODUCTS</h1>
              <p className='page-description'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus  <br />scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
              <Products />
              <Footer/>
          </div>
        )
    }
}


export default Home

