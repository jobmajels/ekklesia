import React,{useContext,useState,useEffect} from 'react'
import './dashboard.css'

import {NavLink,useParams,Link} from 'react-router-dom'

import dashimg from '../../../assets/images/dashimg1.png'
import logo from '../../../assets/images/logo2.png'
import dasg from '../../../assets/images/dashbgl.jfif'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell,faCircleUser} from "@fortawesome/free-solid-svg-icons";

import Schedulearea from './schedulearea'

import {Teachsignupdatas,Schooldata} from '../../Contextz/MyContext'

function Tdashboard(){

   const{id}=useParams();

  



//context
const{Schooldatas}=useContext(Schooldata);
const{TeachsignupData}=useContext(Teachsignupdatas);


//state
const[scholdata,setScholdata]=useState();
const[teachcurrentdata,setTeachcurrentdata]=useState();


//

useEffect(()=>{
    getCurrentTeachData();
},[id,TeachsignupData]);

useEffect(()=>{
    if(!teachcurrentdata) return;
  schoolDetails();
},[teachcurrentdata])

//teach datas

function getCurrentTeachData(){
   const data = TeachsignupData.find((value)=>{
          return value.id===id;
   });
   setTeachcurrentdata(data);
}

function schoolDetails(){
   let schoolinfo = Schooldatas.find((value)=>{
         return value.schoolid===teachcurrentdata.schoolid;
   })
   setScholdata(schoolinfo);
}
 



useEffect(()=>{
   console.log(scholdata);
 console.log(teachcurrentdata);
},[scholdata,teachcurrentdata]);



    return(
        <div className="mainbox">

            {/* <img src={dasg}/> */}
            
            <div className="sec1">

                  <img src={logo} alt="logo" width="100px"/>

                  <div className="dashCompont">
                    <NavLink to={`/teacherdashboard/${id}`} className="menuitem">Dashboard</NavLink>
                    <NavLink to={`/tclassroom/${id}`} className="menuitem">Classrooms</NavLink>
                    <NavLink to={`/teachNotesSyllabus/${id}`} className="menuitem">Syllabus /<br/>Notes</NavLink>
                    <NavLink to={`/Assignmenthomepge/${id}`} className="menuitem">Assignments</NavLink>
                    <NavLink to={`/examhomepge/${id}`} className="menuitem">Exams</NavLink>
                    <NavLink to={`/scheduleclass/${id}`} className="menuitem">Schedule Class</NavLink>
                    <NavLink to={`/noticebrd`} className="menuitem">Notice Board</NavLink>
         
                   

                  </div>

            </div>


             <div className="sec2">
                 <div className="schoolname">
                    <span>{scholdata?.schoolname}</span>
                 </div>

                 <div className="Tname">
                    <div>
                    <h1>Welcome back, {teachcurrentdata?.fname}!</h1>
                    <h3>Your students completed 80% of the task</h3>
                    </div>
                    <img src={dashimg} alt="img2" height="100%" style={{objectFit:"cover"}}/>
                 </div>

                  <div className="Tschedule">
                       <Schedulearea tid={id}/>
                  </div>

            </div>


             <div className="sectp">

                <div className="psec1">
                  <span className="notif">
                     <FontAwesomeIcon icon={faBell} />
                  </span>

                  <span className="profilesec">
                     <span>{teachcurrentdata?.fname+" "+teachcurrentdata?.lname}</span>
                     <Link to={`/tprofile/${id}/${scholdata?.schoolname}`} className="profilelink"><FontAwesomeIcon icon={faCircleUser} /></Link>
                  </span>
               </div>
                 
            </div>

        </div>
    );
}

export default Tdashboard;