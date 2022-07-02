import React, { useState } from 'react'
import cricketVertical from "../../images/cricketRegister.jpg"
import basketVertical from "../../images/basketBallRegister.jpg"
import APICall from '../services/api.services';
import axios from 'axios';

function AdminLogin() {
    const [userName,setUserName] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let obj = {
            email:userName,
            password:password
        }
        const res = await axios.post("https://localhost:8080/api/users",obj)
        console.log(res)
    }
  return (
    <div className='registerPage'>
        <img src={cricketVertical} className="leftSideBg" alt="bgRegister"/>
        <img src={basketVertical} className="rightSideBg" alt="bgRegister"/>
        <div className='regPage '>
            <form onSubmit={(e)=>{handleSubmit(e)}} className='registerForm adminLogin'>
                <h2 className='registerHeading'>Login</h2>
                <input type="text" className="inputBox" onChange={(e)=>{
                    setUserName(e.target.value)
                }} isrequired value={userName} placeholder="Username / Email"/>
                <input type="password" value={password} className="inputBox" onChange={(e)=>{
                    setPassword(e.target.value)
                }} isrequired placeholder="Password"/>
                <button className='regButton' type='submit'>Login</button>
                <button className='regButton cancel' type='submit'>Cancel</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin