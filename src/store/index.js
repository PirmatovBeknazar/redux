import { createStore } from "redux";
import { calculatorReduser } from "./CalculateReduser";
import {combineReducers} from "redux";
import { ShowCalculateReducer } from "./ShowCalculate";



const roorReduser = combineReducers({
    calculate:  calculatorReduser,
    showCalculate: ShowCalculateReducer
})


export const store = createStore(roorReduser)