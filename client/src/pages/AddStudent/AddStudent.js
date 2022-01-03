import React, { useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory ,useLocation   } from 'react-router-dom';

const AddStudent = () => {

    // use location state 
    const location = useLocation();
    const history = useHistory();
    // set redirect url
    const redirect_uri = location.state?.from || '/home';


    // useRef for taking input value
    const nameRef = useRef();
    const classRef = useRef();
    const groupRef = useRef();
    const rollRef = useRef();

    // handleStudent data function
    const handleStudentData = (e) => {
        e.preventDefault();
        // getting input value
        const name = nameRef.current.value;
        const classs = classRef.current.value;
        const group = groupRef.current.value;
        const roll = rollRef.current.value;
        
        const newStudent = { name: name, classs: classs, group: group, roll: roll };
        fetch('http://127.0.0.1:8000/api/add-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
        .then(res => res.json())
            .then(data => {
                if (data.id) {
                    alert('Successfully added the Student.')
                    e.target.reset();
                    history.push(redirect_uri)
                }
            })
        e.preventDefault();
    }

    return (
        <Container className="my-5">
                <h2 className="text-center text-white">Add Your Student Info.</h2>

            <Row className='d-flex justify-content-center align-items-center my-5'>
                <Col md={6}>
                    <Form onSubmit={handleStudentData}>
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