import { useEffect, useState } from 'react'
import {API_URL} from '../constants'
import axios from 'axios'
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () =>{
    const [users, setUsers] = useState('');
    useEffect(()=>{
        axios.get(API_URL)
        .then((result)=>setUsers(result.data))
        .catch((error)=>console.log(error))
    },[])

    const handleDelete = (id) =>{
        const confirm = window.confirm("Would to like to delete");
        if(confirm){
            axios.delete(API_URL+id)
            .then((res)=>{
                window.location.reload();
            }).catch((error)=>{
                console.log(error);
            })
        }
    }

    return (
        <Container>
            <div style={{paddingTop:'30px',paddingBottom:'30px'}}>
                <h2>List of Users</h2>
                <div style={{textAlign:'right', margin:'30px'}}>
                    <Link to = '/create' className='btn btn-primary'>Add New +</Link>
                </div>
                <div className='table-responsive'>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && 
                                users.map((user,index)=>(
                                    <tr key={index}>
                                        <td style={{width:'10%'}}>{user.id}</td>
                                        <td style={{width:'20%'}}>{user.name}</td>
                                        <td style={{width:'30%'}}>{user.username}</td>
                                        <td style={{width:'20%'}}>{user.email}</td>
                                        <td style={{width:'20%'}}>
                                            <Link className='btn btn-primary' to={`/read/${user.id}`} style={{marginRight:'7px'}}>Read</Link>   
                                            <Link className='btn btn-success' to={`/update/${user.id}`} style={{marginRight:'7px'}}>Edit</Link>
                                            <Link onClick={(e)=>handleDelete(user.id)} className='btn btn-danger' style={{marginRight:'7px'}}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}

export default Home