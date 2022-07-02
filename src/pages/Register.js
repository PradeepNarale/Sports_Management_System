import React from 'react'
import './css/Navbar.css'
import cricketVertical from "../images/cricketRegister.jpg"
import basketVertical from "../images/basketBallRegister.jpg"
function Register() {
  return (
    <div className='registerPage'>
        <img src={cricketVertical} className="leftSideBg" alt="bgRegister"/>
        <img src={basketVertical} className="rightSideBg" alt="bgRegister"/>
        <div className='regPage'>
            <form className='registerForm'>
                <h2 className='registerHeading'>Register For Event</h2>
                <input type="text" className="inputBox" isrequired placeholder="Enter Team Name"/>
                <input type="text" className="inputBox" isrequired placeholder="Enter Team Leader Name"/>
                <input type="number" className="inputBox" isrequired placeholder="Mobile Number Of Team Leader"/>
                <input type="text" className="inputBox" isrequired placeholder="Email Id of Team Leader"/>
                <input type="text" className="inputBox" isrequired placeholder="Name of College"/>
                <input type="text" className="inputBox" isrequired placeholder="Name of Event"/><br/>
                <button className='regButton' type='submit'>Register</button>
                <button className='regButton cancel' type='submit'>Cancel</button>
            </form>
        </div>
    </div>
  )
}

export default Register