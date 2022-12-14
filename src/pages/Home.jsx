import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createProductThunk } from '../store/slices/cart.slice';
import { filterProductsThunk, getProductsThunk, filterNameThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const [categoriesList, setCategoriesList] = useState([])
    const [inputSearch, setInputSearch] = useState("")

    useEffect(() => {
        dispatch(getProductsThunk())

        axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setCategoriesList(res.data.data.categories))
    }, [])

    return (
        <div>
            <Row>
                <Col lg={3}>
                    <Accordion defaultActiveKey={['1']} alwaysOpen className='acordeon'>
                        <h4>Filter</h4>
                        
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>
                                <ul className='category-filter'>
                                    {categoriesList.map(category => (
                                        <li onClick={() => {
                                            dispatch(filterProductsThunk(category.id),
                                                setInputSearch(""))
                                        }
                                        } key={category.id}>
                                            <button>{category.name}</button>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col lg={9}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="What are you looking for?"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={inputSearch}
                            onChange={e => setInputSearch(e.target.value)}
                        />
                        <Button
                            className='button-home'
                            variant="outline-secondary"
                            onClick={() => dispatch(filterNameThunk(inputSearch))}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </InputGroup>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map(product => (
                            <Col key={product.id}>
                                <Card>
                                    <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                                        <Card.Img
                                            variant="top"
                                            src={product.productImgs[0]}
                                            style={{ height: 200, objectFit: "contain" }}

                                        />

                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <div className='info-card-buy'>
                                                <div>
                                                    <Card.Text className='text-muted'>
                                                        Price
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {product.price}
                                                    </Card.Text>
                                                </div>
                                                <div>
                                                    <Button
                                                        variant="outline-secondary"
                                                        className='button-home button-buy'

                                                    >
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                    </Button>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;