import React from 'react';
import './cart.css';
import coffeeCup from './coffeecup.jpeg'



function ShowOrder(props){


  if(!props.card) {
    return null;
  }

  return (
    <div className="card" >
    <div className="removecart">
      <button className="deletebtn fas fa-times-circle fa-3x"></button>
    </div>
    <div className="image-holder">
      <img src={coffeeCup} alt="coffeecup" />
    </div>
    <div className="details">
      <h2 className="details-title">Coffee Type Here</h2>
      <p className="details-short-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h3 className="price">£2.50</h3>
      <div className="additions">
        <button className="minusbtn fas fa-minus-circle fa-2x"></button>
        <h1 className="qty">1</h1>
        <button className="plusbtn fas fa-plus-circle fa-2x" ></button>
      </div>
    </div>
  </div>
  )
 
  }




class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {showCard: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

handleToggleClick() {
    this.setState(prevState => ({
      showCard: !prevState.showCard
    }));
  }


  handelClick(e) {
    e.preventDefault();
    console.log('the link was clicked');

 }

    render() {
        return (
<div className="cartContainer">
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          />
          <link rel='stylesheet' 
          href='https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.css'
          />

    <aside>
      <i className="fas fa-shopping-cart fa-3x"></i>
      <h1 className="title">Cart</h1>

      <a href='#' onClick={this.handelClick}>
        Click me
      </a>

     <div> 
     <ShowOrder card={this.state.showCard} />
     <button onClick={this.handleToggleClick}>
       {this.state.showCard ? 'Hide' : 'Show'}
     </button>
     </div>

     

      <div className="total">
          <h2 className="subtotal">Subtotal: £8.50</h2>
          <button className="btn btn-submit">Checkout</button>
      </div>
    </aside>
</div>

        )
  }
}

export default Cart




        {/* keep this as a spare card for the cart as Allison originally built */}
      {/* <div className="card">
        <div className="removecart">
          <i className="fas fa-times-circle fa-3x"></i>
        </div>
        <div className="image-holder">
          <img src={coffeeCup} alt="coffeecup" />
        </div>
        <div className="details">
          <h2 className="details-title">Coffee Type Here</h2>
          <p className="details-short-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h3 className="price">£2.50</h3>
          <div className="additions">
            <i className="fas fa-minus-circle fa-2x"></i>
            <h1 className="qty">1</h1>
            <i className="fas fa-plus-circle fa-2x"></i>
          </div>
        </div>
      </div> */}