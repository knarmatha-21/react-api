import Counter from "./Counter"
import Logged from "./Logged"
import { combineReducers } from "redux"


const allReducers = combineReducers({
    counter: Counter,
    login: Logged
})

export default allReducers