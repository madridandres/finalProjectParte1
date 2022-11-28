import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <Card className="text-center">
            <Card.Body className='footer'>
                <div className='info-footer'>
                    <div>
                        <Card.Title>© Academlo 2022</Card.Title>
                    </div>
                    <div className='buttons-links'>
                        <Button variant="primary" className='button-footer' href='https://www.linkedin.com/in/andr%C3%A9s-felipe-mar%C3%ADn-madrid-583099224/' target='_blank'><i className="fa-brands fa-linkedin"></i></Button>
                        <Button variant="primary" className='button-footer' href='https://github.com/madridandres/finalProjectParte1' target='_blank'><i className="fa-brands fa-github"></i></Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Footer;