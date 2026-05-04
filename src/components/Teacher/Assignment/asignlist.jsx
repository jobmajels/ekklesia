import React, { useState, useEffect,useContext } from 'react'
import './asignlist.css'
import {useNavigate} from 'react-router-dom'
import {NewAssgn} from '../../Contextz/MyContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function Asignitems(props) {

    const {
        datas,
        clsid,
        subject,
        tid
    } = props

      const{newAssgn}=useContext(NewAssgn);

    const navigate = useNavigate()

    const [assign, setAssign] = useState();


    function getData() {

        let cls = datas.filter((value) => {
            return value.clsId === clsid;
        });

        let clsteach = cls.filter((value) => {
            return value.tId === tid;
        });

        let asign = clsteach[0]?.assignments;

        let subj = asign.filter((value) => {
            return value.subjectName === subject;
        })
        
        let fdata = subj.map((value)=>{
              return{
                ...value,
                clsId:clsid
              }
        })
        setAssign(fdata);

       
    }

    const[paradata,setParadata]=useState()

    useEffect(() => {
        console.log(assign);
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

        if(newAssgn.subjectName===subject && newAssgn.clsId===clsid){
         setAssign((prev)=>{
            return [...prev,newAssgn]
         })}
    },[newAssgn])


 
    return (
        <div>

            {assign?.map((value, key) => {
                return <>
                <div className="asignbox">
                    <span>Assignment-{value.assNo}</span>
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
             
             <button onClick={()=>{navigate(`/newassign/${paradata.subjectName}/${paradata.clsId}`)}} id="btne">Add Assignment</button>
        
        </div>
    )

}

export default Asignitems;