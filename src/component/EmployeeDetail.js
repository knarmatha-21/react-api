import React, { useEffect, useState } from 'react';
import {Container, Card} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';

const EmployeeDetail = () =>{

    const {empid} = useParams();
    const [empData, setEmpData] = useState('')
    useEffect(()=>{
        fetch('http://localhost:8000/employee/'+empid).then((res) =>{
			return res.json();
		}).then((resp)=>{
			setEmpData(resp);			
		}).catch((error)=>{
			console.log(error.message)
		})
    },[])

    return(
        <Container>
            <Card style={{padding:'20px 15px'}}>
                <Card.Title>
                    Employee Lists
                </Card.Title>
                <Card.Body>
                {
                    empData && 
                    <div>
                        <p><b>Id: </b>{empData.id}</p>
                        <p><b>Name: </b>{empData.name}</p>
                        <p><b>Email: </b>{empData.email}</p>
                        {empData.phone !=='' && <p><b>Phone: </b>{empData.phone}</p>}
                        <Link to='/' className="btn btn-warning">Back</Link>
                        
                    </div>
                }
                </Card.Body>
            </Card>
        </Container>
    )
}

export default EmployeeDetail