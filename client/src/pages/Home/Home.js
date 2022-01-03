import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    // useState for students data store
    const [students, setStudents] = useState([]); 



    // getting all students info
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/get-student`)
            .then(res => res.json())
            .then(data => {
                setStudents(data)
            });
    }, []);


    // DELETE  Student
    const handleDeleteStudent = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}/`)
        }
        const remainingStudents = students.filter(student => student.id !== id);
        setStudents(remainingStudents);
    }
    return (
        <Container>
            <Row className="py-5 d-flex justify-content-center align-items-center">
                <Col md={8}>
                    <h1 className="text-center text-white">Welcome to Academic Help Line</h1>
                    <h2 className="text-center text-white pb-5"> All Students List</h2>
                <Table striped bordered hover>
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Group</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => 
                            
                                <tr key={student.id}>
                                    <td className="text-white">{student.name}</td>
                                    <td className="text-white">{student.classs}</td>
                                    <td className="text-white">{student.group}</td>
                                    <td className="text-white">{student.roll}</td>
                                    <td>
                                        <Link to={`/update-student/${student.id}`}><button className="btn btn-primary mx-2"><i className="fas fa-edit"></i></button></Link>
                                        <button className="btn btn-danger" onClick={() => handleDeleteStudent(student.id)}><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            
                            )
                        }
                        
                        
                        
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;