import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch()
    const purchases = useSelector(state => state.purchases)

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])
    return (
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h1>My Purchases</h1>
            {
                purchases.map(purchase => (
                    <>
                        <Card >
                            <ListGroup >
                                <Card.Header>
                                    {purchase.createdAt}
                                </Card.Header>
                                <ListGroup.Item className='card-complete-info'>
                                    <div>
                                        {purchase.cart.products.map(product => (
                                            <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                                                <div className='card-shop'>
                                                    <h6 key={product.title}>
                                                        {product.title}
                                                    </h6>
                                                    <div className='card-info-price'>
                                                        <h6 className='quantity-purchases'>{product.productsInCart.quantity}</h6>
                                                        <h6>
                                                            {product.price}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </>
                ))
            }
        </div>
    );
};

export default Purchases;