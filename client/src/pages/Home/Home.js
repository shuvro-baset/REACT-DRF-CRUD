import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [students, setStudents] = useState([]); 
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/get-student`)
            .then(res => res.json())
            .then(data => {
                setStudents(data)
                console.log(data);
            });
    }, []);


    // DELETE AN USER
    const handleDeleteStudent = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            // const url = ;
            axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}/`)
                // .then(res => res.json()
                // )
                // .then(data => {
                //     console.log("sdf", data);
                //     // if (data.deletedCount > 0) {
                //     //     alert('deleted successfully');
                //         const remainingStudents = students.filter(student => student.id !== id);
                //     setStudents(remainingStudents);
                //     // }
                // });
        }
        const remainingStudents = students.filter(student => student.id !== id);
        setStudents(remainingStudents);
    }
    return (
        <Container>
            <Row style={{height: '100vh'}} className="py-5">
                
                <Col>
                    <h2 className="text-center pb-5"> All Students List</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Group</th>
                            <th>Roll</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => 
                            
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.classs}</td>
                                    <td>{student.group}</td>
                                    <td>{student.roll}</td>
                                    <td>{student.status}</td>
                                    <td>
                                        <button>update</button>
                                        <button onClick={() => handleDeleteStudent(student.id)}>delete</button>
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