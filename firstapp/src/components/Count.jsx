import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
  var[num,setNum]=useState(0)
  const add =()=>{
    console.log("Add button clicked")
    setNum(num+1)
   }
    const subst =()=>{
      console.log("subst button clicked")
      setNum(num-1)
    
    }
  return (
    <div>
  <Typography variant='h5'>COUNT:{num}</Typography><br />
  <Button variant='contained' onClick={add}>+</Button>&nbsp;
  <Button variant='contained' onClick={subst}>-</Button>
    </div>
  )
}

export default Count