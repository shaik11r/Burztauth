import React, { useContext, useState } from 'react'
import { studentsContext } from '../providers/StudentsContextProvider';

const SignUp = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {signUp}=useContext(studentsContext)
  return (
    <>
    <p>Sign Up</p>
    <input type='text' placeholder='Enter username' onChange={(e)=>{
        setUsername(e.target.value)
    }}/>
    <input type='password' placeholder='password' onChange={(e)=>{
        setPassword(e.target.value)
    }}/>
    <button onClick={()=>{signUp(username,password)}}>Sign Up</button>
    </>
  )
}

export default SignUp