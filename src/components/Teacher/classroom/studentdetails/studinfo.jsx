import React,{useState} from 'react'
import './studinfo.css'
import {useParams,useNavigate} from 'react-router-dom'


function Studinfo(props){

    const{
        fullName,
        gender,
        sid,
        tid,
        parentpno,
        phno, 
        country,
        state, 
        email,
        classid
    }=props
    
const navigate=useNavigate()

 let role = "teacher"
    return(

    <div className="sinfobox">
        <span>Name: {fullName}</span>
          <span>Gender: {gender}</span>
          <span>Parentno: {parentpno}</span>
          <span>Phno: {phno}</span>
          <span>Country: {country}</span>
          <span>State: {state}</span> 
          <span>Mail: {email}</span>
        <button onClick={()=>{navigate(`/pchat/${role}/${classid}/${fullName}/${tid}`)}}>message</button>
    </div>
           
    );
}

export default  Studinfo;