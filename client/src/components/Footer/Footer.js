import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <p>Design & developed By <a href="https://www.linkedin.com/in/shuvro-baset/">Baset</a> </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;