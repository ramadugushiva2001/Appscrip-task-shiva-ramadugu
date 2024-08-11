import { Component } from "react"
import { ClipLoader } from 'react-spinners';

import ProductItem from '../ProductItem'
import FiltersGroup from '../FiltersGroup'

import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Products extends Component{
    state={productsList:[] ,isLoading:true,showFilters:true,apiStatus: apiStatusConstants.initial,}
    
    componentDidMount(){
        this.getData() 
       }

    getData = async ()=>{ 
        this.setState({apiStatus:apiStatusConstants.inProgress}) 
        const url="https://fakestoreapi.com/products"
        const response= await fetch(url);
        const data=await response.json() 
        if (response.ok){ 
            this.setState({productsList:data,isLoading:false,apiStatus:apiStatusConstants.success})
        } else{
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
          }
    }

    onClickRetryButton=()=>this.getData()
    

    failureView=()=>(
        <div className="failure-view-container"> 
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" alt="failure view" className="failure-view"/>
            <button type="button" className="retry-button" onClick={this.onClickRetryButton}>Retry</button>
        </div>
    )

    renderLoadingView=()=>(
        <div className="loader-container">
            <ClipLoader color="#3498db" size={80} />
        </div>

    )

    renderProductsList=()=>{
        const {productsList}=this.state
        return(
            <ul className="products-list-container">
                {productsList.map(each=> <ProductItem key={each.id} product={each} />)}
            </ul>
        )
    }

    onClickShowFilterButton=()=>{
        this.setState(prevState=>({showFilters:!prevState.showFilters}))
    }

    renderAllProducts=()=>{
        const {apiStatus}=this.state 

        switch (apiStatus){
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.success:
                return this.renderProductsList()
            case apiStatusConstants.failure:
                return this.failureView()
            default :
                return null
        }
    }

    render(){
        const {isLoading,showFilters}=this.state
        console.log(isLoading)
        return(
            <>
            <div className="show-hide-filtering">
                <button className="show-filters-button" onClick={this.onClickShowFilterButton}>Show Filters</button> 
                <select > 
                    <option>RECOMMENDED</option>
                    <option>NEWEST FIRST</option>
                    <option>POPULAR</option>
                    <option>PRICE : HIGH TO LOW</option>
                    <option>PRICE : LOW TO HIGH</option>
                </select>
            </div>
            <div className="filters-and-products-container">
                {showFilters && 
                <div className="filters">
                    <FiltersGroup/> 
                </div>} 
                {this.renderAllProducts()}
            </div> 
            </>
        )
    }
}

export default Products
