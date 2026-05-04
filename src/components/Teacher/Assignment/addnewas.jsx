import React,{useContext,useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {NewAssgn} from '../../Contextz/MyContext'
import './addnewas.css'



function AddAssign(){

    const{subject,clsId}=useParams();
        const[quest,setQues]=useState([""]);
    const{newAssgn,setNewAssgn}=useContext(NewAssgn);
    const[newAssg,setNewAssg]=useState({
        subjectName:subject,
        assNo:"",
        topic:"",
        questions:quest,
        clsId:clsId
     });


   
        

function handleChange(value,key){
    const temp={...newAssg};
    temp[key]=value;
    setNewAssg(temp);
}



function handleQues(value,key){
    setQues((prev)=>{
        const temp=[...prev];
        temp[key]=value
        return temp;
    });
}

useEffect(()=>{
       console.log(newAssgn)
},[newAssgn])

useEffect(()=>{
setNewAssg((prev)=>{
           return {...prev,questions:quest}
    });
},[quest])

function osubmit(){

    setNewAssgn(newAssg);
     setNewAssg({
        subjectName:subject,
        assNo:"",
        topic:"",
        questions:quest,
        clsId:clsId
     });

     setQues([""]);
    
}

    return(

        <div className="newasgnbox">
              <label>subject:
                <input value={subject} readOnly/>
              </label>
                  <br/>
               <label>Assignment no:
                <input value={newAssg?.assNo || ""} onChange={(e)=>{handleChange(e.target.value,"assNo")}}/>
              </label>
                 <br/>
               <label>Topic:
                <input value={newAssg?.topic} onChange={(e)=>{handleChange(e.target.value,"topic")}}/>
              </label>
                  <br/>
               <label className="quest">Questions:
                {quest.map((value,key)=>{
                  return <input value={value} onChange={(e)=>{ handleQues(e.target.value,key)}} id="ques"
                  placeholder={`question ${key+1}`}/>
                })
                 }
                 <button onClick={()=>{setQues(prev=>[...prev,""])}} type="button">enter</button>
              </label>
              
              <button onClick={osubmit}>submit</button>
        </div>
    )
}

export default AddAssign;