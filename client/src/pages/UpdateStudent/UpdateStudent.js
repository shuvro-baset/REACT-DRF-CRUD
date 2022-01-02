import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateStudent = () => {
    const [student, setStudent] = useState({})
    const {id} = useParams()
    console.log(typeof id);

    // getting specific user information 
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/${id}`)
            .then(res =>{ res.json()
                console.log(res);
            })
            .then(data => {
                setStudent(data)
                console.log(data);
            });
    }, [id]);

    const nameRef = useRef();
    const classRef = useRef();
    const groupRef = useRef();
    const rollRef = useRef();

    return (
        <Container className="my-5">
                <h2 className="text-center">Add Your Student Info.</h2>

            <Row className='d-flex justify-content-center align-items-center my-5'>
                <Col md={6}>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Name" ref={nameRef} value={student.name} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Class" ref={classRef} value={student.classs} required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Group" ref={groupRef} value={student.group} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Roll" ref={rollRef} value={student.roll} required />
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

export default UpdateStudent;