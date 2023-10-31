export const showCalculateActionsTypes ={
    OPEN: "OPEN",
    CLOSE: "CLOSE"
}

const inintialState = {
    showCalculate: false,
    // showCalculates: true
}

export  const ShowCalculateReducer = (state = inintialState , action) =>{
switch(action.type){
    case showCalculateActionsTypes.OPEN:
        return{
            showCalculate: state.showCalculate !== action.payload
        }
    // case showCalculateActionsTypes.CLOSE:
    //     return{
    //         showCalculate: state.showCalculate = action.payload
    //     }
    default:
        return state
}
}