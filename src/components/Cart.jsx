import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getCartThunk } from '../store/slices/cart.slice';

const Cart = ({show, handleClose}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getCartThunk()) 
    }, [])

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
                        <li>
                            {product.title}
                        </li>
                    </div>
                ))
            }
          </ul>
        </Offcanvas.Body>
        <Button onClick={() => dispatch(checkoutCartThunk())}>Checkout</Button>
      </Offcanvas>
    );
};

export default Cart;