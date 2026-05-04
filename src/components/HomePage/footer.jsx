import React,{useState} from 'react'
import './footer.css'
import logo from '../../assets/images/logo2.png'
import {NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTelegram,faSquareInstagram,faSquareWhatsapp,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faAngleRight,faCopyright} from "@fortawesome/free-solid-svg-icons";



function Footersec(){


  const[getmail,setEmail]=useState();
  
  function setmail(value){
    setEmail(value);
  }


    return(
      
             <div className="hsection4">
                
                  <div className="footer">
                         
                   <div className="appinfo">
                     <img src={logo} alt="logo" width="130px"/>
                    <p>Ekklesia is an all-in-one online learning platform that empowers schools with live classes, smart attendance, 
                        assignments, and real-time student interaction—making education simple, accessible, and effective.</p>
                        <span>
                        <FontAwesomeIcon icon={faFacebook} style={{color: "rgba(39, 178, 253, 0.97)",}} />
                        <FontAwesomeIcon icon={faTelegram} style={{color: "rgb(39, 110, 253)",}} />
                        <FontAwesomeIcon icon={faSquareInstagram} style={{color: "rgb(251, 0, 255)",}} />
                        <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "rgb(17, 221, 13)",}} />
                        <FontAwesomeIcon icon={faYoutube} style={{color: "rgb(255, 8, 0)",}} />
                        </span>
                   </div>

                   <div className="navigation">
                    <h3>navigation</h3>
                        <div  className="menu">
                         <NavLink className="menuitem" to="/">Home</NavLink>
                         <NavLink className="menuitem" to="/features">Features</NavLink>
                         <NavLink className="menuitem" to="/aboutus">About us</NavLink>
                         <NavLink className="menuitem" to="/contacts">Contact</NavLink>
                         </div>
                    </div>

                   <div className="contacts">
                    <h3>contacts</h3>
                    <span>+91 907292105</span><br/>
                    <span>www.ekklesia.com</span>
                    <p>Ekklesia Learning Hub
                         2nd Floor, Grace Tower
                          MG Road, Palayam
                       Thiruvananthapuram – 695033
                       Kerala, India</p>
                   </div>

                   <div className="mailto">
                     <h3>Get the latest information </h3>
                     <input value={getmail}placeholder="enter your email" onChange={(e)=>{setmail(e.target.value)}}/>
                     <span><FontAwesomeIcon icon={faAngleRight} style={{color: "rgb(255, 255, 255)",}} onClick={()=>{setEmail("")}}/></span>
                    </div>

                  </div>

                  <div className="cpyright">
                    <span>Copyright <FontAwesomeIcon icon={faCopyright} style={{color: "rgb(0, 0, 0)",}} /> 2026 Ekklesia softwares. All rights reserved.</span>
                  </div>
             </div>

       
    )
}

export default Footersec