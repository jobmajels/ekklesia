import React,{useState} from 'react'
import './navbar.css'
import {NavLink,useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo.png'


function Navmenu(){

    const[showlogin,setShowlogin]=useState(false)

    const navigate =useNavigate();
    function viewLogins(){

    }

    return(
        <div className="navbox">
            <img src={logo} alt="logo" width="200px"/>

            <div className="navmenu">
             <NavLink className="menuitem" to="/">Home</NavLink>
             <NavLink className="menuitem" to="/features">Features</NavLink>
             <NavLink className="menuitem" to="/aboutus">About us</NavLink>
             <NavLink className="menuitem" to="/contacts">Contact</NavLink>
             <button onClick={()=>{setShowlogin(prev=>!prev)}}>LOGIN</button>

             <ul style={{display:showlogin?"flex":"none"}} onClick={()=>{setShowlogin(prev=>!prev)}}>
                <li onClick={()=>{navigate(`/login/${'teacher'}`)}}>Teacher Login</li>
                <li onClick={()=>{navigate(`/login/${'student'}`)}}>Student Login</li>
             </ul>

            </div>
        </div>
    )
}

export default  Navmenu;