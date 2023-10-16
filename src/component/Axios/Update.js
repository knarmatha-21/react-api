import axios from "axios";
import { useState,useEffect } from "react"
import { Card, Container } from "react-bootstrap"
import { Link, useHistory, useParams } from "react-router-dom"
import {API_URL} from '../constants'

const Update = () =>{
   
    const {id} = useParams();
    const [userValues, setUserValues] = useState({        
        name:'',
        username:'',
        email:''
    });
    const navigate = useHistory();
   
    useEffect(()=>{
        axios.get(API_URL+id)
        .then((result)=>{
            setUserValues(result.data)            
        })
        .catch((error)=>console.log(error))
        
    },[])

   
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(API_URL+id, userValues)
        .then((res)=>{           
            navigate.push('/home')
        })
        .catch((error)=>console.log(error));
    }

   
    return (
        <div style={{marginTop:'50px'}}>
            <Container>
				<Card>
                    <Card.Title style={{margin:'15px'}}>
                        Update
                    </Card.Title>
				    <Card.Body>
                        <form onSubmit={handleSubmit}>
                        <div className='form-group'>                               
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' value={userValues.name}
                                onChange={(e)=>setUserValues({...userValues, name:e.target.value})}
                                 />
                            </div>
                            <div className='form-group'>
                                <label>Username</label>
                                <input type="text" className='form-control' value={userValues.username}
                                onChange={(e)=>setUserValues({...userValues, username: e.target.value})}
                                 />
                            </div>  
                            <div className='form-group'>
                                <label>Email</label>
                                <input type="email" className='form-control' value={userValues.email}
                                onChange={(e)=>setUserValues({...userValues, email: e.target.value})}
                                />
                            </div>                             
                            <div style={{marginTop:'20px'}}>
                                <button className='btn btn-success' style={{marginRight:'7px'}} type='submit'>Submit</button>
                                <Link to='/home' style={{marginRight:'7px'}} className='btn btn-warning'>Back</Link>
                            </div>
                        </form>                       
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Update