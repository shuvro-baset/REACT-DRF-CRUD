import React from 'react';
import { Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <img className="img-fluid" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" />
            </Row>
        </Container>
    );
};

export default NotFound;