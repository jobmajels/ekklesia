import React,{useContext,useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {NewExam} from '../../Contextz/MyContext'
import './addnewex.css'



function AddTest(){

    const{subject,clsId}=useParams();

        const[quest,setQues]=useState([""]);
        
        const{newExams,setNewExams}=useContext(NewExam);

    const[newAssg,setNewAssg]=useState({
        subjectName:subject,
        testNo:"",
        testType:"",
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
       console.log(newExams)
},[newExams])

useEffect(()=>{
setNewAssg((prev)=>{
           return {...prev,questions:quest}
    });
},[quest])

function osubmit(){

    setNewExams(newAssg);
      setNewAssg({
        subjectName:subject,
        testNo:"",
        testType:"",
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
               <label>Test no:
                <input value={newAssg?.testNo || ""} onChange={(e)=>{handleChange(e.target.value,"testNo")}}/>
              </label>
                 <br/>
                  <label>Test Type:
                <input value={newAssg?.testType || ""} onChange={(e)=>{handleChange(e.target.value,"testType")}}/>
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

export default AddTest;