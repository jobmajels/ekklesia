import React,{useContext,useState,useEffect} from 'react'
import './classroom.css'
import Showsubj from './viewSubject'

import {useParams} from 'react-router-dom'

import {Classroom,Classdata} from '../../Contextz/MyContext'

function TClassroom(){
      
const{id}=useParams()

//context

const{ClassRoom} =useContext(Classroom);
const{Classdatas}=useContext(Classdata);

//state

const[currentsubj,setCurrentsubj]=useState([])



function extractdata(){
    let result=[];

   for (let i = 0; i < Classdatas.length; i++) {

    let clsid = Classdatas[i].classId;
    let clsname = Classdatas[i].className;
     
    let currentcls=ClassRoom.find((value)=>{
         return value.classId===clsid
    })
    
    let currentteacher=currentcls.teachers;
    
     
    
    let data;
      for(let j=0;j<currentteacher.length;j++){

           if(currentteacher[j].teacherid===id){
              data = {classname:clsname,classid:clsid,subject:currentteacher[j].subjects};
               break;
           }
      }
      if(data){
      result.push(data);
      }
    }
     setCurrentsubj(result);
};


useEffect(() => {
        extractdata()
}, [Classdatas, ClassRoom, id]);

  
    return(

        <div className="Cmainbox">
            <h1>My Classrooms</h1>
           {currentsubj.map((value)=>{
             return <Showsubj classname={value.classname} subjects={value.subject} classid={value.classid} tid={id}/>
           })}
           
          

        </div>

    )
}

export default TClassroom;