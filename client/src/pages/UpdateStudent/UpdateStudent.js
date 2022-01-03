
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateStudent = () => {
    const [updatedStudent, setUpdatedStudent] = useState({});
    const [student, setStudent] = useState({})
    const {id} = useParams()
    console.log(typeof id);


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data));
    }, [id]);



     // Update User
     const handleNameChange = e => {
        const updatedName = e.target.value;
        const updateStudentData = { name: updatedName, classs: student.classs, group: student.group, roll: student.roll};
        setUpdatedStudent(updateStudentData);
    }
    const handleLClassChange = e => {
        const updatedClass = e.target.value;
        const updateStudentData = { name: student.name, classs: updatedClass, group: student.group, roll: student.roll};
        setUpdatedStudent(updateStudentData);
    }
    const handleGroupChange = e => {
        const updatedGroup = e.target.value;
        const updateStudentData = { name: student.name, classs: student.classs, group: updatedGroup, roll: student.roll};
        setUpdatedStudent(updateStudentData);
    }

    const handleRollChange = e => {
        const updatedRoll = e.target.value;
        const updateStudentData = { name: student.name, classs: student.classs, group: student.group, roll: updatedRoll};
        setUpdatedStudent(updateStudentData);
    }

    const handleUpdateStudentInfo = (e) => {

        const url = `http://127.0.0.1:8000/api/update-student/${id}/`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStudent)
        })
            .then(res => {res.json()
                if (res.status === 201) {
                    alert('Student updated successfully');
                    e.target.reset();
                }
            }
            )
            .then(data => console.log(data))
        e.preventDefault();
    }
    return (
        <Container className="my-5">
                <h2 className="text-center">Add Your Student Info.</h2>

            <Row className='d-flex justify-content-center align-items-center my-5'>
                <Col md={6}>
                    <Form onSubmit={handleUpdateStudentInfo}>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Name" onChange={handleNameChange}  defaultValue={student.name || ''} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Class" onChange={handleLClassChange} defaultValue={student.classs} required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Group" onChange={handleGroupChange} defaultValue={student.group} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Roll" onChange={handleRollChange} defaultValue={student.roll} required />
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