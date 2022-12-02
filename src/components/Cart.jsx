import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  let pricesProducts = []

  cart.map(itemPrice => (
    pricesProducts.push((itemPrice.price * itemPrice.productsInCart.quantity))
  ))

  let totalCart = 0;
  for (let n of pricesProducts) {
    totalCart += n;
  }

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          {
            cart.map(product => (
              <div key={product.title}>
                <li className='list-cart'>
                  <div>
                    <h6 className='subtitle-cart'>
                      {product.brand}
                    </h6>
                    <h6>
                      {product.title}
                    </h6>
                    <h6 className='quantity-cart'>
                      {product.productsInCart.quantity}
                    </h6>
                  </div>
                  <div className='info-price-cart'>
                    <h6 className='subtitle-cart'>Total:</h6>
                    <h6>${(product.price * product.productsInCart.quantity).toFixed(2)}</h6>
                  </div>
                </li>
              </div>
            ))
          }
        </ul>
      </Offcanvas.Body>
      <div className='total-price-cart'>
        <div className='info-price-cart'>
          <h6 className='subtitle-cart'>Total:</h6>
          <h6>${totalCart.toFixed(2)}</h6>
        </div>
        <Button onClick={() => dispatch(checkoutCartThunk())} style={{ backgroundColor: "#f85555" }}>Checkout</Button>
      </div>
    </Offcanvas>
  );
};

export default Cart;