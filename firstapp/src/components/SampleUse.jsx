import { Button, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SampleUse = () => {
    var[x,setX]=useState();
    const inp1=()=>{
        setX("REACT")
    }
    const inp2=()=>{
        setX(" ANGULAR")
    }
    useEffect(()=>{
    inp1();
},[])
    
    const inp3=()=>{
        setX(" VIEW")
    }

  return (
    <div>
       <Typography variant='h6'>WELCOME TO {x}</Typography><br /><br />
  <Button variant='contained' color='warning' onClick={inp1}>React </Button>&nbsp;
  <Button variant='contained' color='warning' onClick={inp2}>Angular </Button> &nbsp;
  <Button variant='contained' color='warning' onClick={inp3}>View </Button> &nbsp;

    </div>
  )
  }

export default SampleUse