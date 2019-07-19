import React from 'react'
import ProductListing from '../features/ProductListing.js'
import data from '../data/Products.json'


export default function Home(props) {
    return (
        <div className="home">
            <nav className="mobnav"><p className="mobtitle">Mobile-shop</p></nav>

            <div className="links">
            <a><img style={{height: "40px", width: "40px"}} src={require("../links/git-white.png")}/></a>
            <a><img style={{height: "40px", width: "40px"}} src={require("../links/linkedin.ico")}/></a>
            </div>
            <ProductListing product={data.products}/>
        </div>
    )
}
