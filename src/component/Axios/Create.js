import axios from "axios";
import { useState } from "react"
import { Card, Container } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import {API_URL} from '../constants'

const Create = () =>{

    const [userValues, setUserValues] = useState({        
        name:'',
        username:'',
        email:''
    });

    const navigate = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(API_URL, userValues)
        .then((result)=>{
            setUserValues(result.data); 
            navigate.push('/home')
        })
        .catch((error)=>console.log(error));
    }

    return (
        <div style={{marginTop:'50px'}}>
			<Container>
				<Card>
                    <Card.Title style={{margin:'15px'}}>
                        Create Post
                    </Card.Title>
				    <Card.Body>
                        <form onSubmit={handleSubmit}>
                        <div className='form-group'>                               
                            </div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e)=>setUserValues({...userValues, name:e.target.value})} />
                            </div>
                            <div className='form-group'>
                                <label>Username</label>
                                <input type="text" className='form-control' onChange={(e)=>setUserValues({...userValues, username: e.target.value})} />
                            </div>  
                            <div className='form-group'>
                                <label>Email</label>
                                <input type="email" className='form-control'  onChange={(e)=>setUserValues({...userValues, email: e.target.value})}/>
                            </div>                             
                            <div style={{marginTop:'20px'}}>
                                <button style={{marginRight:'7px'}} className='btn btn-success' type='submit'>Submit</button>
                                <Link style={{marginRight:'7px'}} to='/home' className='btn btn-warning'>Back</Link>
                            </div>
                        </form>                       
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Create
