import React, { useState } from 'react';
import {Card, Container, Table} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const EmployeeCreate = () =>{
    const [id, setId] = useState('');	
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [active, setActive] = useState('true');
    const navigate = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const employeeData = {name,email, phone, active};
        

        fetch('http://localhost:8000/employee',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(employeeData)
        }).then((res) =>{
			alert("Submitted Successfully");
            navigate.push('/')	
		}).catch((error)=>{
			console.log(error.message)
		})
    }

    return(
      
        <div>
			<Container>
				<Card>
                    <Card.Title>
                    Employee Create
                    </Card.Title>
				    <Card.Body>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>ID</label>
                                <input type="number" className='form-control' value={id} disabled="disabled"/>
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input required type="text" className='form-control'  value={name} onChange={e=>setName(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input required type="email" className='form-control' value={email} onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input type="number" className='form-control' value={phone} onChange={e=>setPhone(e.target.value)}/>
                            </div>
                            <div className='form-check'>
                                <input type="checkbox" className='form-check-input' checked={active} onChange={e=>setActive(e.target.checked)}/>
                                <label className='form-check-label'>Is Active</label>
                            </div>
                            <div>
                                <button className='btn btn-success' type='submit'>Submit</button>
                                <Link to='/' className='btn btn-warning'>Back</Link>
                            </div>
                        </form>
                       
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default EmployeeCreate