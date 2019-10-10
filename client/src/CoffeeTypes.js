import React from 'react';
import coffeecup from './macchiato.jpeg';
import './CoffeeTypes.css';



class CoffeeTypes extends React.Component {
   render () {
       return (
           <div className="coffeeDisplay">
           <div className="coffeeDisplayContainer">
           <div className="chooseCoffee">
                   <div className="headerAndImage">
                     <header>{this.props.data.type}


                     </header>
                       <div className="imageContainer">
                       <img src={coffeecup} alt="coffeeImage" /> </div>

                       </div>
                           <p className="coffeeDescription"> {this.props.data.description}</p>
                                   <div className ="coffeeOptionsBox">

                                      <div className = "sizeOfCup">
                                      <label>Size</label>
                                      <div className = "coffeeIcons">
                                      <div><i className="fas fa-coffee fa-1x"></i></div>
                                      <div><i className="fas fa-coffee fa-2x"></i></div>
                                      <div><i className="fas fa-coffee fa-3x"></i></div>
                                      </div>
                                      <div className = "sizeOfCupOptions"> {this.props.data.size} </div>
                                           </div>

                                      <div className = "caffeine">
                                           <label>Decaf?</label><div className ="caffeineOptions"></div>{this.props.data.caffeine}</div>


                                       <div className = "milkType">
                                           <label>Milk Type</label><div className="milkTypeOptions"></div> {this.props.data.milkType}</div>

                                   </div>
                                           <div className = "addToOrder">
                                               <label>Add to order</label>
                                               <div className = "cartIcon">
                                               <i class="fas fa-cart-plus"></i>
                                               </div>
                                           </div>

      </div>
 
            </div> 
        </div>     
       )
   }
}


export default CoffeeTypes
