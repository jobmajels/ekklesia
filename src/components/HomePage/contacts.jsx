import React,{useState} from 'react'
import './contacts.css'
import {NavLink} from 'react-router-dom'
import Footersec from '../HomePage/footer'

function Contacts(){

    const[userdetail,setUserdetail]=useState({
        name:"",
        email:"",
        phone:"",
        message:""
    });

    function submitdata(value,key){
        let temp={...userdetail};
        temp[key]=value;
        setUserdetail(temp);
    }

    function sendinfo(){
        console.log(userdetail);
        setUserdetail({
        name:"",
        email:"",
        phone:"",
        message:""
    });
        }

    return(
         <div className="contactbox">

            <div className="head">
             <NavLink className="menuitem" to="/">Home</NavLink>
             <NavLink className="menuitem" to="/features">Features</NavLink>
             <NavLink className="menuitem" to="/aboutus">About Us</NavLink>
             <NavLink className="menuitem" to="/contacts">Contact Us</NavLink>
            </div>


            <div className="contbdy">

                
                <input type="text" value={userdetail.name}  placeholder="Your full name" onChange={(e)=>{submitdata(e.target.value,"name")}}/>
                <input type="email" value={userdetail.email}  placeholder="E-mail address" onChange={(e)=>{submitdata(e.target.value,"email")}}/>
                <input type="tel" value={userdetail.phone}  placeholder="Phone No" id="phone" onChange={(e)=>{submitdata(e.target.value,"phone")}}/>
                <textarea value={userdetail.message} placeholder="Message" onChange={(e)=>{submitdata(e.target.value,"message")}}></textarea>

                 <button onClick={sendinfo}>send message</button>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.873619389528!2d76.95817397323262!3d8.511649896876259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb72c4721639%3A0xf68280c01c2bdada!2sRubik%20Software!5e0!3m2!1sen!2sin!4v1777276686093!5m2!1sen!2sin">
            </iframe>
            
              <Footersec/>
        </div>
    )
}

export default Contacts;