import React, { useEffect } from 'react';
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
        <div className='temporary-page-size'>
            <h1>Purchases</h1>
            <ul>
                {
                    purchases.map(purchase => (
                        <li key={purchase.purchase?.cart.products}>
                            {purchase.cart.products.map(product => (
                                <Link to={`/products/${product.id}`}>
                                    <h5 key={product.title}>
                                        {product.title}
                                    </h5>
                                </Link>
                            ))}
                        </li>

                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;