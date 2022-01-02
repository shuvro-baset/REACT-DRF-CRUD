import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

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
                                        <button>delete</button>
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