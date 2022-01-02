import React, { useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const AddStudent = () => {
    const nameRef = useRef();
    const classRef = useRef();
    const groupRef = useRef();
    const rollRef = useRef();


    const handleUserData = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const classs = classRef.current.value;
        const group = groupRef.current.value;
        const roll = rollRef.current.value;

        const newUser = { name: name, classs: classs, group: group, roll: roll };
        fetch('http://127.0.0.1:8000/api/add-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        // ------
        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            }).catch(err => {
                alert(err.message)
                console.log(err);
            })
        e.preventDefault();
        console.log(newUser)
    }

    return (
        <Container className="my-5">
                <h2 className="text-center">Add Your Student Info.</h2>

            <Row className='d-flex justify-content-center align-items-center my-5'>
                <Col md={6}>
                    <Form onSubmit={handleUserData}>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Name" ref={nameRef} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Class" ref={classRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Group" ref={groupRef} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Roll" ref={rollRef} required />
                        </Form.Group>
                        
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddStudent;