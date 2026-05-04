import React,{useState,useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './classroom.css'
import Subjectlist from './subjtlist/subjectlist'
import './classroom.css'
import {Classnotes,Classdata,Studsignupdatas} from '../../Contextz/MyContext'


function StudClassroom(){

 const{id,clsid}=useParams();

//context
const{Classnote}=useContext(Classnotes);
const{Classdatas}=useContext(Classdata);
const{StudsignupData, setStudSignupData}=useContext(Studsignupdatas);


//state

const[classname,setClassname]=useState();
const[subjectinfo,setSubjectinfo]=useState([]);

function finddatas(){
    let cname = Classdatas.find((value)=>{
          return value.classId===clsid;
    });
    setClassname(cname?.className);

    let clsroom=Classnote.find((value)=>{
        return value.classId===clsid;
    });
     let subjectinfo=clsroom.subjects;

       

     let nameinfo;
     let arr=[];
     for(let i=0;i<subjectinfo.length;i++){
         nameinfo={subname:subjectinfo[i].subjectName,teachername:subjectinfo[i].teacher,tid:subjectinfo[i].tid};
         arr.push(nameinfo);
     }

      setSubjectinfo(arr)

}

useEffect(()=>{
   finddatas()
},[Classdatas]);


useEffect(()=>{
    console.log(subjectinfo);
    
},[subjectinfo])

    return(
        <div className="Cmainbox">
          <h3>class name: {classname}</h3>
             {subjectinfo.map((value)=>{
                  return <Subjectlist subjectname={value.subname} teachername={value.teachername} clsid={clsid} stdid={id} tid={value.tid}/>
             })}
        </div>
    )
}

export default StudClassroom ;