import React, { useState, useEffect,useContext } from 'react'
import './examlist.css'
import {useNavigate} from 'react-router-dom'
import {NewExam} from '../../Contextz/MyContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function Examitems(props) {

    const {
        datas,
        clsid,
        subject,
        tid
    } = props

      const{newExams}=useContext(NewExam);

    const navigate = useNavigate()

    const [assign, setAssign] = useState();


    function getData() {

        let cls = datas.filter((value) => {
            return value.clsId === clsid;
        });

        let clsteach = cls.filter((value) => {
            return value.tId === tid;
        });

        let asign = clsteach[0]?.tests;

        let subj = asign?.filter((value) => {
            return value.subjectName === subject;
        })
        
        console.log(subj);
        let fdata = subj?.map((value)=>{
              return{
                ...value,
                clsId:clsid
              }
        })
        setAssign(fdata);

       
    }

    const[paradata,setParadata]=useState()

    useEffect(() => {
        const data=assign?.find((value)=>{
                 return value.subjectName=subject;
        });
          setParadata(data);
    }, [assign]);



    useEffect(() => {
        getData();
    }, [datas, clsid, subject]);


    const [showQue, setShowques] = useState({});

    function showQues(id) {
        setShowques((prev) => {
            return {
                ...prev,
                [id]: !prev[id]
            }
        });
    }
 
    useEffect(()=>{

        if(newExams.subjectName===subject && newExams.clsId===clsid){
         setAssign((prev)=>{
            return [...prev,newExams]
         })}
    },[newExams])


 
    return (
        <div>

            {assign?.map((value, key) => {
                return <>
                <div className="asignbox">
                    <span>Test-{value.testNo}</span>
                    <span>testType: {value.testType}</span>
                    <span className="topic">Topic: {value.topic}</span>
                    <button onClick={() => { showQues(key) }}>view questions</button>
                    <button>students submission</button>

                    <div className="question" style={{ display: showQue[key] ? "flex" : "none" }}>
                        <button onClick={() => { showQues(key) }}><FontAwesomeIcon icon={faXmark} style={{color: "rgb(0, 0, 0)",}} /></button>
                        {value.questions?.map((value, key) => {
                            return <span>{key + 1 + ")"} {value}</span>;
                        })}
                    </div>
                </div>


                </>
            })}
             
             <button onClick={()=>{navigate(`/addTest/${paradata.subjectName}/${paradata.clsId}`)}} id="btne">Add Assignment</button>
        
        </div>
    )

}

export default Examitems;