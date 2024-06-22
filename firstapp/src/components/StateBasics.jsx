import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   var [fname,setFname]=useState("LUMNA")
   var[val,setval]=useState()
   const submithandler=()=>{
    setFname(val)
   }
    const handleinput=(e)=>{
      console.log(e.target.value)  
      setval(e.target.value)
    }
   
  return (
    <div>
        <Typography variant='h5'>WELCOME {fname}</Typography><br />
        <TextField variant="outlined" label="Type your name" onChange={handleinput}/><br /><br />
        <Button variant='contained' onClick={submithandler}>submit</Button>
    </div>
  )
}

export default StateBasics