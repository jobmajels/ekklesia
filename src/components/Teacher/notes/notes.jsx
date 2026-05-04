import React,{useContext,useEffect,useState} from 'react'
import './notes.css'
import {useParams} from 'react-router-dom'
import {Classnotes} from '../../Contextz/MyContext'
import Subjects from './subjects'

function Tnotes(){


const {Classnote}=useContext(Classnotes);
const{id}=useParams()

const[subj,setSubjects]=useState([]);

function getNotes(){

     let subject=Classnote.map((value)=>{
          return{
            classId:value.classId,
            className:value.className,
            subjects:value.subjects?.filter((sub)=>{
                      return sub.tid===id;
            })
          }
    });
 
    setSubjects(subject); 

}

useEffect(()=>{
      getNotes()
},[Classnote,id])




    return(
    <div className="subjbox">
        {
           subj?.map((value)=>{

            return <div className="sec1">
                <span className="clsname">{value.className}</span>
                <Subjects subject={value.subjects}/>
                </div>
           }) 
        }
    </div>

    )}

export default Tnotes;