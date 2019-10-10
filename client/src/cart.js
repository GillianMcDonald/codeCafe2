import React from 'react';
import './cart.css';
import './images/coffeecup.jpeg';


class Cart extends React.Component {
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

      <div className="card">
        <div className="removecart">
          <i className="fas fa-times-circle fa-3x"></i>
        </div>
        <div className="image-holder">
          <img src="./images/coffeecup.jpeg" alt="coffeecup" />
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
      </div>

      <div className="card">
        <div className="removecart">
          <i className="fas fa-times-circle fa-3x"></i>
        </div>
        <div className="image-holder">
          <img src="./images/coffeecup.jpeg" alt="coffeecup" />
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
      </div>

      <div className="card">
        <div className="removecart">
          <i className="fas fa-times-circle fa-3x"></i>
        </div>
        <div className="image-holder">
          <img src="./images/coffeecup.jpeg" alt="coffeecup" />
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