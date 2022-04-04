import React, {useState, useEffect, createContext} from "react";
import About from './components/About'
import Reducerhook from './components/Reducerhook'
import Comp from "./components/Comp";



const FirstName = createContext();
const LastName = createContext();
function App() {
  const [count,setCount] = useState(0)


  
  useEffect(() => {
    document.title = `clicked ${count}`;
    console.log({count})
  }, [count])
  return (
    <>
    <p>{count}</p>
    <button onClick={() => {setCount(count + 1)}}> Plus  </button>
    <button onClick={() => {setCount(count - 1)}}> Minus   </button>
    <FirstName.Provider value = {'Prakash'}>
      <LastName.Provider value={'Chand'}>
      <About />
    </LastName.Provider>
    </FirstName.Provider>

    <Reducerhook />
    <Comp />
    
    </>
  );
}

export default App;
export {FirstName, LastName};
