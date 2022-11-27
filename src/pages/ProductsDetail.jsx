import React, { useEffect } from 'react';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const productsList = useSelector(state => state.products)
    const product = productsList.find(productItem => productItem.id === Number(id))
    const relatedProducts = productsList.filter(productItem => productItem.category.id === product.category.id && productItem.id !== product.id)


    return (
        <div>
            <Row>
                <Col lg={6}>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={product?.productImgs[0]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={product?.productImgs[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={product?.productImgs[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={6}>
                    <h1>{product?.title}</h1>
                    <h5>{product?.description}</h5>
                    <div>
                        <div>
                            <h6 className='text-muted'>Price</h6>
                            <h5>{product?.price}</h5>
                        </div>
                        <div>
                            <h6 className='text-muted'>Quantity</h6>
                            <h5>"Poner contador"</h5>
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Add to cart <i className="fa-solid fa-cart-shopping"></i>
                        </Button>
                    </div>
                </Col>
            </Row>
            <h3>Discover similar items</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {relatedProducts.map(productItem => (
                    <Col key={productItem.id}>
                        <Card>
                            <Link to={`/products/${productItem.id}`} style={{ textDecoration: "none" }}>
                                <Card.Img
                                    variant="top"
                                    src={productItem.productImgs[0]}
                                    style={{ height: 200, objectFit: "contain" }}

                                />
                                <Card.Body>
                                    <Card.Title>{productItem.title}</Card.Title>
                                    <Card.Text className='text-muted'>
                                        Price
                                    </Card.Text>
                                    <Card.Text>
                                        {productItem.price}
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductsDetail;