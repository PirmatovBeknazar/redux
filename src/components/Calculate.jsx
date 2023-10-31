import React, { useState } from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { calculateActionsTypes} from "../store/CalculateReduser"
import { showCalculateActionsTypes } from "../store/ShowCalculate";


const Calculate = () => {
  // const [openCalculate, setOpenCalculate] = useState(false);
  const result = useSelector((state) => state.calculate.result)
  const showCalculates = useSelector ((state)=>state.showCalculate.showCalculate)
const dispatch = useDispatch() 
  // const result = store.getState()
  // console.log(result);

  // const showCalculate = () => {
  //   setOpenCalculate ((prev) => !prev);
  // };
  const showCalculate = () => {
    dispatch({type: showCalculateActionsTypes.OPEN, payload: true})
  };
  // const showCloseCalculate = ()=>{
  //   dispatch({type: showCalculateActionsTypes.CLOSE, payload: false})
  // }

  const PLusHandler = () =>{
    dispatch({type: calculateActionsTypes.PLUS , payload: 5} )
  }
  const MinusHandler = () =>{
    dispatch({type: calculateActionsTypes.MINUS , payload: 5})
  }
  const MultiplyHandler = ()=>{
    dispatch({type: calculateActionsTypes.MULTIPLY , payload: 5})
  }
  const DivideHandler = () =>{
    dispatch({type: calculateActionsTypes.DIVAIDE , payload: 5})
  }



  return (
    <GlobalCalculateCOnatainer>
      <h3>REACT-CALCULATE</h3>
      <Button onClick={showCalculate}>open-calculate</Button>
      {/* <Button onClick={showCloseCalculate}>open-calculate</Button> */}
      {showCalculates && (
        <div>
          <h2>{result}</h2>
          <ContainerButtons>
            <Button onClick={PLusHandler}>+</Button>
            <Button onClick={MinusHandler}>-</Button>
            <Button onClick={MultiplyHandler}>*</Button>
            <Button onClick={DivideHandler}>/</Button>
          </ContainerButtons>
        </div>
      )}
    </GlobalCalculateCOnatainer>
  );
};

export default Calculate;

const GlobalCalculateCOnatainer = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: rgb(244, 246, 248) 0px 20px 30px -10px;
`;

const ContainerButtons = styled.div`
  width: 350px;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
`;
