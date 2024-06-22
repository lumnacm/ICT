import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,setdata]=useState("")
    const inputhandle=(e)=>{
        setdata(e.target.value)
    }
    const add=()=>{
    setInp([...inp,data])
    console.log(inp)
    setdata("")
    }
      return (
    <div>
     <Typography variant='h5'>LIST MAP</Typography><br />  
     <TextField id="outlined-basic" label="Type your name" onChange={inputhandle} value={data}variant="outlined" /><br/><br />
     <Button variant='contained' onClick={add}>submit</Button>&nbsp;
     <br /><br /><br />
     <ul>
     {inp.map((v,i)=>{
    return <li>{v}</li>
     })}
     
     </ul>
     
    </div>
  )
}

export default Listmap