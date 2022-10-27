import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");

 
  const previousInputValue= useRef("")

  useEffect(() => {
    previousInputValue.current = inputValue
   
  }, [inputValue]);

  return (
    <React.Fragment>
        <h3>UseRef</h3>

        <input 
        
            type="text"
            value={inputValue}
            onChange = { (event) => setInputValue(event.target.value) }
        />

        <h5>Current value: {inputValue}</h5>
        <h5>Previous value: {previousInputValue.current}</h5>

        <hr />
    </React.Fragment>
    
  )
}

export default UseRef