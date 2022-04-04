import React, {useReducer} from "react";


const initialState = 0;

const reducer = (state,action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
    <p>{state}</p>
    <button onClick={() => dispatch({type:"INCREMENT"})}> Reducer plus</button>
    <button onClick={() => dispatch({type:"DECREMENT"})}> Reducer minus</button>
    </>
  );
}

export default App;

