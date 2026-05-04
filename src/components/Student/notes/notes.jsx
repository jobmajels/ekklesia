import React,{useContext,useEffect,useState} from 'react'
import './notes.css'
import {useParams} from 'react-router-dom'
import {Classnotes} from '../../Contextz/MyContext'
import Ssubjects from './subjects'

function Snotes(){


const {Classnote}=useContext(Classnotes);
const{clsid}=useParams()

const[subj,setSubjects]=useState([]);

function getNotes(){

    let classinfo = Classnote.find((value)=>{
                return value.classId===clsid;
    });
    
    setSubjects(classinfo?.subjects);

}

useEffect(()=>{
      getNotes()
},[Classnote,clsid])

useEffect(()=>{
      console.log(subj)
},[subj]);


    return(
    <div className="subjbox">
        {
        
             <Ssubjects subject={subj}/>
               
          
        }
    </div>

    )}

export default Snotes;