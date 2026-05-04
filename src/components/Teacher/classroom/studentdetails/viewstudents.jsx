import React,{useState,useContext,useEffect} from 'react'
import './viewstudents.css'
import {useParams} from 'react-router-dom'
import {Studprofiledatas} from '../../../Contextz/MyContext'
import  Studinfo from './studinfo'



function ViewStudentDetails(){

    const{classid,classname,tid}=useParams();
     
    //context
    const{Studprofiledata}=useContext(Studprofiledatas);

    //state
    const[currentstud,setCurrentstud]=useState([])
  
    function getStud(){
        let cstud=Studprofiledata?.filter((value)=>{
             return value.classId===classid;
        });
        setCurrentstud(cstud);
    }

  useEffect(()=>{
    getStud();
  },[Studprofiledata])

    return(


    <div className="viewmc">
    <div className="viewmbox">

        {currentstud?.map((value)=>{
            return <Studinfo fullName={value.fullName} gender={value.gender} sid={value.id} parentpno={value.parentsphno} phno={value.phno} 
            country={value.country} state={value.state} email={value.email} tid={tid} classid={classid}/>
        })}

    </div>
    </div>

    );
}

export default ViewStudentDetails;