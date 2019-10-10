import React, { Component } from 'react'
import Cart from './cart'
import Navbar from './navbar'


// import Footer from './footer'
// import CoffeeTypes from './CoffeeTypes'
import './layout.css'



export default class Layout extends Component {
    render() {
        return (
            <div>
                 <div className="backgroundcontainer">
            <Navbar />
            <Cart />
        
            {/* <CoffeeTypes /> */}

            {/* <Footer /> */}
       

                </div>
            </div>
        )
    }
}
