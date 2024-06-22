import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
               <Typography variant='h6'>MY APP</Typography>&nbsp; 
               <Button variant='contained' color='success'>
                <Link to='/sin' >
                SIGN UP
                </Link>
                </Button>&nbsp;
               <Button variant='contained' color='secondary'>
                <Link to='/' >
                LOGIN
                </Link>
                </Button>&nbsp;
                <Button variant='contained' color='warning'>
                <Link to='/sb' >
                STATE
                </Link>
                </Button>&nbsp;
                <Button variant='contained' color='error'>
                <Link to='/cnt' >
                COUNT
                </Link>
                </Button>&nbsp;
                <Button variant='contained' color='success'>
                <Link to='/lst' >
                LIST
                </Link>
                </Button>&nbsp;
                <Button variant='contained' color='secondary'>
                <Link to='/api' >
                API
                </Link>
                </Button>&nbsp;
                <Button variant='contained' color='warning'>
                <Link to='/use' >
                USE EFFECT
                </Link>
                </Button>&nbsp;
                <Button variant='contained' color='warning'>
                <Link to='/card' >
                CARD
                </Link>
                </Button>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar