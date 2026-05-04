import React, { useRef, useState,useContext,useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import './signup.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";

import {Studsignupdatas,Teachsignupdatas,Studlogindatas,Teachlogindatas} from '../Contextz/MyContext'

function Signupage() {

  const { role } = useParams();
  const navigate = useNavigate();
  const showsid = useRef();
  const [showcls, setShowcls] = useState(false);
  const[showpwd,setShowpwd]=useState(true);

  function showSchoolid() {
    showsid.current.style.display = "inline";
  }

  function showClasslist() {
    setShowcls(prev => !prev);
  }
  function showpass(){
    setShowpwd(prev=>!prev);
  }

  //context


  const{StudsignupData,setStudSignupData}=useContext(Studsignupdatas);
  const{StudloginData, setStudLogindata}=useContext(Studlogindatas)



  const{TeachsignupData,setTeachSignupData}=useContext(Teachsignupdatas);
  const{TeachloginData, setTeachLogindata}=useContext(Teachlogindatas)
  // console.log(StudsignupData);
  // console.log(TeachsignupData);

  // student states

const[Ssignup,setSsignup]=useState({
  id: Math.random().toString(36).substring(2,10),
  schoolid:"",
  fname:"",
  lname:"",
  gender:"",
  email:"",
  phno:"",
  password:"",
  role:role,
  classId:"",
  country:"",
  state:""
});

function handleStudData(value,key){
let temp={...Ssignup};
temp[key]=value;
setSsignup(temp);
}


function studSubmit(e){
 e.preventDefault();
 
 setStudSignupData((prev)=>{
   return [...prev,Ssignup]
 });

 let studlog = {
  email:Ssignup.email,
  password:Ssignup.password
 } 

 setStudLogindata((prev)=>{
    return [...prev,studlog ]
 })

  setSsignup({
  id:"",
  schoolid:"",
  fname:"",
  lname:"",
  gender:"",
  email:"",
  phno:"",
  password:"",
  role:role,
  classId:"",
  country:"",
  state:""
})

// window.location.href=`/login/${role}`
navigate(`/login/${role}`);
}

useEffect(()=>{
   console.log(StudsignupData);
   console.log(StudloginData);
},[StudsignupData,StudloginData])

// useEffect(()=>{
//    console.log(TeachsignupData);
//    console.log(TeachloginData);
// },[TeachsignupData,TeachloginData])


 // Teacher states

const[Tsignup,setTsignup]=useState({
    id:Math.random().toString(36).substring(2,10),
    schoolid:" ",
    fname:"",
    lname:"",
    gender:"",
    mail: "",
    phno:"",
    password:"",
    role: role,
    country: "",
    state: ""
})

function handleTeacData(value,key){
let temp={...Tsignup};
temp[key]=value;
setTsignup(temp);
}


function teachSubmit(e){
  e.preventDefault();
 
setTeachSignupData((prev)=>{
    return [...prev,Tsignup]
})

 let teachlog = {
  mail:Tsignup.mail,
  password:Tsignup.password
 } 

 setTeachLogindata((prev)=>{
   return [...prev,teachlog]
 })

  setTsignup({
     id:0,
    schoolid:"",
    fname:"",
    lname:"",
    gender:"",
    mail: "",
    phno:"",
    password:"",
    role: role,
    country: "",
    state: ""
  })
 
  //window.location.href=`/login/${role}`
  navigate(`/login/${role}`)
}

  return (

    <div className="logcontainer">

      <div className="logbox">

        <h1>Signup <span className="hrole">{role === "teacher" ? "Teacher" : "Student"}</span></h1>

        <form onSubmit={role==="student"?studSubmit:teachSubmit}>
           
           {/* {school id} */}
          <input type="text" placeholder="School Id" id="schoolid" onClick={showSchoolid}
          value={role==="student"?Ssignup.schoolid:Tsignup.schoolid} 
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"schoolid"):handleTeacData(e.target.value,"schoolid")}}/>
          <span ref={showsid} className="schoolids">use id: school101</span><br />
       
          <input type="text" placeholder="Fname"  value={role==="student"?Ssignup.fname:Tsignup.fname}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"fname"):handleTeacData(e.target.value,"fname")}}/>

          <input type="text" placeholder="Lname" value={role==="student"?Ssignup.lname:Tsignup.lname}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"lname"):handleTeacData(e.target.value,"lname")}}/>

          <input type="text" placeholder="Gender" value={role==="student"?Ssignup.gender:Tsignup.gender}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"gender"):handleTeacData(e.target.value,"gender")}}/><br />

          <input type="email" placeholder="mail@gmail.com" value={role==="student"?Ssignup.email:Tsignup.mail}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"email"):handleTeacData(e.target.value,"mail")}}/><br />

          <input type="number" placeholder="Phone" value={role==="student"?Ssignup.phno:Tsignup.phno}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"phno"):handleTeacData(e.target.value,"phno")}}/><br />
          
          <div>
          <input type={showpwd?"password":"text"} placeholder="set password" 
          value={role==="student"?Ssignup.password:Tsignup.password}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"password"):handleTeacData(e.target.value,"password")}}/>

           <FontAwesomeIcon icon={faEye} className="showeye" onClick={showpass} style={{display:showpwd?"inline":"none"}}/> 
          <FontAwesomeIcon icon={faEyeSlash} className="closseye" onClick={showpass} style={{display:showpwd?"none":"inline"}}/>
          </div>

          {role === "student" && <><input placeholder="Your Class" id="classlist" onClick={showClasslist}  
          value={Ssignup.classId} onChange={()=>{}}/><br /></>}

          <ul style={{ display: showcls ? "block" : "none" }} onClick={showClasslist}>
            <li onClick={()=>{handleStudData("cls_9","classId")}}>10th</li>
            <li onClick={()=>{handleStudData("cls_10","classId")}}>9th</li>
            <li onClick={()=>{handleStudData("cls_plus1","classId")}}>plus1</li>
            <li onClick={()=>{handleStudData("cls_plus2","classId")}}>plus2</li>
          </ul>

          <input placeholder="Country"  value={role==="student"?Ssignup.country:Tsignup.country}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"country"):handleTeacData(e.target.value,"country")}}/>

          <input placeholder="State"  value={role==="student"?Ssignup.state:Tsignup.state}
          onChange={(e)=>{role==="student"?handleStudData(e.target.value,"state"):handleTeacData(e.target.value,"state")}}/><br />

          <button type="submit">submit</button>
        </form>

      </div>


    </div>
  )
}

export default Signupage;