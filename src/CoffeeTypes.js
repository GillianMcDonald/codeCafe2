import React from 'react';
import coffeecup from './macchiato.jpeg';
import './CoffeeTypes.css';



class CoffeeTypes extends React.Component {
    render () {
        return (
        <div className="chooseCoffee">
            <div className="headerAndImage">
                <header>{this.props.data.type}
                      </header>
                        <div className="imageContainer">
                            <img src={coffeecup} alt="coffeeImage" /></div>
                        </div>
                            <p className="coffeeDescription"> {this.props.data.description}</p>
                                <div className ="coffeeOptionsBox">
                                       <div className = "sizeOfCupBox">
                                            <label>Size</label>
                                                <div className = "coffeeIcons">
 
                                                    <div smallCoffee>
                                                        <div><i className="fas fa-coffee fa-1x"></i></div>
                                                            <p><input name="sizeButton" type="radio" checked />
                                                                <span>Small</span>
                                                            </p>
                                                    </div>
 
                                                    <div className = "mediumCoffee">
                                                        <div><i className="fas fa-coffee fa-2x"></i></div>
                                                            <div>
                                                                <p>
                                                                    <input name="sizeButton" type="radio" checked />
                                                                        <span>Medium</span>
                                                                </p>
                                                            </div>
                                                    </div>
                                                    <div className="largeCoffee">
                                                        <div><i className="fas fa-coffee fa-3x"></i></div>
                                                    <div>
                                                            <p>
                                                                <input name="sizeButton" type="radio" checked />
                                                                    <span>Large</span>
                                                            </p>
                                                    </div>
                                                    </div>
                                        </div>
                                        </div>
 
                                        <div className = "caffeineBox">
                                            <label>Decaf</label>
                                                <div className = "coffeeIcons">
                                                    <div smallCoffee>
                                                        <div><i className="fas fa-bed fa-2x"></i></div>
                                                            <p><input name="decafButton" type="radio" checked />
                                                                <span>Yes</span>
                                                            </p>
                                                    </div>
                                                </div>
                                        </div>
 <div className = "milkTypeBox">
                                            <label>Milk Options</label>
                                                <div className = "coffeeIcons">
                                                    <div className = "full">
                                                        <div><i className="fas fa-thermometer-full fa-2x"></i></div>
                                                            <p><input name="sizeButton" type="radio" checked />
                                                                <span>Full</span>
                                                            </p>
                                                    </div>
 
                                                    <div className = "semi">
                                                        <div><i className="fas fa-thermometer-half fa-2x"></i></div>
                                                            <div>
                                                                <p>
                                                                    <input name="sizeButton" type="radio" checked />
                                                                        <span>Semi</span>
                                                                </p>
                                                            </div>
                                                    </div>
 
                                                    <div className = "goat">
                                                        <div><i className="fas fa-seedling fa-2x"></i></div>
                                                            <div>
                                                                <p>
                                                                    <input name="sizeButton" type="radio" checked />
                                                                        <span>Goat</span>
                                                                </p>
                                                            </div>
                                                    </div>
 
                                                    <div className="soya">
                                                        <div><i className="fas fa-seedling fa-2x"></i></div>
                                                    <div>
                                                            <p>
                                                                <input name="sizeButton" type="radio" checked />
                                                                    <span>Soya</span>
                                                            </p>
                                                    </div>
                                                    </div>
                                        </div>
                                       </div>                                        </div>
                                        <div>
                                                </div>
 
                                                    <div className = "cartIcon">
                                                        <i class="fas fa-cart-plus"></i>
                                                    </div>
                                                        </div>
        )
    }
}


export default CoffeeTypes
