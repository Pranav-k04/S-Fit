import React from 'react'
import { Link } from 'react-router-dom'
import {Stack} from '@mui/material'
import sym from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    direction={'row'}
    justifyContent={'space-around'}
    sx={{
        gap:{sm:'122px',xs:'40px'},
        marginTop:{sm:'32px',xs:'20px'},
        justifyContent:'none'
    }}
    px='20px'
    >
        <Link to="/">
            <img src={sym} alt="logo" style={{width:'45px',height:'45px'}}/>
        </Link>
        {/* <div>Navbar</div> */}
        <Stack 
        direction="row"
        gap={'40px'}
        fontSize={'24px'}
        alignItems={'flex-end'}
        >
            <Link to="/home" style={{textDecoration:'none',color:'#3A1212',
                borderBottom:'2px solid #FF2625'
            }}>Home</Link>
            <a href='#exercises' style={{textDecoration:'none',color:'#3A1212'}}>Exercise</a>
        </Stack>
    </Stack>
    
  )
}

export default Navbar