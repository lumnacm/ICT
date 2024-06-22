import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br />
        <Typography variant='h6'>LOGIN</Typography><br />
        <TextField id="outlined-basic" label="Username" variant="outlined" /><br/><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br/><br />
        <Button variant="contained">LOGIN</Button>
    </div>
  )
}

export default Register