import { useEffect, useState } from 'react'
import {API_URL} from '../constants'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const Read = () =>{

    const [data, setData] = useState('');
    const {id} = useParams();
   
    useEffect(()=>{
        axios.get(API_URL+id)
        .then((result)=>{
            setData(result.data)            
        })
        .catch((error)=>console.log(error))
        
    },[])
    
    return (
        <div style={{marginTop:'50px'}}>
            <Container>
				<Card>
                    <Card.Title style={{margin:'15px'}}>
                    Detail of User
                    </Card.Title>
				    <Card.Body>
                        <div>
                            Name: {data.name}
                        </div>
                        <div>
                            Username: {data.username}
                        </div>
                        <div>
                            Email: {data.email}
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Link className='btn btn-success' style={{marginRight:'7px'}} to={`/update/${id}`}>Edit</Link>
                            <Link className='btn btn-warning' style={{marginRight:'7px'}} to={"/home"}>Back</Link>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Read