import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../actions";

const ReduxComponent = () =>{

    const counterValue = useSelector((state)=>state.counter);
    const isLoggedIn = useSelector((state)=>state.login);
    const dispatch = useDispatch()

    return(
        <div>
            <h3 style={{textAlign:'center', marginTop:'25px', marginBottom:'25px'}}>Redux State Management</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>&nbsp;
            <span>Counter Value: {counterValue}</span>&nbsp;
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
       
}

export default ReduxComponent