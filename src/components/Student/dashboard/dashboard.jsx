import React,{useContext,useState,useEffect} from 'react'
import './dashboard.css'
import {useParams,Link,NavLink} from 'react-router-dom'
import Studschedulearea from './schedulearea'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell,faCircleUser} from "@fortawesome/free-solid-svg-icons";

import dashimg from '../../../assets/images/stdash.png'
import logo from '../../../assets/images/logo2.png'

import {Schooldata,Studsignupdatas} from '../../Contextz/MyContext'

function Sdashboard(){

const{id}=useParams()

//context
const{Schooldatas}=useContext(Schooldata);
const{StudsignupData}=useContext(Studsignupdatas);


//state
const[scholdata,setScholdata]=useState();
const[studcurrentdata,setStudcurrentdata]=useState();
const[clsid,setClsid]=useState();

//

useEffect(()=>{
    getCurrentstudData();
},[id,StudsignupData]);

useEffect(()=>{
   if(!studcurrentdata) return;
  schoolDetails();
},[studcurrentdata])

//stud datas

function getCurrentstudData(){
   const data = StudsignupData.find((value)=>{
          return value.id===id;
   });
   setStudcurrentdata(data);
   setClsid(data?.classId);
}

function schoolDetails(){
   let schoolinfo = Schooldatas.find((value)=>{
         return value.schoolid===studcurrentdata.schoolid;
   })
   setScholdata(schoolinfo);
}
 



useEffect(()=>{
  
},[scholdata]);

    return(
        <div className="mainbox">

            {/* <img src={dasg}/> */}
            
            <div className="sec1">

                  <img src={logo} alt="logo" width="100px"/>

                  <div className="dashCompont">
                    <NavLink to={`/studentdashboard/${id}`} className="menuitem">Dashboard</NavLink>
                    <NavLink to={`/studClassroom/${id}/${clsid}`} className="menuitem">Classrooms</NavLink>
                    <NavLink to={`/studnotes/${clsid}`} className="menuitem">Syllabus /<br/>Notes</NavLink>
                    <NavLink to={`/studasng/${clsid}`} className="menuitem">Assignments</NavLink>
                    <NavLink to={`/studexam/${clsid}`} className="menuitem">Exams</NavLink>
                     <NavLink to={`/noticebrd`} className="menuitem">Notice Board</NavLink>
                  

                  </div>

            </div>


             <div className="sec2">
                 <div className="schoolname">
                    <span>{scholdata?.schoolname}</span>
                 </div>

                  <div className="Tname">
                    <div>
                    <h1>Welcome back, {studcurrentdata?.fname}!</h1>
                    </div>
                    <img src={dashimg} alt="img2" height="100%" style={{objectFit:"cover"}}/>
                 </div>

                  <div className="Tschedule">
                       <Studschedulearea clsId={clsid} stdid={id}/>
                  </div>

            </div>


             <div className="sec3">

                 <div className="psec1">
                  <span className="notif">
                     <FontAwesomeIcon icon={faBell} />
                  </span>

                  <span className="profilesec">
                     <span>{studcurrentdata?.fname+" "+studcurrentdata?.lname}</span>
                     <Link to={`/studprofile/${id}`} className="profilelink"><FontAwesomeIcon icon={faCircleUser} /></Link>
                  </span>
               </div>

            </div>

        </div>
    );
}

export default Sdashboard;