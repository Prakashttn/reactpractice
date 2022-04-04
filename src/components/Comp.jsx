import React,{useState} from 'react'
  


const Comp = () => {
    const [name,setName] = useState([])

    

  return (
    <>
    <form>
  <label> 
    <input type="text" name="name" />
  </label>
  <input type="submit" value="OK" onClick={() => {setName(name)}}/>
</form>
    </>
  )
}

export default Comp