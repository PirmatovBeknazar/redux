export const  calculateActionsTypes = {
    PLUS: "PLUS"  ,
    MINUS: "MINUS",
    MULTIPLY: "MULTIPLY",
    DIVAIDE: "DIVAIDE"
}

const inintialState = {
    result: 0
}

 export const calculatorReduser = (state = inintialState, action)=>{
    switch(action.type){
        case calculateActionsTypes.PLUS:
            return{
                result: state.result + action.payload
            }
        case calculateActionsTypes.MINUS:
            return{
                result: state.result - action.payload
            }
        case calculateActionsTypes.MULTIPLY:
            return{
                result: state.result * action.payload
            }
        case calculateActionsTypes.DIVAIDE: 
            return{
                result:state.result / action.payload
            }
            default:
            return state
    }
}
