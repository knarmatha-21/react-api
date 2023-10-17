import React, { useEffect, useState } from 'react';
import {Card, Container, Table} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const EmployeeListing = () =>{
	const [empData, setEmpData] = useState('')	
	const navigate = useHistory()

	const showDetail = (id) =>{
		navigate.push('/employee/detail/'+id)
	}

	const editDetail = (id) =>{
		navigate.push('/employee/edit/'+id)
	}

	const removeDetail = (id) =>{
		if(window.confirm('Do you want to remove')){
			fetch('http://localhost:8000/employee/'+id,{
				method:"DELETE"				
			}).then((res) =>{
				alert("Removed Successfully");
				window.location.reload();				
			}).catch((error)=>{
				console.log(error.message)
			})
		}
	}

	useEffect(()=>{
		fetch('http://localhost:8000/employee').then((res) =>{
			return res.json();
		}).then((resp)=>{
			setEmpData(resp);			
		}).catch((error)=>{
			console.log(error.message)
		})
	}, [])
	return(
		<div>
			<Container>
				<Card style={{padding:'20px 15px'}}>
				<Card.Title>
					Employee Lists
				</Card.Title>
				<Card.Body>
					<div>
						<Link to="employee/create"> Add New (+)</Link>
					</div>
					<div className='table-responsive'>
						<Table className='table table-bordered'>
							<thead className='bg-dark tect-white'>
								<tr>
									<td>ID</td>
									<td>Name</td>
									<td>Email</td>
									<td>Phone</td>
									<td>Action</td>
								</tr>
							</thead>
							<tbody>
								{
									empData && 
									empData.map(item=>(
										<tr key={item.id}>
											<td>{item.id}</td>
											<td>{item.name}</td>
											<td>{item.email}</td>
											<td>{item.phone}</td>
											<td>
												<a onClick={()=>editDetail(item.id)} className='btn btn-success'>Edit</a>
												<a onClick={()=>removeDetail(item.id)} className='btn btn-danger'>Remove</a>
												<a onClick={()=>showDetail(item.id)} className='btn btn-primary'>Details</a>
											</td>
										</tr>
									))
								}
							
							</tbody>
						</Table>
					</div>
				</Card.Body>
				</Card>
			</Container>
		</div>
	)
}

export default EmployeeListing