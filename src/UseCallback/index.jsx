import React, { useState,useCallback } from 'react'
import List from './List';

const UseCallBack = () => {

  const [number, setNumber] = useState(1);

  const getItems = useCallback(
    () => {
      return [number, number+1, number+2]
    },

    [number],
  )
  


  return (
    <React.Fragment>
      <h3>UseCallBack</h3>

      <input 
      type="number"
      value={number}
      onChange = {
        event => {
          if(event.target.value){
              setNumber( parseInt(event.target.value)) 
          }else{
            setNumber(0)
          }
        }
      }
      
      />

      <List getItems={getItems} />
      <hr />
    </React.Fragment>
  )
}

export default UseCallBack