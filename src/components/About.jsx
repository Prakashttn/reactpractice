import React, {useContext} from 'react'
import {FirstName, LastName} from '../App'

const About = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    
  return (
     
    <div>
        <h1>My name is {fname} {lname}  </h1>
    </div>
  );
}

export default About